import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Alert, SafeAreaView } from 'react-native';
//import email from 'react-native-email';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [emailAddress, setEmailAddress] = useState(''); 
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarEmail = () => {
    if (!nome || !emailAddress || !mensagem) {
      Alert.alert('Por Favor', 'Preencha os campos obrigatórios.');
      return;
    }

    const to = ['contatorotaifpr@gmail.com']; 
    //email(to, {
      //subject: 'Contato via App',
      //body: `Nome: ${nome}\nEmail: ${emailAddress}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
    //}).catch(console.error);

    setNome('');
    setEmailAddress('');
    setTelefone('');
    setMensagem('');
    Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.banner}>
          <Image source={require("../assets/images/SouAluno/Faixa.png")} style={styles.bannerimagem}/>
          <Text style={styles.bannerText}>Contato</Text>
        </View>
        <View style={styles.informativo}>
          <Text style={styles.loginTitulo}>Envie sua dúvida ou sugestão para nós. Assim que possível ela será respondida.</Text>
        </View>
        <View>
          <View style={styles.labelRow}>
            <Text style={styles.descforms}>Nome</Text>
            <Text style={styles.asterisco}>*</Text>
          </View>
          <TextInput style={styles.input} placeholder="Digite seu Nome" placeholderTextColor="#999" keyboardType="default" autoCapitalize="none" value={nome}  onChangeText={setNome}/>

          <View style={styles.labelRow}>
            <Text style={styles.descforms}>E-mail</Text>
            <Text style={styles.asterisco}>*</Text>
          </View>
          <TextInput style={styles.input} placeholder="Digite seu Email" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" value={emailAddress} onChangeText={setEmailAddress}/>

          <Text style={styles.descforms}>Telefone/Whatsapp</Text>
          <TextInput style={styles.input} placeholder="Digite seu Telefone/Whatsapp" placeholderTextColor="#999" keyboardType="default" autoCapitalize="none" value={telefone} onChangeText={setTelefone}/>

          <View style={styles.labelRow}>
            <Text style={styles.descforms}>Mensagem</Text>
            <Text style={styles.asterisco}>*</Text>
          </View>
          <TextInput style={[styles.input, {height: 80}]} placeholder="Digite sua Mensagem" placeholderTextColor="#999" multiline keyboardType="default"  autoCapitalize="none" value={mensagem} onChangeText={setMensagem}/>

          <Text style={styles.aviso}>* Campos obrigatórios</Text>
          <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
            <Text style={styles.textobotao}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.rodape}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
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
  informativo: {
    backgroundColor: '#E2E2E2',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 20,
    marginTop: -2,
  },
  loginTitulo: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
    marginBottom: 5,
    lineHeight: 26,
  },
  descforms: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    marginHorizontal: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  aviso: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "red",
  },
  botao: {
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "black",
    width: 250,
    padding: 12,
    borderRadius: 30,
  },
  textobotao: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold',
  },
  rodape: {
    backgroundColor: "#009F48",
    padding: 30,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  asterisco: {
    color: 'red',
    fontSize: 18,
  },
});
