import React  from 'react';
import { Header } from '@/components/Header';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, SafeAreaView, } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

function Acordeao({ titulo, filhos, icone }: { titulo: string; filhos: React.ReactNode; icone: keyof typeof Ionicons.glyphMap }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <View style={estilosAcordeao.container}>
      <TouchableOpacity onPress={() => setExpandido(!expandido)} style={estilosAcordeao.cabecalho}>
        <View style={estilosAcordeao.containerTitulo}>
          <Ionicons name={icone} size={24} color="#fff" style={estilosAcordeao.icone} />
          <Text style={estilosAcordeao.titulo}>{titulo}</Text>
        </View>
      </TouchableOpacity>
      {expandido && <View style={estilosAcordeao.conteudo}>{filhos}</View>}
    </View>
  );
}

const estilosAcordeao = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 5,
  },
  cabecalho: {
    padding: 15,
    backgroundColor: '#009F48',
  },
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icone: {
    marginRight: 10,
  },
  conteudo: {
    fontSize: 16,
    padding: 15,
    backgroundColor: '#fff',
  },
});

export default function QueroSerAluno() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Image source={require("../assets/images/QueroSerAluno/Capa.png")}  style={styles.capa}/>
        <View style={styles.banner}>
          <Image source={require("../assets/images/SouAluno/Faixa.png")}  style={styles.bannerimagem}/>
          <Text style={styles.bannerText}>Seja bem Vindo desde Já!</Text>
        </View>

        <View style={styles.section}>
        <View>
          <Acordeao titulo='Quero saber Sobre o Curso' icone='school' filhos={
            <>
            <Text style={styles.descritivo}>
              O Curso oferecido pelo IFPR - Câmpus Pinhais, é uma excelente oportunidade para quem deseja ingressar na área de tecnologia com uma formação sólida e atualizada. Este curso de grau tecnólogo tem duração de 3 anos e é oferecido na modalidade presencial, com aulas no período noturno, das 19h às 22h40 de segunda a sexta-feira.
            </Text>
            {'\n'}
            <Text style={styles.descritivo}>
              Durante o curso, os alunos adquirem conhecimentos teóricos e práticos em diversas áreas da tecnologia da informação, incluindo administração de sistemas, redes de computadores, desenvolvimento de software e gestão de projetos de TI. 
              O currículo é cuidadosamente estruturado para preparar os alunos para os desafios do mercado de trabalho e para promover a inovação tecnológica nas organizações.
            </Text>
            {'\n'}
            <Text style={styles.descritivo}>
              Para mais detalhes sobre o conteúdo programático e disciplinas oferecidas, confira a Matriz Curricular do Curso logo abaixo.
            </Text>
            <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
              <Text style={styles.textobotao}>MATRIZ CURRICULAR</Text>
            </TouchableOpacity>
            </>
          }>
          </Acordeao>
        </View>

        <View>
          <Acordeao titulo='Quero saber sobre o Processo Seletivo' icone='document-text' filhos={
            <>
            <Text style={styles.descritivo}>
              O processo seletivo ocorre uma vez por ano, geralmente no segundo semestre.  Após inscrição no GOV.BR, você pode se inscrever no Portal do Candidato IFPR.
              A seleção se dá com base na sua nota no Exame Nacional do Ensino Médio (ENEM) de qualquer ano de 2015 a 2024.
            </Text>
            {'\n'}
            <Text style={styles.descritivo}>
              Se interessou, veja o vídeo abaixo:
            </Text>
            <View style={styles.videoContainer}>
            <WebView
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: 'https://www.youtube.com/embed/_6rlFKRJdPU' }}
            />
            </View>
            <Text style={styles.descritivo}>
              Para saber mais sobre datas, inscrições e acesso a tutoriais, visite a página do Processo Seletivo.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://ifpr.edu.br/estude-conosco/processo-seletivo-graduacao/")} style={styles.botao} activeOpacity={0.7}>
              <Text style={styles.textobotao}>PROCESSOS SELETIVOS</Text>
            </TouchableOpacity>
            </>
          }>
          </Acordeao>
        </View>

        <Acordeao titulo='Quero saber sobre Transferência' icone='swap-horizontal' filhos={
          <View>
            <Text style={styles.descritivo}>
              As transferências permitem que estudantes matriculados em cursos de mesma oferta e nível, tanto no IFPR quanto em outras instituições de ensino, ingressem no curso de Gestão da Tecnologia da Informação sem a necessidade de passar pelo Processo Seletivo convencional. Os editais de transferência são lançados duas vezes ao ano: no final do primeiro semestre e no final do segundo semestre. Esses editais contêm todas as informações necessárias sobre o processo, incluindo prazos, documentos requeridos e critérios de elegibilidade.
            </Text>
            {'\n'}
            <Text style={styles.descritivo}>
            A transferência é uma excelente oportunidade para estudantes que desejam mudar de instituição ou curso, continuando seus estudos sem interrupção. Se você está interessado em transferir-se para o nosso curso, fique atento aos editais publicados no site do IFPR e garanta que toda a documentação necessária esteja pronta para envio. Para mais informações sobre o processo de transferência e para acessar os editais, visite a tag Processos Seletivos na página oficial do IFPR.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://ifpr.edu.br/pinhais/?s=transferência")} style={styles.botao} activeOpacity={0.7}>
              <Text style={styles.textobotao}>EDITAIS DE TRANSFERÊNCIA</Text>
            </TouchableOpacity>
          </View>
        }>
        </Acordeao>
      </View>
      </ScrollView>
      <View style={styles.rodape}>
      </View>
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
  capa: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  bannerimagem: {
    width: '100%',
    height: 87,
    resizeMode: 'cover',
    position: 'absolute',
  },
  banner:{ 
    height:87,
    justifyContent: 'center'
  },

  bannerText: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  videoContainer: {
  height: 220,
  width: '100%',
  marginVertical: 20,
  paddingHorizontal: 10,
  },
  video: {
    flex: 1,
  },
  descritivo:{
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 15,
    lineHeight: 26,
  },
  botao:{
    backgroundColor: "black",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textobotao:{
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  section: {
    marginBottom: 50,
  },
  rodape:{
    backgroundColor: "#009F48",
    padding: 30,
  },
});
