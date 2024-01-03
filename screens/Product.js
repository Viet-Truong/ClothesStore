import React, { useState, useEffect } from 'react';
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
import { useIsFocused } from '@react-navigation/native';

import * as ProductsService from '../api/productsService';
import ListProduct from '../components/ListProduct';

export default function Product({ navigation }) {
    const isFocused = useIsFocused();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await ProductsService.getAllProduct();
            setProducts(result.data);
        };
        if (isFocused) {
            fetch();
        }
    }, [isFocused]);

    return (
        <SafeAreaView style={[{ width: '100%', height: '100%' }]}>
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
