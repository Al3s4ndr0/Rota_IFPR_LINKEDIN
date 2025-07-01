import React  from 'react';
import { Header } from '@/components/Header';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, SafeAreaView } from 'react-native';
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

const emailsSessoesPrincipais = [
  {
    titulo: 'Coordenadoria do Curso de GTI',
    pessoas: [
      { nome: 'William Simão', email: 'sup.gti.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Diretoria Geral',
    pessoas: [
      { nome: 'Cleverton Juliano', email: 'dg.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Diretoria de Ensino, Pesquisa e Extensão',
    pessoas: [
      { nome: 'Ana Maria', email: 'diepex.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Seção Pedagógica e de Assuntos Estudantis (SEPAE)',
    pessoas: [
      { nome: 'Francisco Fernando', email: 'sepae.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Seção de Estágios e Relações Comunitárias (SERC)',
    pessoas: [
      { nome: 'Ana Carolina', email: 'serc.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Seção de Secretaria Acadêmica',
    pessoas: [
      { nome: 'Jovana Ritter', email: 'secac.pinhais@ifpr.edu.br' },
    ],
  },
];

const emailsOutrasSessoes = [
  {
    titulo: 'Bibliotecárias',
    pessoas: [
      { nome: 'Caroline Candido', email: 'caroline.veroneze@ifpr.edu.br' },
      { nome: 'Maria do Amparo', email: 'amparo.cardoso@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Coordenadoria Administrativa',
    pessoas: [
      { nome: 'Antonio Marcos', email: 'ccfo.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Coordenadoria Contábil Financeira e Orçamentária',
    pessoas: [
      { nome: 'Rute Barbosa', email: 'ccfo.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Cooperação técnica – PROAD/Reitoria',
    pessoas: [
      { nome: 'Tatiana Barbosa', email: 'tatiana.barbosa@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Diretoria de Planejamento e Administração',
    pessoas: [
      { nome: 'Marlon de Oliveira', email: 'dpa.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Seção de Compras e Contratos',
    pessoas: [
      { nome: 'Eder Bruno', email: 'compras.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Seção de Contabilidade e Patrimônio',
    pessoas: [
      { nome: 'Samuel Deiana', email: 'scp.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Seção de Gestão de Pessoas',
    pessoas: [
      { nome: 'Jéssica Costa', email: 'segepe.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Psicóloga',
    pessoas: [
      { nome: 'Tatiana Mayumi', email: 'tatiana.niwa@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Representante de TI',
    pessoas: [
      { nome: 'Guilherme Hideki', email: 'rtic.pinhais@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Técnico de Laboratório – Informática',
    pessoas: [
      { nome: 'Carlos Roberto', email: 'carlos.yaeda@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Técnico de Laboratório – Química',
    pessoas: [
      { nome: 'Gabriel Henrique', email: 'gabriel.knupfer@ifpr.edu.br' },
    ],
  },
  {
    titulo: 'Técnico em Assuntos Educacionais',
    pessoas: [
      { nome: 'Nereu Moreira', email: 'nereu.filho@ifpr.edu.br' },
    ],
  },
];

const docentesTecnologia = [
  {
    titulo: 'Docentes de Tecnologia',
    pessoas: [
      { nome: 'Aleffer Rocha', email: 'aleffer.rocha@ifpr.edu.br' },
      { nome: 'Alexandre Peres', email: 'alexandre.arias@ifpr.edu.br' },
      { nome: 'Álvaro Rogério', email: 'alvaro.cantieri@ifpr.edu.br' },
      { nome: 'Aryel Marlus', email: 'aryel.oliveira@ifpr.edu.br' },
      { nome: 'Celso Luiz', email: 'celso.buiar@ifpr.edu.br' },
      { nome: 'Claudio Kleina', email: 'claudio.kleina@ifpr.edu.br' },
      { nome: 'Cleverton Juliano', email: 'cleverton.vesentini@ifpr.edu.br' },
      { nome: 'Eduardo Tieppo', email: 'eduardo.tieppo@ifpr.edu.br' },
      { nome: 'Eliana Maria', email: 'eliana.santos@ifpr.edu.br' },
      { nome: 'Gabriel Vinicius', email: 'gabriel.candido@ifpr.edu.br' },
      { nome: 'Guilherme Werneck', email: 'guilherme.oliveira@ifpr.edu.br' },
      { nome: 'Izaque Esteves', email: 'izaque.esteves@ifpr.edu.br' },
      { nome: 'João Paulo', email: 'joao.orlando@ifpr.edu.br' },
      { nome: 'Lauriana Paludo', email: 'lauriana.paludo@ifpr.edu.br' },
      { nome: 'Marcelo Trierveiler', email: 'marcelo.pereira@ifpr.edu.br' },
      { nome: 'Marcos Aurélio', email: 'marcos.laureano@ifpr.edu.br' },
      { nome: 'Marlon de Oliveira', email: 'marlon.vaz@ifpr.edu.br' },
      { nome: 'Thiago André', email: 'thiago.guimaraes@ifpr.edu.br' },
      { nome: 'Valério Brusamolin', email: 'valério.brusamolin@ifpr.edu.br' },
      { nome: 'William Simão', email: 'william.deus@ifpr.edu.br' }
    ]
  }
];

const docentesAdministracao = [
  {
    titulo: 'Docentes de Administração',
    pessoas: [
      { nome: 'Ana Carolina', email: 'carolina.carvalho@ifpr.edu.br' },
      { nome: 'Anderson Ribeiro', email: 'anderson.almeida@ifpr.edu.br' },
      { nome: 'Celia Regina', email: 'celia.silveira@ifpr.edu.br' },
      { nome: 'Cleverson Ramom', email: 'ramom.carvalho@ifpr.edu.br' },
      { nome: 'Edna Wojciechowski', email: 'edna.wojciechowski@ifpr.edu.br' },
      { nome: 'Gutemberg Ribeiro', email: 'gutemberg.ribeiro@ifpr.edu.br' },
      { nome: 'Josué Alexandre', email: 'josue.sander@ifpr.edu.br' },
      { nome: 'Marcos Aurélio', email: 'marcos.nascimento@ifpr.edu.br' },
      { nome: 'Newton Claizoni', email: 'newton.claizoni@ifpr.edu.br' },
      { nome: 'Regina Maris', email: 'regina.pinheiro@ifpr.edu.br' },
      { nome: 'Roberto Carlos', email: 'roberto.dalongaro@ifpr.edu.br' },
      { nome: 'William José', email: 'william.borges@ifpr.edu.br' }
    ]
  }
];

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
            <Text style={styles.bannerText}>Emails e Atendimento</Text>
          </View>

          <View style={styles.section}>
          <View>
            <Accordion title='Atendimento aos Alunos' icone='people'>
            <Text style={styles.descritivo}>
              No IFPR, os professores possuem horários exclusivos para atendimento dos alunos. Normalmente, os professores estão disponíveis para agendamentos em um ou dois períodos na semana (duas tardes, por exemplo), para tratar de assuntos relacionados aos conteúdos trabalhados em sala.
            </Text>
            <Text style={styles.descritivo}>
              A Secretaria também está disponível para atender às demandas dos alunos, como solicitações de documentos, orientações acadêmicas e outros serviços administrativos.
            </Text>
            <Text style={styles.descritivo}>
            Para se informar sobre os horários de atendimento dos professores, clique abaixo:
            </Text>

            <View style={styles.botoes}>
            <TouchableOpacity onPress={() => Linking.openURL("https://docs.google.com/spreadsheets/d/1q0Fh4VAwX_Nj3b_2uEQD-7zBQGXVz3W5iOHk-0r7Pxk/edit#gid=996102884")} style={styles.botao}>
              <Text style={styles.textobotao}>HORÁRIOS DE ATENDIMENTO</Text>
            </TouchableOpacity>
            </View>
            </Accordion>
          </View>

          <View>
            <Accordion title="Emails das Sessões Principais do Campus" icone='mail'>
              {emailsSessoesPrincipais.map((bloco, index) => (
                <View key={index}>
                  <Text style={styles.blocotituloemail}>{bloco.titulo}</Text>
                  {bloco.pessoas.map((pessoa, idx) => (
                    <Text key={idx} style={styles.blocoemail}>
                      {pessoa.nome} – <Text style={styles.emailLink} onPress={() => Linking.openURL(`mailto:${pessoa.email}`)}>{pessoa.email}</Text>
                    </Text>
                  ))}
                </View>
              ))}
            </Accordion>
          </View>

          <View>
            <Accordion title="Emails de Outras Sessões do Campus" icone='business'>
              {emailsOutrasSessoes.map((bloco, index) => (
                <View key={index}>
                  <Text style={styles.blocotituloemail}>{bloco.titulo}</Text>
                  {bloco.pessoas.map((pessoa, idx) => (
                    <Text key={idx} style={styles.blocoemail}>
                      {pessoa.nome} – <Text style={styles.emailLink} onPress={() => Linking.openURL(`mailto:${pessoa.email}`)}>{pessoa.email}</Text>
                    </Text>
                  ))}
                </View>
              ))}
            </Accordion>
          </View>

          <View>
            <Accordion title="Docentes de Tecnologia" icone='laptop'>
              {docentesTecnologia.map((bloco, index) => (
                <View key={index}>
                  {bloco.pessoas.map((pessoa, idx) => (
                    <Text key={idx} style={styles.blocoemail}>
                      <Text style={styles.bold}>{pessoa.nome}</Text> – <Text style={styles.emailLink} onPress={() => Linking.openURL(`mailto:${pessoa.email}`)}>{pessoa.email}</Text>
                    </Text>
                  ))}
                </View>
              ))}
            </Accordion>
          </View>

          <View>
            <Accordion title="Docentes de Administração" icone='briefcase'>
              {docentesAdministracao.map((bloco, index) => (
                <View key={index}>
                  {bloco.pessoas.map((pessoa, idx) => (
                    <Text key={idx} style={styles.blocoemail}>
                      <Text style={styles.bold}>{pessoa.nome}</Text> – <Text style={styles.emailLink} onPress={() => Linking.openURL(`mailto:${pessoa.email}`)}>{pessoa.email}</Text>
                    </Text>
                  ))}
                </View>
              ))}
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
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'justify',
  },
  blocotituloemail:{
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  blocoemail:{
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15,
  },
  botoes:{
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    alignSelf: "center",
  },
  botao:{
    width:160,
    margin:5,
    backgroundColor: "#333",
    borderRadius: 25,
    padding:10,
    alignSelf: "center",
  },
  textobotao:{
    color: "white",
    textAlign: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 50,
  },
  rodape:{
    backgroundColor: "#009F48",
    padding: 30,
  },
  emailLink: {
    color: '#009F48',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
});
