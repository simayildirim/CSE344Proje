import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const product = params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorite ? '#ff3b30' : '#333'}
            />
          </TouchableOpacity>
        </View>

        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <View style={styles.sellerInfo}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40' }}
              style={styles.sellerImage}
            />
            <View style={styles.sellerDetails}>
              <Text style={styles.sellerName}>Satıcı Adı</Text>
              <Text style={styles.sellerRating}>⭐ 4.5 (120 değerlendirme)</Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Ürün Açıklaması</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.messageButton}>
              <Ionicons name="chatbubble-outline" size={20} color="#007AFF" />
              <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Satın Al</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 8,
  },
  favoriteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 8,
  },
  image: {
    width: width,
    height: width,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  sellerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  sellerDetails: {
    flex: 1,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sellerRating: {
    fontSize: 14,
    color: '#666',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  messageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  messageButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
}); 