import { Header } from "../components/Header";
import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  const handleSouAluno = () => {
    router.push('/sou_aluno');
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Header/>
      <View style={{ flex: 1 }}>

        <ImageBackground
          source={require("../assets/images/PáginaInicial/banner.png")}
          style={estilos.imgPagInicial}
        >
          <View style={estilos.overlay}>
            <View style={estilos.conteudoPrincipal}>
              <Image
                source={require("../assets/images/PáginaInicial/ROTA_IFPR.png")}
                style={estilos.rotaLogo}
              />
              <Text style={estilos.textoTitulo}>BEM-VINDO AO ROTA IFPR</Text>
              <Text style={estilos.textoInicial}>
                Seu guia completo para o curso de Gestão da Tecnologia da Informação.
              </Text>
              <Text style={estilos.textoInicial}>
                Navegue pelas opções abaixo e descubra tudo que o IFPR Campus Pinhais tem para oferecer.
              </Text>

              <View style={estilos.section}>
                <TouchableOpacity onPress={() => router.push("/queroseraluno")} style={estilos.botaoCompleto}>
                  <Ionicons name="person-add-outline" size={25} color="#FFFFFF" />
                  <Text style={estilos.textoBotao}>Quero Ser Aluno</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSouAluno} style={estilos.botaoCompleto}>
                  <Ionicons name="person-outline" size={25} color="#FFFFFF" />
                  <Text style={estilos.textoBotao}>Sou Aluno</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  imgPagInicial: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 40,
  },

  conteudoPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    maxWidth: 400,
    width: '100%',
  },

  rotaLogo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    alignSelf: "center",
  },
  
  textoTitulo: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  textoInicial: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },

  section: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },

  botaoCompleto: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: '45%',
    height: 80,
    borderRadius: 25,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
}); 