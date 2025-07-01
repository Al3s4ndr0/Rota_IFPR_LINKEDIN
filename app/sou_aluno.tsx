import React from 'react';
import { Header } from '@/components/Header';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SouAluno() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Header/>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.banner}>
            <Image source={require("../assets/images/SouAluno/Faixa.png")}  style={styles.bannerimagem}/>
            <Text style={styles.bannerText}>Espaço do Aluno</Text>
          </View>

          <View style={styles.acesso}>
            <View>
              <Text style={styles.acessoTitulo}>Acesso rápido</Text>
            </View>
            <View style={styles.link}>
              <Botao texto="Grade Horária" url="https://ifpr.edu.br/pinhais/institucional/area-do-aluno/horario-de-aulas-e-atendimento/"/>
              <Botao texto="Agenda" url="https://ifpr.edu.br/pinhais/institucional/area-do-aluno/calendario-academico/" />
              <Botao texto="SUAP" url="https://suap.ifpr.edu.br/" />
              <Botao texto="AVA" url="https://ava.ifpr.edu.br/" />
            </View>
          </View>

          <View style={styles.containerBotoes}>
            <View style={styles.muralContainer}>
              <TouchableOpacity onPress={() => router.push("/murallogin")}> 
                <View style={styles.botaoprincipal}> 
                  <Image source={require("../assets/images/SouAluno/Muralestudantes.png")} style={styles.imagem}/>
                  <Text>MURAL DOS ESTUDANTES</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.botoesGrid}>
              <View style={styles.linhaGrid}>
                <TouchableOpacity onPress={() => router.push("/manualdoaluno")} style={styles.botaoPequeno}>
                  <Image source={require("../assets/images/SouAluno/manual.png")} style={styles.imagem}/>
                  <Text>MANUAL DO ALUNO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/plataformaserecursos")} style={styles.botaoPequeno}>
                  <Image source={require("../assets/images/SouAluno/plataformas.png")} style={styles.imagem}/>
                  <Text>PLATAFORMAS</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.linhaGrid}>
                <TouchableOpacity onPress={() => router.push("/bibliotecas")} style={styles.botaoPequeno}>
                  <Image source={require("../assets/images/SouAluno/bibliotecas.png")} style={styles.imagem}/>
                  <Text>BIBLIOTECA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/emailseatendimento")} style={styles.botaoPequeno}>
                  <Image source={require("../assets/images/SouAluno/atendimento.png")} style={styles.imagem}/>
                  <Text>ATENDIMENTO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.rodape}>
        </View>
      </View>
    </SafeAreaView>
  );
}

type BotaoProps = {
  texto: string;
  url: string;
};

function Botao({ texto, url }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(url)}>
      <Text style={styles.linkText}>{texto}</Text>
    </TouchableOpacity>
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
  banner:{ 
    height: 87,
    justifyContent: 'center',
  },
  bannerimg:{
    width: 415,
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

  acesso: {
    backgroundColor: '#343434',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    paddingVertical: 20,
    paddingHorizontal: 4,
  },

  acessoTitulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 5,
  },

  link: {
    width: '95%',
    alignSelf: "center",
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#1C1C1C',
    padding: 5,
    borderRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },

  linkText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  containerBotoes: {
    width: '100%',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  botaoprincipal: {
    padding: 10,
    alignItems: "center",
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  
  botoesGrid: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 0,
  },

  linhaGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
    gap: 15
  },

  botaoPequeno: {
    padding: 10,
    alignItems: "center",
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    flex: 1,
  },
 

  imagem:{
    width:80,
    height:80,
    alignSelf: "center",
  },

  rodape:{
    backgroundColor: "#009F48",
    padding: 30,
  },

  linkButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
    marginHorizontal: 4,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },

  muralContainer: {
    marginBottom: 16,
  },
});