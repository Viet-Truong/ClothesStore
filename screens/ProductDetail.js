import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { showProductDetail } from '../api/productsService'; // Import hàm lấy chi tiết sản phẩm từ service

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    productImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productDescription: {
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
});

export default function ProductDetail({ route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProductDetail() {
            try {
                // Gọi hàm để lấy thông tin chi tiết sản phẩm từ API dựa trên productId
                const productDetail = await showProductDetail(productId);

                // Cập nhật state với thông tin chi tiết sản phẩm từ API
                if (productDetail) {
                    setProduct(productDetail);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductDetail();
    }, [productId]);

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.img }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            {/* Hiển thị các thông tin khác của sản phẩm */}
        </View>
    );
}
