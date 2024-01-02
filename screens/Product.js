import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import * as ProductsService from '../api/productsService';

export default function Product({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const result = await ProductsService.getAllProduct();
        setProducts(result);
    };

    const renderProductItem = ({ item }) => (
        <View style={styles.productItemContainer}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('ProductDetail', {
                        productId: item.product_id,
                    })
                }
            >
                <View style={styles.productItem}>
                    <Image
                        source={{ uri: item.images[0] }}
                        style={styles.productImage}
                    />
                    <Text style={styles.productTitle}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold' }}>Danh sách sản phẩm</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddProduct')}
                >
                    <Ionicons
                        name='add-circle-outline'
                        size={24}
                        color='#888'
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    style={[{ textAlign: 'center ' }]}
                    data={products}
                    keyExtractor={(item) => item.product_id.toString()}
                    numColumns={2}
                    renderItem={renderProductItem}
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
