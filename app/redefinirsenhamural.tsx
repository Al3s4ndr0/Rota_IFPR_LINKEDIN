import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, TextInput, Alert, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';



export default function LoginMural() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  }
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleLogin = () => {
  Alert.alert('Login', `Email: ${email}\nSenha: ${senha}`);
  }  

  return (
    <ScrollView>
      <Header/>
      <View style={styles.linhaVermelha} />
      <View style={styles.banner}>
        <Image source={require("../assets/images/SouAluno/Faixa.png")}  style={styles.bannerimg}/>
        <Text style={styles.bannerText}>Mural dos Estudantes</Text>
      </View>

        <View style={styles.informativo}>
          <View>
          <Text style={styles.redefinirTitulo}> Esqueceu sua senha?</Text>
          <Text style={styles.redefinirtexto}> Nos encaminhe um email para contatorotaifor@gmail.com contendo seu email de acesso, seu número de matrícula que sua senha será redefinida e repassado por email após validação</Text>
          <Text style={styles.redefinirTitulo}> Não tem Cadastro?</Text>
          <Text style={styles.redefinirtexto}> Nos encaminhe um email para mailto:contatorotaifor@gmail.com contendo seu nome completo, email que utiliza ou pretende utilizar, seu número de matrícula e CPF que seu usuário será criado e repassado por email após validado seu vinculo estudantil com o IFPR.</Text>
          <Text style={styles.redefinirtexto}>CASO QUEIRA, SEU EMAIL CADASTRADO PODERÁ SER O EMAIL INSTITUCIONAL, SE NÃO SOUBER COMO ACESSAR VEJA ABAIXO:</Text>       
          </View>
        </View>
        <View style={styles.firstacess}>
        <Text style={styles.redefinirTitulo}> Não sabe qual é seu email Institucional?</Text>
        <Text style={styles.redefinirtexto}> Não se preocupa, o Rota te ajuda, navegue até a página de Plataformas clicando no botão abaixo que lá te explicamos como conseguir fazer o 1º acesso no email</Text>
        <TouchableOpacity onPress={() => router.push("/plataformaserecursos")}>
          <Text style={styles.botao}>Plataformas e Recursos</Text>
        </TouchableOpacity>
        </View>
    <View style={styles.rodape}>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner:{ 
    height:87,
  },
  bannerimg:{
    width: 415,
  },
  bannerText: {
    marginLeft: 30,
    marginTop: -60,
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
  },

  redefinirTitulo: {
    textAlign: "center",
    fontSize: 24,
    color: "#26764D",
    marginBottom: 5,
  },

  redefinirtexto: {
    textAlign: "center",
    fontSize: 16,
    color: "blaxk",
    marginBottom: 10,
  },

  imagem:{
    alignSelf: "center",
    height: 160,
    width: 380,
    margin: 15,
    borderWidth: 1,
    borderColor: "gray",
  },

  botao:{
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "green",
    width: 150,
    padding: 10,
    borderRadius: 30,   
  },

  botaogoogle:{
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#343434",
    width: 150,
    padding: 10,
    borderRadius: 30,   
  },

  textobotao:{
    fontSize: 26,
    color:"white",
  },

  firstacess:{
    marginTop: 30,
    marginBottom: -30,
  },

  rodape:{
    marginTop: 50,
    backgroundColor: "#009F48",
    padding: 30,
  },

  linhaVermelha: {
    height: 2,
    backgroundColor: "red",
    marginHorizontal: 1,
  },

});