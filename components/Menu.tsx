import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {router} from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 83;

export const Menu = (props: { onClose: () => void }) => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <TouchableOpacity
        style={[estilos.overlay, { top: HEADER_HEIGHT }]}
        activeOpacity={1}
        onPress={props.onClose}
      />
      <SafeAreaView style={[estilos.menuLateral, { top: HEADER_HEIGHT }]}>
        <View style={estilos.menuItensContainer}>
          <TouchableOpacity onPress={() => router.push("/sou_aluno")} style={[estilos.menuItem]}>
            <Text style={estilos.menuPrincipal}>Sou Aluno</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/murallogin")} style={estilos.menuItem}>
            <Ionicons name="chatbubbles-outline" size={20} color="#009F48" style={estilos.iconeAluno} />
            <Text style={estilos.menuTexto}>Mural dos Estudantes </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/manualdoaluno")} style={estilos.menuItem}>
            <Ionicons name="book-outline" size={20} color="#009F48" style={estilos.iconeAluno} />
            <Text style={estilos.menuTexto}>Manual do Aluno</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => router.push("/plataformaserecursos")} style={estilos.menuItem}>
            <Ionicons name="laptop-outline" size={20} color="#009F48" style={estilos.iconeAluno} />
            <Text style={estilos.menuTexto}>Plataformas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/bibliotecas")} style={estilos.menuItem}>
            <Ionicons name="library-outline" size={20} color="#009F48" style={estilos.iconeAluno} />
            <Text style={estilos.menuTexto}>Bibliotecas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/emailseatendimento")} style={estilos.menuItem}>
            <Ionicons name="mail-outline" size={20} color="#009F48" style={estilos.iconeAluno} />
            <Text style={estilos.menuTexto}>Atendimento</Text>
          </TouchableOpacity>
          <View style={estilos.linha}/>
          <TouchableOpacity onPress={() => router.push("/queroseraluno")} style={[estilos.menuItem]}>
            <Text style={estilos.menuPrincipal}>Quero Ser Aluno</Text>
          </TouchableOpacity>
          <View style={estilos.linha}/>
          <TouchableOpacity onPress={() => router.push("/contato")} style={estilos.menuItem}>
            <Text style={estilos.menuPrincipal}>Contato</Text>
          </TouchableOpacity>
          <View style={estilos.linha}/>
          <View style={{ flex: 1 }} />
        </View>

        <View style={estilos.footer}>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/ifpr.oficial/")} style={estilos.linkExterno}>
            <Image source={require("../assets/images/Plataformas/instagram.png")} style={estilos.iconeExterno}/>
            <Text style={estilos.menulink}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/REITORIAIFPR/?locale=pt_BR")} style={estilos.linkExterno}>
            <Image source={require("../assets/images/PáginaInicial/FACEBOOK.png")} style={estilos.iconeExterno}/>
            <Text style={estilos.menulink}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://ifpr.edu.br/pinhais/")} style={estilos.linkExterno}>
            <Image source={require("../assets/images/PáginaInicial/IFPR_LOGO.png")} style={estilos.iconeExterno}/>
            <Text style={estilos.menulink}>Site Institucional</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  );
};

const estilos = StyleSheet.create({
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 9,
    width: "100%",
  },
  menuLateral: {
    position: "absolute",
    right: 0,
    width: '80%',
    maxWidth: 400,
    minWidth: 250,
    bottom: 0,
    backgroundColor: "white",
    paddingHorizontal: 16,
    zIndex: 10,
    elevation: 5,
    justifyContent: "space-between",
    paddingTop: 5
  },
  menuItem: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeAluno: {
    marginRight: 10,
  },
  menuTexto: {
    color: "black",
    fontSize: 18,
    marginLeft: 12,
  },
  menuPrincipal: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
  },
  menulink: {
    color: "black",
    fontSize: 15,
    fontStyle: "italic"
  },
  close: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  icone: {
    marginLeft: -20,
    width: 30,
    height: 30,
  },
  footer: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20,
  },
  linha: {
    height: 2,
    backgroundColor: "lightgray",
    marginTop: 5
  },
  menuItensContainer: {
    flexGrow: 1,
    justifyContent: "flex-start"
  },
  linkExterno: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    marginLeft: 0,
  },
  iconeExterno: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
