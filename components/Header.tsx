import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Menu } from "./Menu";
import { router } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 80;

const estilos = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: "#fff",
    zIndex: 100,
    elevation: 10,
  },
  estiloHeader: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  logoifprInicial: {
    width: 200,
    height: 90,
    resizeMode: "contain",
  },
  menuIcone: {
    padding: 10,
  },
  linhaVermelha: {
    height: 3,
    backgroundColor: "red",
    width: '100%',
  },
});

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <SafeAreaView style={estilos.headerContainer} edges={['top', 'left', 'right']}>
        <View style={estilos.estiloHeader}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Image
              source={require("../assets/images/PáginaInicial/IFPR_PINHAIS.png")}
              style={estilos.logoifprInicial}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu} style={estilos.menuIcone}>
            <Ionicons name="menu-outline" size={32} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={estilos.linhaVermelha} />
      </SafeAreaView>
      {menuVisible && <Menu onClose={toggleMenu} />}
    </>
  );
};
