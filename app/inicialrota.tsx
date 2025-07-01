import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InicialRota() {
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const fadeTitulo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(fadeTitulo, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        router.replace('/');
      }, 1000);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ImageBackground
        source={require('../assets/images/PáginaInicial/banner.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Animated.Image
            source={require('../assets/images/PáginaInicial/ROTA_IFPR.png')}
            style={[styles.logo, { opacity: fadeLogo }]}
            resizeMode="contain"
          />
          <Animated.Text style={[styles.titulo, { opacity: fadeTitulo }]}>Caminho ágil para o seu conhecimento</Animated.Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  titulo: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitulo: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 10,
  },
  textoBotao: {
    color: '#009F48',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
