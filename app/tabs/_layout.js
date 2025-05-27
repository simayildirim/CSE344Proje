import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Ana Sayfa' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
      <Tabs.Screen name="cart" options={{ title: 'Sepet' }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favoriler' }} />
    </Tabs>
  );
} 