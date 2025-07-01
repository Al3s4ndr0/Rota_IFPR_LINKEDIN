import React  from 'react';
import { Header } from '@/components/Header';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

function Accordion({ title, children, icone }: { title: string; children: React.ReactNode; icone?: keyof typeof Ionicons.glyphMap }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={accordionStyles.container}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={accordionStyles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icone && <Ionicons name={icone} size={22} color="#fff" style={{ marginRight: 10 }} />}
          <Text style={accordionStyles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      {expanded && <View style={accordionStyles.content}>{children}</View>}
    </View>
  );
}

const accordionStyles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
    elevation: 2,
  },
  header: {
    padding: 15,
    backgroundColor: '#009F48',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18,
    padding: 15,
    backgroundColor: '#fff',
  },
});

export default function QueroSerAluno() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header/>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={styles.banner}>
            <Image source={require("../assets/images/SouAluno/Faixa.png")}  style={styles.bannerimagem}/>
            <Text style={styles.bannerText}>Bibliotecas</Text>
          </View>
          
          <Image 
            source={require("../assets/images/MatrizCurricular/bibli.png")} 
            accessibilityLabel="Biblioteca" 
            style={styles.bannerimg} 
          />

          <View style={styles.section}>
          <View>
            <Accordion title='Biblioteca do Campus Pinhais' icone='library'>
            <Text style={styles.descritivo}>
              A biblioteca do IFPR Pinhais é um espaço dinâmico e acolhedor que vai muito além de um simples acervo de livros do campus. Aqui, você encontra ambientes de estudo confortáveis e bem equipados, tanto para uso individual quanto para grupos, promovendo um ambiente propício para a leitura e a realização de projetos.
            </Text>
            <Text style={styles.descritivo}>
              Nosso horário de funcionamento é de segunda a sexta-feira, das 08h00 às 20h00, garantindo amplo acesso aos recursos e serviços oferecidos.
            </Text>
            
            <Text style={styles.titulo}>CONTEÚDO</Text>
            <View style={styles.botoes}>
              <TouchableOpacity onPress={() => Linking.openURL("https://biblioteca.ifpr.edu.br/?_ga=2.260957197.100605356.1690800874-2008693651.1686318051")} style={styles.botao}>
                <Text style={styles.textobotao}>CONSULTA AO ACERVO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://biblioteca.ifpr.edu.br/login?redirect=/meupergamum")} style={styles.botao}>
                <Text style={styles.textobotao}>RENOVAÇÃO ONLINE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://ifpr.edu.br/rede-de-bibliotecas-do-ifpr/trabalhos-academicos/")} style={styles.botao}>
                <Text style={styles.textobotao}>TEMPLATE PARA TRABALHOS</Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.titulo, {marginTop: 60}]}>CONTATO</Text>
            <View style={styles.botoes}>
            <TouchableOpacity onPress={() => Linking.openURL("mailto:biblioteca.pinhais@ifpr.edu.br")} style={styles.botao}>
              <Text style={styles.textobotao}>EMAIL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/bibliotecapinhaisifpr")} style={styles.botao}>
              <Text style={styles.textobotao}>INSTAGRAM</Text>
            </TouchableOpacity>
            </View>
            </Accordion>
          </View>

          <Image source={require("../assets/images/MatrizCurricular/biblivirtual.png")} accessibilityLabel="Biblioteca" style={styles.secondaryimg}/>

          <View>
            <Accordion title='Biblioteca Virtual' icone='globe'>
            <Text style={styles.descritivo}>
              A Biblioteca Virtual do IFPR complementa e expande a experiência da nossa biblioteca física. Disponível 24 horas por dia, nossa plataforma digital oferece uma vasta coleção de e-books. Aproveite o conforto da sua casa ou qualquer outro lugar para continuar seus estudos e pesquisas.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://plataforma.bvirtual.com.br/")} style={styles.botaobibli}>
              <Text style={styles.textobotaobibli}>Biblioteca Virtual</Text>
            </TouchableOpacity>

            <View style={styles.firstacess}>
            <Text style={styles.firstacesstitulo}>
              Como acessar a Biblioteca Virtual?
            </Text>
            <View style={{marginBottom: 15}}>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Você precisa estar cadastrado na Biblioteca no campus e saber seu login e senha.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Acesse biblioteca.ifpr.edu.br. ("Botão Roxo acima")</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Pesquise por um e-book e clique no cadeado ao lado do resultado.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Na janela pop-up preencha com login e senha da Biblioteca do campus.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Você será redirecionado para a Biblioteca Virtual, siga as instruções para realizar seu cadastro.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Prontinho! Agora você pode escolher como prefere acessar a Biblioteca Virtual.</Text></View>
            </View>
            </View>
            </Accordion>
          </View>
          </View>
        </View>
        <View style={styles.rodape}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner:{ 
    height: 87,
    justifyContent: 'center',
  },
  bannerimg:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerimagem: {
    width: '100%',
    height: 87,
    resizeMode: 'cover',
    position: 'absolute',
  },
  secondaryimg:{
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 30,
  },
  bannerText: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  descritivo:{
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'justify',
  },
  botoes:{
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
  },
  botao:{
    width: 140,
    margin: 5,
    backgroundColor: "#333",
    borderRadius: 15,
    padding: 12,
    alignSelf: "center",
  },
  botaobibli:{
    width:150,
    margin: 5,
    backgroundColor: "#945EE0",
    borderRadius: 25,
    padding:15,
    alignSelf: "center",
  },
  textobotao:{
    fontSize: 12,
    color: "white",
    fontWeight:"bold",
    textAlign: "center",
    alignContent: "center",
  },
  textobotaobibli:{
    fontSize: 15,
    color: "white",
    fontWeight:"bold",
    textAlign: "center",
    alignContent: "center",
  },
  firstacess:{
    marginTop: 20,
    backgroundColor: "#C7EABF",
    margin: -15,
    padding: 20,
    borderRadius: 15,
  },
  firstacesstitulo:{
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  firstacesstext:{
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
  },
  section: {
    marginBottom: 50,
  },
  rodape:{
    backgroundColor: "#009F48",
    padding: 30,
  },
  titulo:{
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
