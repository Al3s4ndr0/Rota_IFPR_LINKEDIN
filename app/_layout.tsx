import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="inicialrota" options={{ headerShown: false}}/>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
      <Stack.Screen name="home" options={{ headerShown: false}}/>
      <Stack.Screen name="sou_aluno" options={{ headerShown: false}}/>
      <Stack.Screen name="queroseraluno" options={{ headerShown: false}}/>
      <Stack.Screen name="murallogin" options={{ headerShown: false}}/>
      <Stack.Screen name="muraldosestudantes" options={{ headerShown: false}}/>
      <Stack.Screen name="manualdoaluno" options={{ headerShown: false}}/>
      <Stack.Screen name="plataformaserecursos" options={{ headerShown: false}}/>
      <Stack.Screen name="bibliotecas" options={{ headerShown: false}}/>
      <Stack.Screen name="emailseatendimento" options={{ headerShown: false}}/>
      <Stack.Screen name="contato" options={{ headerShown: false}}/>
    </Stack>
  )
}
