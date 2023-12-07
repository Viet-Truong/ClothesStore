import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      productId: 1,
      name: 'Áo thun nam',
      color: 'Xanh',
      size: 'M',
      qty: 2,
      img_url: 'https://i.pinimg.com/564x/39/f1/d1/39f1d10fc835b70a6f41fbcce9cf15c4.jpg',
      price: 250000,
      salePrice: 200000,
      variantId: 'variant_id_1',
      maxQty: 5
    },
    {
      productId: 2,
      name: 'giày nữ',
      color: 'Đen',
      size: 'L',
      qty: 1,
      img_url: 'https://i.pinimg.com/564x/aa/52/fa/aa52fa6188b8a19f66b58a0ea96423d3.jpg',
      price: 350000,
      salePrice: 0,
      variantId: 'variant_id_2',
      maxQty: 10
    },
    // ...Thêm dữ liệu sản phẩm khác ở đây
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Tính tổng tiền mỗi khi giỏ hàng thay đổi
    let total = 0;
    cartItems.forEach(item => {
      total += item.qty * (item.salePrice > 0 ? item.salePrice : item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);


  const decreaseQuantity = (cartItems, setCartItems, item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.productId === item.productId) {
        const updatedQty = cartItem.qty - 1;
        return { ...cartItem, qty: updatedQty >= 0 ? updatedQty : 0 };
      }
      return cartItem;
    });

    const itemsWithNonZeroQty = updatedCartItems.filter((cartItem) => cartItem.qty > 0);
    setCartItems(itemsWithNonZeroQty);
  };

  const removeItem = (cartItems, setCartItems, itemId) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.productId !== itemId);
    setCartItems(updatedCartItems);
  };


  const increaseQuantity = (cartItems, setCartItems, item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.productId === item.productId && cartItem.qty < cartItem.maxQty) {
        return { ...cartItem, qty: cartItem.qty + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };



  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>

      <Image source={{ uri: item.img_url }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>{item.color}, size: {item.size}</Text>
        <View style={styles.priceAndQuantity}>
          <Text style={styles.priceText}>
            {formatPrice(item.salePrice > 0 ? item.salePrice : item.price)} VNĐ
          </Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity onPress={() => decreaseQuantity(cartItems, setCartItems, item)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.qty}</Text>
            <TouchableOpacity onPress={() => increaseQuantity(cartItems, setCartItems, item)}>
              <Text style={[styles.quantityButton]}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => removeItem(cartItems, setCartItems, item.productId)} style={{ margin: 20 }}>
            <FontAwesome name="trash" size={35} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { marginTop: 40 }]}>Giỏ hàng</Text>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Image source={{ uri: 'https://example.com/images/empty-cart.jpg' }} style={styles.emptyCartImage} />
          <Text style={styles.emptyCartText}>Không có sản phẩm nào!</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => `${item.productId}_${item.color}_${item.size}`}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.checkoutContainer}>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>Tổng tiền: {formatPrice(totalPrice)} VNĐ</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      )}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  priceAndQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceQuantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    color: 'green',
    marginRight: 20,
    marginTop: 15,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginLeft: 5,
  },
  quantity: {
    marginHorizontal: 5,
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns content evenly between start and end
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    paddingVertical: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  deleteIcon: {
    marginLeft: 'auto', // Aligns the delete icon to the right side
    marginRight: 10,
    display: 'block',
    // Adds some space between the delete icon and quantity controls
  },

  checkoutContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalPriceContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  checkoutButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
