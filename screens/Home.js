import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as CategoriesService from '../api/categoriesService';
import * as ProductsService from '../api/productsService';
import ListProduct from '../components/ListProduct';
import { AuthContext } from '../context/AuthContext';

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCategoryId, setCurrentCategoryId] = useState(null);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await ProductsService.getAllProduct();
        setProducts(result.data);

        const res = await CategoriesService.showCategory();
        if (res) {
            setCategories(res.data.data);
        }
    };
    console.log(categories);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold' }}>Clothes Store</Text>
                {auth.data.role === 'Người bán hàng' ? (
                    ''
                ) : (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Ionicons name='cart' size={24} color='#888' />
                    </TouchableOpacity>
                )}
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
                <Ionicons name='search' size={24} color='#888' />
                <TextInput
                    placeholder='Search Products'
                    style={{ flex: 1, marginLeft: 5 }}
                />
            </View>

            {/* Categories */}
            <View style={{ height: 80, marginTop: 10, marginHorizontal: 20 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleCategoryPress(item.id)}
                        >
                            <View style={styles.categoryItem}>
                                <Text style={styles.categoryText}>
                                    {item.name_category}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Products */}
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                }}
            >
                <FlatList
                    style={[{ textAlign: 'center', grow: '1' }]}
                    data={products}
                    keyExtractor={(item) => item.product_id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <ListProduct item={item}></ListProduct>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

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
        marginTop: 10,
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
        textAlign: 'center',
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
