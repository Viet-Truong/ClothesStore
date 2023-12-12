import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { showProducts, showCategories, showProductsByCategoryId } from '../api/productsService'; // Import hàm lấy dữ liệu từ service

// Định nghĩa CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    productItemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    categoryItemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    categoryItem: {
        margin: 10,
    },
    categoryImage: {
        width: 140,
        height: 140,
        borderRadius: 75,
    },
    categoryText: {
        marginTop: 10,
        textAlign: 'center'
    },
    productItem: {
        margin: 10,
    },
    productImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
    },
    productTitle: {
        marginTop: 5,
        textAlign: 'center',
    },
    sectionTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // Lấy danh sách sản phẩm từ API
            const productsData = await showProducts();
            if (productsData) {
                setProducts(productsData);
            }

            // Lấy danh sách danh mục từ API
            const categoriesData = await showCategories();
            if (categoriesData) {
                setCategories(categoriesData);
            }
        }

        fetchData();
    }, []);


    const renderProductItem = ({ item }) => (
        <View style={styles.productItemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}>
                <View style={styles.productItem}>
                    <Image source={{ uri: item.img }} style={styles.productImage} />
                    <Text style={styles.productTitle}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    const renderCategoryItem = ({ item }) => (
        <View style={styles.CategoryItemContainer}>
            <View style={styles.categoryItem}>
                <Image source={{ uri: item.img }} style={styles.categoryImage} />
                <Text>{item.name}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='menu' size={24} color='#888' />
                <Text style={{ fontWeight: 'bold' }}>Clothes Store</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Ionicons name='cart' size={24} color='#888' />
                </TouchableOpacity>
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <Ionicons name='search' size={24} color='#888' />
                <TextInput placeholder="Search Products" style={{ flex: 1, marginLeft: 5 }} />
            </View>

            {/* Categories */}
            <View style={{ height: 150, marginTop: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCategoryItem}
                />
            </View>

            {/* Products */}
            <View style={{ flex: 1 }}>
                <Text style={[styles.sectionTitle, { textAlign: 'center' }]}>Products</Text>
                <FlatList
                    style={[{ textAlign: 'center ' }]}
                    data={products.data}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={renderProductItem}
                />
            </View>
        </SafeAreaView >
    );
}
