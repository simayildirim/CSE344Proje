import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinizden emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Çıkış Yap',
          style: 'destructive',
          onPress: () => router.replace('/login'),
        },
      ]
    );
  };

  const menuItems = [
    {
      title: 'Bildirimler',
      icon: 'notifications-outline',
      type: 'switch',
      value: notifications,
      onValueChange: setNotifications,
    },
    {
      title: 'Karanlık Mod',
      icon: 'moon-outline',
      type: 'switch',
      value: darkMode,
      onValueChange: setDarkMode,
    },
    {
      title: 'Konum Servisleri',
      icon: 'location-outline',
      type: 'switch',
      value: locationServices,
      onValueChange: setLocationServices,
    },
    {
      title: 'Dil',
      icon: 'language-outline',
      type: 'navigate',
      value: 'Türkçe',
      onPress: () => router.push('/language'),
    },
    {
      title: 'Gizlilik Politikası',
      icon: 'shield-outline',
      type: 'navigate',
      onPress: () => router.push('/privacy'),
    },
    {
      title: 'Kullanım Koşulları',
      icon: 'document-text-outline',
      type: 'navigate',
      onPress: () => router.push('/terms'),
    },
    {
      title: 'Hakkında',
      icon: 'information-circle-outline',
      type: 'navigate',
      onPress: () => router.push('/about'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ayarlar</Text>
      </View>

      <ScrollView style={styles.content}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.type === 'navigate' ? item.onPress : undefined}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon} size={24} color="#666" />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            {item.type === 'switch' ? (
              <Switch
                value={item.value}
                onValueChange={item.onValueChange}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={item.value ? '#007AFF' : '#f4f3f4'}
              />
            ) : (
              <View style={styles.menuItemRight}>
                {item.value && (
                  <Text style={styles.menuItemValue}>{item.value}</Text>
                )}
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </View>
            )}
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#ff3b30" />
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemValue: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#ff3b30',
    marginLeft: 10,
    fontWeight: 'bold',
  },
}); 