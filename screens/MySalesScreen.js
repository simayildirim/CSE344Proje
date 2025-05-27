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

export default function MySalesScreen() {
  const sales = [
    {
      id: '1',
      title: 'Ürün 1',
      price: '100 TL',
      date: '01.01.2024',
      status: 'Satıldı',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      title: 'Ürün 2',
      price: '200 TL',
      date: '02.01.2024',
      status: 'Satışta',
      image: 'https://via.placeholder.com/100',
    },
  ];
  const router = useRouter();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Satıldı':
        return '#34C759';
      case 'Satışta':
        return '#007AFF';
      case 'İptal Edildi':
        return '#FF3B30';
      default:
        return '#666';
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.saleItem}
      onPress={() => router.push({ pathname: '/product-detail', params: { ...item } })}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: getStatusColor(item.status) },
            ]}
          />
          <Text
            style={[styles.statusText, { color: getStatusColor(item.status) }]}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
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
        <Text style={styles.headerTitle}>Sattıklarım</Text>
      </View>

      {sales.length > 0 ? (
        <FlatList
          data={sales}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.salesList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="bag-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>Henüz bir satışınız bulunmamaktadır</Text>
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
  salesList: {
    padding: 15,
  },
  saleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
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