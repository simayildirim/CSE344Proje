import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Giriş, kayıt, şifremi unuttum ekranları ve tablar */}
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      {/* Diğer stack ekranları */}
      <Stack.Screen name="product" />
      <Stack.Screen name="product-detail" />
      <Stack.Screen name="payment" />
      <Stack.Screen name="my-purchases" />
      <Stack.Screen name="my-sales" />
      <Stack.Screen name="notification" />
      <Stack.Screen name="settings" />
    </Stack>
  );
} 