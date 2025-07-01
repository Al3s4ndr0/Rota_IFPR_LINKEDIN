import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Alert, Modal, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Header } from '@/components/Header';
import { router } from 'expo-router';
import { collection, query, where, orderBy, onSnapshot, updateDoc, arrayUnion, arrayRemove, doc, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { getAuth } from 'firebase/auth';
import { Camera, CameraView } from 'expo-camera';
import type { CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageToCloudinary } from './cloudinary';

interface Mensagem {
  id: string;
  usuarioEmail: string;
  usuarioNome: string;
  usuarioFoto: string;
  mensagem: string;
  dataCriacao: { seconds: number; nanoseconds: number };
  fixadoPor?: string[];
  tipo?: 'texto' | 'imagem';
}

type Filtro = 'recentes' | 'antigas' | 'fixadas';

export default function LoginMural() {
  const auth = getAuth();
  const user = auth.currentUser;
  const userEmail = user?.email || '';
  const userFoto = user?.photoURL || '';

  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [novaMensagem, setNovaMensagem] = useState('');
  const [filtroSelecionado, setFiltroSelecionado] = useState<Filtro>('recentes');
  const [modalCameraVisivel, setModalCameraVisivel] = useState(false);
  const [temPermissao, setTemPermissao] = useState<boolean | null>(null);
  const [menuCameraVisivel, setMenuCameraVisivel] = useState(false);
  const cameraRef = useRef<CameraView | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [cameraType] = useState<CameraType>('back');

  useEffect(() => {
    let q;
    if (filtroSelecionado === 'fixadas' && userEmail) {
      q = query(
        collection(db, 'mensagens'),
        where('fixadoPor', 'array-contains', userEmail),
        orderBy('dataCriacao', 'desc')
      );
    } else {
      q = query(
        collection(db, 'mensagens'),
        orderBy('dataCriacao', filtroSelecionado === 'antigas' ? 'desc' : 'asc')
      );
    }
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista: Mensagem[] = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() } as Mensagem);
      });
      setMensagens(lista);
    });
    return () => unsubscribe();
  }, [filtroSelecionado, userEmail]);

  useEffect(() => {
    if (mensagens.length > 0 && scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [mensagens, filtroSelecionado]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setTemPermissao(status === 'granted');
    })();
  }, []);

  const enviarMensagem = async () => {
    const authUser = getAuth().currentUser;
    if (!authUser) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }
    if (!novaMensagem.trim()) {
      Alert.alert("Erro", "Digite uma mensagem antes de enviar.");
      return;
    }
    try {
      await addDoc(collection(db, "mensagens"), {
        usuarioEmail: authUser.email,
        usuarioNome: authUser.displayName || authUser.email?.split('@')[0] || '',
        usuarioFoto: authUser.photoURL || '',
        mensagem: novaMensagem,
        tipo: 'texto',
        dataCriacao: new Date(),
        fixadoPor: [],
      });
      setNovaMensagem('');
    } catch (e: any) {
      Alert.alert("Erro ao enviar mensagem", e.message);
    }
  };

  const alternarFixado = async (mensagem: Mensagem) => {
    const ref = doc(db, "mensagens", mensagem.id);
    const estaFixado = mensagem.fixadoPor?.includes(userEmail);
    try {
      await updateDoc(ref, {
        fixadoPor: estaFixado
          ? arrayRemove(userEmail)
          : arrayUnion(userEmail),
      });
    } catch (e: any) {
      Alert.alert("Erro ao atualizar fixação", e.message);
    }
  };

  const enviarImagemParaCloudinary = async (imageUri: string) => {
    const authUser = getAuth().currentUser;
    if (!authUser) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }
    try {
      const downloadURL = await uploadImageToCloudinary(imageUri);
      await addDoc(collection(db, "mensagens"), {
        usuarioEmail: authUser.email,
        usuarioNome: authUser.displayName || authUser.email?.split('@')[0] || '',
        usuarioFoto: authUser.photoURL || '',
        mensagem: downloadURL,
        tipo: 'imagem',
        dataCriacao: new Date(),
        fixadoPor: [],
      });
    } catch (error: any) {
      Alert.alert("Erro ao enviar imagem", `Erro: ${error.message}`);
    }
  };

  const tirarFoto = async () => {
    if (cameraRef.current) {
      try {
        const foto = await cameraRef.current.takePictureAsync({ 
          quality: 0.8,
          base64: false,
          exif: false
        });
        setModalCameraVisivel(false);
        if (foto && foto.uri) {
          await enviarImagemParaCloudinary(foto.uri);
        } else {
          Alert.alert('Erro ao tirar foto', 'Nenhuma foto capturada.');
        }
      } catch (error: any) {
        Alert.alert('Erro ao tirar foto', `Erro: ${error.message}`);
      }
    } else {
      Alert.alert('Erro', 'Câmera não está disponível');
    }
  };

  const selecionarImagem = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
      });
      if (!result.canceled && result.assets && result.assets[0]?.uri) {
        await enviarImagemParaCloudinary(result.assets[0].uri);
      } else {
        Alert.alert("Nenhuma imagem selecionada.");
      }
    } catch (error: any) {
      Alert.alert("Erro ao selecionar imagem", error.message);
    }
  };

  const renderBotaoFiltro = (label: string, tipo: Filtro) => (
    <TouchableOpacity
      style={[styles.botao, filtroSelecionado === tipo && styles.botaoAtivo]}
      onPress={() => setFiltroSelecionado(tipo)}
    >
      <Text style={styles.botoefilter}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.banner}>
        <Image source={require("../assets/images/SouAluno/Faixa.png")} style={styles.bannerimagem} />
        <Text style={styles.bannerText}>Mural dos Estudantes</Text>
      </View>
      <View style={styles.section}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtrosScroll}
          contentContainerStyle={styles.filtrosContainer}
        >
          {renderBotaoFiltro('Mais recentes', 'recentes')}
          {renderBotaoFiltro('Mais antigas', 'antigas')}
          {renderBotaoFiltro('Fixadas', 'fixadas')}
        </ScrollView>
        <TouchableOpacity style={styles.botaoSair} onPress={() => router.push("/murallogin")}> 
          <Ionicons name="log-out-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent} ref={scrollViewRef}>
        <View style={styles.mensagensWrapper}>
          {mensagens.map((msg) => {
            const estaFixado = msg.fixadoPor?.includes(userEmail);
            const ehImagem = msg.tipo === 'imagem' || 
              (msg.mensagem && msg.mensagem.includes('cloudinary.com'));
            return (
              <View key={msg.id} style={styles.cartaoMensagem}>
                <View style={styles.cabecalhoMensagem}>
                  <View style={styles.usuarioInfo}>
                    <Text style={styles.emailUsuario}>
                      {msg.usuarioEmail}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => alternarFixado(msg)}>
                    <Ionicons name={estaFixado ? "star" : "star-outline"} size={24} color="gold" />
                  </TouchableOpacity>
                </View>
                {ehImagem ? (
                  <View style={styles.containerImagem}>
                    <Image 
                      source={{ 
                        uri: msg.mensagem,
                        headers: {
                          'Accept': 'image/*',
                        },
                      }} 
                      style={styles.imagemMensagem}
                      resizeMode="contain"
                      onError={() => {}}
                      onLoad={() => {}}
                    />
                  </View>
                ) : (
                  <Text style={styles.textoMensagem}>{msg.mensagem}</Text>
                )}
                <Text style={styles.dataMensagem}>
                  {new Date(msg.dataCriacao.seconds * 1000).toLocaleString()}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity 
            style={styles.botaoCamera} 
            onPress={() => setMenuCameraVisivel(!menuCameraVisivel)}
          >
            <Ionicons name="camera" size={20} color="#666" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Escreva sua mensagem"
            placeholderTextColor="#999"
            value={novaMensagem}
            onChangeText={setNovaMensagem}
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={enviarMensagem}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
        {menuCameraVisivel && (
          <>
            <TouchableOpacity 
              style={styles.overlay} 
              onPress={() => setMenuCameraVisivel(false)}
            />
            <View style={styles.menuCamera}>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => {
                  setMenuCameraVisivel(false);
                  setModalCameraVisivel(true);
                }}
              >
                <Ionicons name="camera" size={16} color="white" />
                <Text style={styles.menuTexto}>Câmera</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => {
                  setMenuCameraVisivel(false);
                  selecionarImagem();
                }}
              >
                <Ionicons name="images" size={16} color="white" />
                <Text style={styles.menuTexto}>Galeria</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      <Modal visible={modalCameraVisivel} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          {temPermissao === null ? (
            <Text>Solicitando permissão para usar a câmera...</Text>
          ) : temPermissao === false ? (
            <Text>Permissão para câmera negada.</Text>
          ) : (
            <CameraView
              style={{ width: '100%', height: '80%' }}
              facing={cameraType}
              ref={cameraRef}
            />
          )}
          <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#2196F3', padding: 15, borderRadius: 10 }} onPress={tirarFoto}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Tirar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 10 }} onPress={() => setModalCameraVisivel(false)}>
            <Text style={{ color: 'white' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: { 
    height: 87,
    justifyContent: 'center',
  },
  bannerimagem: { 
    width: '100%',
    height: 87,
    resizeMode: 'cover',
    position: 'absolute',
  },
  bannerText: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  filtrosScroll: {
    flex: 1,
  },
  filtrosContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoSair: {
    padding: 5,
    marginLeft: 10,
  },
  botao: {
    marginHorizontal: 5,
    backgroundColor: "gray",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  botaoAtivo: {
    backgroundColor: "#007B55",
  },
  botoefilter: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  mensagensWrapper: {
    padding: 10,
    paddingBottom: 20,
  },
  cartaoMensagem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cabecalhoMensagem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usuarioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fotoUsuario: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoUsuario: {
    flexDirection: 'column',
    flex: 1,
  },
  nomeUsuario: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  emailUsuario: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  textoMensagem: {
    marginTop: 6,
    fontSize: 15,
    color: '#333',
  },
  dataMensagem: {
    marginTop: 4,
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  botaoCamera: {
    padding: 10,
    marginLeft: 5,
  },
  sendButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  menuCamera: {
    position: 'absolute',
    bottom: 70,
    left: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 120,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
  },
  menuTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  imagemMensagem: {
    width: 250,
    height: 200,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#f0f0f0',
  },
  containerImagem: {
    marginTop: 10,
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    backgroundColor: 'transparent',
  },
});
