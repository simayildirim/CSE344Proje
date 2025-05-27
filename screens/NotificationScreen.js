import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NotificationScreen() {
  const notifications = [
    {
      id: '1',
      type: 'order',
      title: 'Siparişiniz Teslim Edildi',
      message: 'Siparişiniz başarıyla teslim edildi.',
      time: '2 saat önce',
      read: false,
    },
    {
      id: '2',
      type: 'message',
      title: 'Yeni Mesaj',
      message: 'Satıcıdan yeni bir mesaj aldınız.',
      time: '5 saat önce',
      read: true,
    },
    {
      id: '3',
      type: 'price',
      title: 'Fiyat Değişikliği',
      message: 'Takip ettiğiniz ürünün fiyatı düştü.',
      time: '1 gün önce',
      read: true,
    },
  ];
  const router = useRouter();

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order':
        return 'cube-outline';
      case 'message':
        return 'chatbubble-outline';
      case 'price':
        return 'pricetag-outline';
      default:
        return 'notifications-outline';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'order':
        return '#34C759';
      case 'message':
        return '#007AFF';
      case 'price':
        return '#FF9500';
      default:
        return '#666';
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.notificationItem, !item.read && styles.unreadItem]}
      onPress={() => {
        // Bildirime tıklandığında yapılacak işlemler
      }}
    >
      <View style={styles.notificationIcon}>
        <Ionicons
          name={getNotificationIcon(item.type)}
          size={24}
          color={getNotificationColor(item.type)}
        />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bildirimler</Text>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Temizle</Text>
        </TouchableOpacity>
      </View>

      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.notificationsList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="notifications-off-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>Bildiriminiz bulunmamaktadır</Text>
        </View>
      )}
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
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  notificationsList: {
    padding: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  unreadItem: {
    backgroundColor: '#f8f9fa',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
}); 