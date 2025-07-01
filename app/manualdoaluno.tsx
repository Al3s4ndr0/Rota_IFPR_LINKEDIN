import React  from 'react';
import { Header } from '@/components/Header';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, SafeAreaView, Modal, Pressable } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header/>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.banner}>
          <Image source={require("../assets/images/SouAluno/Faixa.png")}  style={styles.bannerimagem}/>
          <Text style={styles.bannerText}>Manual do Aluno</Text>
        </View>

        <View style={styles.section}>
        <View>
          <View style={styles.intro}>
            <Text style={styles.introtext}>
            Vocês acabaram de ingressar em uma instituição federal de referência no ensino tecnológico e científico. Nossa infraestrutura e equipe foram pensadas para que você, estudante, se desenvolva como cidadão e profissional, consciente dos desafios do mundo do trabalho e da sociedade. Com o apoio técnico e humano aqui disponível, você estará preparado para atuar de forma crítica, empreendedora e sustentável, interagindo com a comunidade.
            </Text>
            <Text style={styles.introtext}>
            O Campus Pinhais, inaugurado em 2015, é comprometido com a educação técnica, científica e tecnológica de qualidade. Promovemos a união entre Ensino, Pesquisa, Extensão e Inovação, pilares essenciais para a evolução e preparo do aluno em um mundo em constante mudança.
            </Text>
            <Text style={styles.introtext}>
            Nesta página, apresentamos as informações que consideramos mais essenciais para a sua experiência no IFPR. Para que vocês conheçam mais da Instituição e das normas internas, recomendamos a leitura completa do Manual do Aluno.
            </Text>
          </View>

          <Accordion title='Método de Avaliação' icone='stats-chart'>
          <Text style={styles.descritivo}>
          A avaliação é fundamental na aprendizagem, proporcionando o diagnóstico do percurso formativo para professores e alunos.
          </Text>
          <Text style={styles.descritivo}>
          No IFPR, ela se dá através de conceitos ao invés de notas. Estes são:
          </Text>
          <View style={{marginBottom: 15}}>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Conceito A:</Text> Aprendizagem plena, atingindo todos os objetivos propostos.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Conceito B:</Text> Aprendizagem parcialmente plena, atingindo níveis desejáveis dos objetivos.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Conceito C:</Text> Aprendizagem suficiente, atingindo níveis aceitáveis sem comprometer a continuidade.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Conceito D:</Text> Aprendizagem insuficiente, não atingindo os objetivos e comprometendo o processo.</Text></View>
          </View>
          <Text style={styles.descritivo}>
          Ao final do período letivo, o professor emite um conceito final representando o aproveitamento do aluno durante todo o período. Os conceitos parciais, lançados ao final de cada bimestre, servem apenas como parâmetros para determinar o conceito final.
          </Text>
          <View style={styles.blackBox}>
            <Text style={styles.blackBoxText}>
              É importante ressaltar que a avaliação por conceito não é uma soma ou média de conceitos parciais!
            </Text>
          </View>
          <Text style={styles.descritivo}>
          Vamos explicar algumas partes fundamentais para compreender o processo de avaliação no IFPR: os conceitos e aprovações e/ou reprovações. A seguir, estão seis cenários hipotéticos ilustrando como os conceitos finais foram atribuídos a diferentes alunos:
          </Text>
          <Pressable onPress={() => setModalVisible(true)}>
            <Image source={require("../assets/images/SouAluno/Quadro.png")} style={styles.imagem} />
            <Text style={{textAlign: 'center', color: '#009F48', marginBottom: 10}}>Clique para expandir</Text>
          </Pressable>
          <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalContainer}>
              <Pressable style={styles.modalBackground} onPress={() => setModalVisible(false)} />
              <View style={styles.modalContent}>
                <Image source={require("../assets/images/SouAluno/Quadro.png")} style={styles.imagemExpandida} resizeMode="contain" />
                <Pressable onPress={() => setModalVisible(false)} style={styles.fecharModal}><Text style={{color: '#fff', fontWeight: 'bold'}}>Fechar</Text></Pressable>
              </View>
            </View>
          </Modal>
          <View style={{marginBottom: 15}}>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>João:</Text> Teve conceito B em todos os bimestres, mas faltou em uma recuperação proposta pelo professor no final de ano, mostrando um pouco de desinteresse em melhorar sua avaliação; então, o professor reduziu o conceito para C.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Pedro:</Text> Teve dificuldades durante todo o ano, mas no projeto final do componente conseguiu aplicar todos os conceitos trabalhados pelo professor durante o ano.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Maria:</Text> Teve um ótimo aproveitamento ao longo do ano, mas na 1ª etapa não compreendeu uma teoria fundamental do componente.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Júlia e Mateus:</Text> Ambos tiveram os mesmos conceitos ao longo do ano, porém, Júlia piorou o rendimento bimestre a bimestre, enquanto Mateus mostrou melhora.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Gabriel:</Text> Teve aproveitamento excelente nos conteúdos, porém, faltou diversas aulas; então, o professor reduziu o conceito para B.</Text></View>
          </View>
          <View style={styles.blackBox}>
            <Text style={styles.blackBoxText}>
              Além de conceito igual ou superior a C, o aluno precisa ter frequência total acima de 75% na disciplina para ser aprovado.
            </Text>
          </View>
          </Accordion>

          <Accordion title='Abono de faltas e segunda chamada de avaliação' icone='calendar'>
          <Text style={styles.descritivo}>
          Durante o período letivo, é obrigatória uma frequência mínima de 75% da carga horária total. Não há abono de faltas, exceto para ausência justificada pela Lei do Serviço Militar. Também não há segunda chamada formal para avaliações, salvo exceção da Lei do Serviço Militar.
          </Text>
          <Text style={styles.descritivo}>
          A Direção de Ensino, Pesquisa e Extensão, junto aos professores dos componentes curriculares, pode dispensar esporadicamente os alunos de aulas regulares para participação em cursos intensivos, simpósios, seminários, congressos, entre outras atividades correlacionadas ao curso. Nessas situações, as faltas devem ser justificadas e deve ser oferecida a recuperação de avaliações formais ocorridas durante o período de ausência.
          </Text>
          <Text style={styles.descritivo}>
          O registro de atestados, declarações e demais justificativas de ausências e não realização de atividades avaliativas podem ser feitas clicando aqui. Tais documentos não abonam faltas ou garantem direito à 2ª chamada, mas funcionam como registros a serem considerados por docentes e equipe pedagógica para possíveis tomadas de decisão sobre frequência, recuperações e resultados.
          </Text>
          </Accordion>

          <Accordion title='Projetos de pesquisa e extensão' icone='flask'>
          <Text style={styles.descritivo}>
          Aqui no IFPR, acreditamos firmemente que Ensino, Pesquisa e Extensão estão intrinsecamente ligados. Por isso, nossos professores estão empenhados em oferecer projetos de pesquisa e extensão aos alunos. Esses projetos visam uma formação multidisciplinar, proporcionando ao aluno uma educação ampla e adaptável aos cenários em constante mudança, além de identificar e potencializar as especificidades de cada indivíduo.
          </Text>
          <Text style={styles.descritivo}>
          Os projetos de Pesquisa e Extensão cobrem uma variedade de temas, horários e são oferecidos por diferentes professores. Mesmo não sendo obrigatória a participação, ela é uma excelente oportunidade para seu desenvolvimento pessoal e profissional. Durante o curso, além da formação tradicional, você pode adquirir diversas habilidades e experiências, aproveitando ao máximo o potencial oferecido pelo IFPR.
          </Text>
          <Text style={styles.titulo}>
          Como se informar?
          </Text>
          <View style={{marginBottom: 15}}>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Conversar diretamente com os professores:</Text> Eles podem fornecer detalhes e orientações específicas sobre os projetos.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Portal da Transparência SISCOPE:</Text> O IFPR disponibiliza para facilitar o acesso às informações. No portal, selecione a aba "Campus", escolha "Pinhais" e clique no botão "Buscar Cadastro". Este portal oferece uma visão completa e atualizada dos projetos, permitindo que você explore diversas iniciativas e encontre oportunidades alinhadas aos seus interesses acadêmicos e profissionais.</Text></View>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL("https://cope.ifpr.edu.br/transparenciaprojetoscampus.php")} style={[styles.botaoPortal, {marginBottom:30}]}> 
            <Text style={styles.textobotaoPortal}>
              Acesse o Portal
            </Text>
          </TouchableOpacity>
          <Text style={styles.descritivo}>
          Aproveite essas oportunidades para enriquecer sua experiência acadêmica e fortalecer seu perfil profissional!
          </Text>
          </Accordion>

          <Accordion title='Assistência Estudantil' icone='school'>
          <Text style={styles.descritivo}>
          O IFPR possui uma Política de Apoio Estudantil desenvolvida pela Diretoria de Assuntos Estudantis e Atividades Especiais (DAES) da Pró-Reitoria de Ensino (PROENS). Esta política é voltada para garantir seu acesso, permanência e êxito no Instituto Federal do Paraná (IFPR), especialmente se você estiver em situação de vulnerabilidade socioeconômica.
          </Text>
          <Text style={styles.titulo}>
          O que oferecemos?
          </Text>
          <Text style={styles.descritivo}>
          A Política de Apoio Estudantil do IFPR inclui ações para garantir que você possa concluir seu curso com sucesso. Estas ações são alinhadas aos princípios da Educação Integral, que abrange formação geral, profissional e tecnológica, e estão sempre em articulação com os setores produtivos locais, econômicos e sociais.
          </Text>
          <View>
          <Accordion title='Alimentação' icone='restaurant'>
            <Text style={styles.descritivo}>
              O auxílio-alimentação é disponibilizado pelo Programa de Assistência Complementar ao Estudante (PACE) para estudantes que precisam permanecer em período integral no câmpus e para estudantes trabalhadores matriculados em cursos noturnos, desde que se encontrem em situação de vulnerabilidade socioeconômica. O edital de seleção é publicado no início do período letivo.
            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='Transporte' icone='bus'>
            <Text style={styles.descritivo}>
            O auxílio-transporte é para estudantes em vulnerabilidade socioeconômica que residem a mais de 3 km do câmpus e necessitam utilizar transporte escolar ou público pago. O edital é publicado no início do período letivo.
            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='Moradia' icone='home'>
            <Text style={styles.descritivo}>
              Este auxílio é para estudantes que se mudaram para a cidade do campus e cuja família reside a mais de 50 km de distância. Para se inscrever, é necessário que o estudante demonstre, através de comprovantes de renda, contrato de aluguel e outros documentos, que se encontra na situação descrita. Aqueles que forem contemplados devem apresentar mensalmente o recibo do pagamento do aluguel. O edital de seleção é publicado no início do período letivo.
            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='Esporte' icone='football'>
            <Text style={styles.descritivo}>
              Para quem tem interesse na área esportiva, há o Programa Estudante Atleta (PEA), com vagas para modalidades esportivas individuais e coletivas. De acordo com os projetos apresentados pelos professores de educação física, são disponibilizadas vagas tanto para modalidades esportivas individuais quanto para modalidades coletivas. Preferencialmente, são esses atletas que participam dos jogos institucionais, regionais e nacionais. Todos os estudantes podem se inscrever para o programa, mas somente podem receber bolsa aqueles que estiverem em situação de vulnerabilidade socioeconômica. O edital de seleção é publicado no início do período letivo.
            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='Projetos Acadêmicos' icone='book'>
            <Text style={styles.descritivo}>
              O Programa de Bolsas Acadêmicas de Inclusão Social (PBIS) permite a participação de estudantes em vulnerabilidade socioeconômica em projetos acadêmicos, orientados por servidores da instituição. As atividades podem ser desenvolvidas nas dependências do câmpus ou externamente, respeitada a carga horária de 6 horas semanais.
            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='Monitoria' icone='people'>
            <Text style={styles.descritivo}>
              O Programa de Monitoria é voltado àqueles estudantes que têm bom domínio dos componentes curriculares, com disposição para auxiliar os colegas, sob orientação do professor. As vagas são disponibilizadas para os componentes curriculares indicados pelos câmpus. O edital de seleção é publicado no início do período letivo.
            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='Eventos' icone='megaphone'>
            <Text style={styles.descritivo}>
             O IFPR apoia a participação de estudantes em eventos escolares e acadêmicos, científicos, culturais, políticos e esportivos, no Brasil e no Mercosul. Para a solicitação deste auxílio, é necessário observar as regras do edital, especialmente o prazo mínimo de 30 dias de antecedência do evento para encaminhamento da documentação. Esse prazo é estipulado para que o estudante possa receber o auxílio em tempo hábil para participação no evento.            </Text>
          </Accordion>
          </View>
          <View>
          <Accordion title='NAPME' icone='accessibility'>
            <Text style={styles.descritivo}>
             A DAES também cuida do Núcleo de Atendimento às Pessoas com Necessidades Educacionais Específicas (NAPNE), preparando a instituição para receber pessoas com deficiência em cursos de Formação Inicial e Continuada (FIC), Cursos Técnicos de Nível Médio e Cursos Superiores.
            </Text>
          </Accordion>
          </View>
          <Text style={[styles.descritivo, {marginTop: 30}]}>
            Para participação nos programas, são priorizados os estudantes em condição de vulnerabilidade socioeconômica, sendo que o principal indicador, sem prejuízo de outros fatores sociais e econômicos, é o critério de renda estabelecido legalmente em um (1) salário mínimo e meio per capita. Isto é, a renda total do núcleo familiar, dividida por seu número de membros, deve ser menor do que este valor indicado.
          </Text>
          <Text style={styles.descritivo}>
            A DAES também é responsável pelas questões de mobilidade estudantil, que envolvem os intercâmbios nacionais e internacionais. Atualmente, os intercâmbios têm ocorrido por meio do programa Ciência sem Fronteiras, do governo federal, o qual busca promover a consolidação, expansão e internacionalização da ciência, da tecnologia, da inovação e da competitividade brasileira.
          </Text>
          <Text style={styles.descritivo}>
            Dúvidas? Entre em contato com a Seção Pedagógica e de Assuntos Estudantis (SEPAE) do seu câmpus através do email: <Text style={styles.emailLink} onPress={() => Linking.openURL('mailto:sepae.pinhais@ifpr.edu.br')}>sepae.pinhais@ifpr.edu.br</Text>. Estamos aqui para ajudar!
          </Text>
          
          </Accordion>

          <Accordion title='Aproveitamento de estudos anteriores' icone='document-text'>
          <Text style={styles.descritivo}>
          Se você já cursou disciplinas ou etapas (séries, módulos, blocos) com êxito em outro curso, pode ser que você consiga aproveitar esses estudos aqui no IFPR, de acordo com a Resolução nº55/11 do Conselho Superior do IFPR (2011). Esse processo é possível tanto para componentes curriculares de outro curso quanto para disciplinas de Graduação em outras instituições de ensino superior.
          </Text>
          <Text style={styles.titulo}>
          Como funciona?
          </Text>
          <Text style={styles.descritivo}>
          Seu pedido será avaliado por uma Comissão de Análise, composta por professores da área de conhecimento relevante. Eles seguirão dois critérios principais:
          </Text>
          <View style={{marginBottom: 15}}>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Correspondência:</Text> As ementas, conteúdos programáticos e carga horária do curso anterior devem ser compatíveis com os do IFPR. A carga horária cursada deve ser, no mínimo, 75% da carga horária da disciplina correspondente no IFPR.</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Avaliação:</Text> Além da correspondência entre disciplinas, a comissão poderá solicitar uma avaliação teórica e/ou prática do seu conhecimento.</Text></View>
          </View>
          <Text style={styles.titulo}>
            Como Solicitar?
          </Text>
          <Text style={styles.descritivo}>
            Para solicitar o aproveitamento de estudos, você precisa protocolar seu pedido na Secretaria Acadêmica do campus, dentro do prazo estabelecido no calendário acadêmico. O pedido deve incluir:
          </Text>
          <View style={{marginBottom: 15}}>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Formulário próprio;</Text></Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Histórico escolar completo e atualizado</Text> da instituição de origem;</Text></View>
            <View style={styles.bulletItem}><Text style={styles.bulletText}>{'\u2022'} <Text style={styles.bold}>Ementa e programa do componente curricular,</Text> autenticados pela instituição de ensino credenciada pelo MEC.</Text></View>
          </View>
          <Text style={styles.descritivo}>
            Se tiver dúvidas ou precisar de ajuda, entre em contato com a Seção Pedagógica e de Assuntos Estudantis (SEPAE) no email <Text style={styles.emailLink} onPress={() => Linking.openURL('mailto:sepae.pinhais@ifpr.edu.br')}>sepae.pinhais@ifpr.edu.br</Text>. Estamos aqui para apoiar você!
          </Text>
          </Accordion>

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
  descritivo: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'justify',
  },
  topicos:{
    fontSize: 18,
    textAlign: "justify",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 15,
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
    margin:5,
    backgroundColor: "#333",
    borderRadius: 15,
    padding:10,
    alignSelf: "center",
  },
  botaoemail:{
    width:360,
    margin:5,
    backgroundColor: "#333",
    borderRadius: 15,
    padding:10,
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
  linhaVermelha: {
    height: 2,
    backgroundColor: "red",
    marginHorizontal: 1,
  },
  imagem:{
    alignSelf: "center",
    width: 340,
  },
  firstacess:{
    marginTop: 20,
    backgroundColor: "#C7EABF",
    margin: -15,
  },
  firstacesstitulo:{
    marginTop: 10,
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
  blackBox: {
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    marginTop: 5,
  },
  blackBoxText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    maxWidth: '95%',
    maxHeight: '90%',
  },
  imagemExpandida: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  fecharModal: {
    backgroundColor: '#009F48',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  botaoPortal: {
    width: 220,
    margin: 5,
    backgroundColor: "#333",
    borderRadius: 15,
    padding: 16,
    alignSelf: "center",
  },
  textobotaoPortal: {
    fontSize: 17,
    color: "white",
    fontWeight:"bold",
    textAlign: "center",
    alignContent: "center",
  },
  emailLink: {
    color: '#009F48',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
