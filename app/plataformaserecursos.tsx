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
            <Text style={styles.bannerText}>Plataformas e Recursos</Text>
          </View>

          <View style={styles.section}>
          <View>
            <View style={styles.intro}>
              <Text style={styles.introtext}>
                Descubra como aproveitar ao máximo as ferramentas e recursos oferecidos pelo IFPR. Acesse plataformas de ensino, obtenha suporte acadêmico e explore serviços essenciais para sua jornada educativa.
              </Text>
            </View>

            <Accordion title='Sistema Unificado de Administração Pública (SUAP)' icone='laptop'>
            <Text style={styles.descritivo}>
              O SUAP (Sistema Unificado de Administração Pública) é o seu Campus Virtual, espaço onde você pode consultar e solucionar questões da sua vida acadêmica sem se preocupar em ir até à secretaria do IFPR. Anote o endereço e salve em seus favoritos:
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://suap.ifpr.edu.br")} style={styles.botao}>
              <Text style={styles.textobotao}>
                ACESSE O SUAP
              </Text>
            </TouchableOpacity>
            
            <Text style={styles.descritivo}>Nele você Encontra: </Text>
            <View style={{marginBottom: 15}}>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Dados do Aluno</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Declaração de Matrícula</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Histórico Escolar</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Informações Acadêmicas</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Disciplinas</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Frequências</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Notas</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Renovação de Matrícula</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Abertura de Requerimentos</Text></Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Editais de Pesquisa e Extensão</Text></Text></View>
            </View>

            <View style={styles.firstacess}>
              <Text style={styles.firstacesstitulo}>
                Primeiro acesso ao SUAP
              </Text>
              <Text style={styles.firstacesstext}>
                Com o número do seu CPF ou da sua matrícula em mãos, você já pode realizar o primeiro login no SUAP.
                No primeiro acesso você vai cadastrar uma senha. É simples, confira abaixo:
              </Text>
              <View style={{marginBottom: 15}}>
                <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Acesse o SUAP.</Text></View>
                <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Clique em Esqueceu ou deseja alterar sua senha?.</Text></View>
                <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Na tela seguinte, no campo Usuário digite sua Matrícula ou CPF sem ponto e traço.</Text></View>
                <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Confirme o CPF, marque a opção Não sou um robô e, em seguida, clique no botão Enviar.</Text></View>
                <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Você receberá um e-mail com as instruções para a criação da sua senha. Clique no link da mensagem e cadastre a senha conforme as orientações apresentadas.</Text></View>
                <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Caso não receba o e-mail, verifique em sua caixa de spam.</Text></View>
              </View>
            </View>
            </Accordion>

            <Accordion title='Ambiente Virtual de Aprendizagem (AVA)' icone='school'>
            <Text style={styles.descritivo}>
              O Ambiente Virtual de Aprendizagem do IFPR é uma plataforma digital onde você pode acessar conteúdos das disciplinas, participar de atividades interativas, acompanhar seu progresso e interagir com colegas e professores. Para acessar o conteúdo, você deverá ter em mãos uma Chave de inscrição fornecida pelo seu professor ou coordenador do curso.
              Após criada a conta, você terá acesso à sala do curso onde estará o conteúdo programático da disciplina.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://ava.ifpr.edu.br/login/index.php")} style={styles.botao}>
              <Text style={styles.textobotao}>
                ACESSE O AVA
              </Text>
            </TouchableOpacity>
            <Text style={styles.descritivo}>
              Caso não encontre sua sala, utilize os métodos de busca disponíveis, como, a Busca global no menu lateral direito e o catálogo de cursos que pode ser encontrado no menu superior "Como funciona o AVA".
            </Text>
            </Accordion>

            <Accordion title='E-mail Institucional' icone='mail'>
            <Text style={styles.descritivo}>
              O IFPR disponibiliza um e-mail institucional de estudante, gerado automaticamente na confirmação da sua matrícula acadêmica. O seu e-mail de estudante é composto da seguinte forma:
            </Text>
            <Text style={styles.descritivoemail}>
              numerodematricula@estudantes.ifpr.edu.br
            </Text>
            <Text style={styles.descritivo}>
              Você consegue atualizar a senha do seu e-mail de estudante, de forma rápida e prática, diretamente pela Conta do Google.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=pt_BR&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S722285033%3A1746577450544442")} style={styles.botaoemail}>
              <Text style={styles.textobotao}>
                RECUPERAR SUA CONTA DO GOOGLE ESTUDANTE
              </Text>
            </TouchableOpacity>
            <Image source={require("../assets/images/senhagoogle.png")} style={styles.imagem}/>
            
            <Text style={styles.titulo}>
              Para recuperar sua senha ou fazer o 1º acesso:
            </Text>
            <View style={{marginBottom: 15}}>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Digite seu e-mail institucional utilizando o seu número de matrícula, como no modelo acima.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Clique em Esqueceu a senha.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Você receberá um e-mail com o código de verificação para o e-mail informado durante a matrícula.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Siga as orientações para definição da nova senha para o email institucional.</Text></View>
              <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} Se não tiver acesso ao e-mail pessoal cadastrado ou este esteja incorreto, solicite a atualização na Secretaria Acadêmica do Campus e repita o processo após uma hora e meia da atualização no SUAP.</Text></View>
            </View>
            <Text style={styles.descritivo}>
              Você pode usar o seu e-mail de estudante para acompanhar as notícias dos diversos Campus do Instituto Federal do Paraná ou para realizar o login em ferramentas como o Google Classroom.
            </Text>
            </Accordion>

            <Accordion title='Carteirinha Estudantil' icone='card'>
            <Text style={styles.descritivo}>
              A Carteirinha Estudantil do IFPR é o seu passe para diversos benefícios e serviços. Com ela, você pode obter descontos em eventos culturais e de transporte. Garanta a sua e aproveite ao máximo todas as vantagens oferecidas!
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://ifpr.edu.br/pinhais/institucional/area-do-aluno/carteirinha-estudantil/")} style={styles.botao}>
              <Text style={styles.textobotao}>
                OBTENHA A SUA 
              </Text>
            </TouchableOpacity>
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
  intro:{
    backgroundColor: "white",
    padding: 20,
    fontSize: 16,
    textAlign: "justify",
  },
  introtext: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'justify',
  },
  descritivo:{
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'justify',
  },
  descritivoemail:{
    fontSize: 18,
    color: "blue",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 15,
    marginBottom: 15,
    margin: 3,
  },
  botoes:{
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    alignSelf: "center",
  },
  botao:{
    width:150,
    marginBottom: 20,
    backgroundColor: "#333",
    borderRadius: 30,
    padding:20,
    alignSelf: "center",
  },
  botaoemail:{
    width:200,
    margin:5,
    backgroundColor: "#333",
    borderRadius: 40,
    padding:20,
    alignSelf: "center",
    marginBottom: 20
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
    fontSize: 13,
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
  fisrtacess:{
    marginTop: 20,
    backgroundColor: "#C7EABF",
    margin: -15,
  },
  titulo:{
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  firstacesstext:{
    textAlign: "justify",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 16,
  },
  section: {
    marginBottom: 50,
  },
  rodape:{
    backgroundColor: "#009F48",
    padding: 30,
  },
  imagem:{
    alignSelf: "center",
    width: 360,
    height: 150,
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
  principaisinfos:{
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  infos:{
    padding: 5,
    fontSize: 18,
    fontStyle: "italic",
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletText: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
});
