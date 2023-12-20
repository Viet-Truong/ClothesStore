import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import COLORS from '../constants/colors';
import Button from '../components/Button';

const ProductDetail = ({ route }) => {
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(item.price);

    listSize = item.size;

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        setPrice((prevPrice) => prevPrice * (quantity + 1));
        console.log(price);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            setPrice((prevPrice) => prevPrice * (quantity - 1));
        }
    };

    return (
        <SafeAreaView>
            <View className='flex flex-col justify-start h-full bg-slate-50'>
                <View className='flex flex-row justify-between z-10 pt-5 bg-white'>
                    <View className='flex flex-row items-center'>
                        <Ionicons
                            style={{ padding: 8, margin: 10 }}
                            name='arrow-back-outline'
                            size={24}
                        />
                        <Text className='text-lg font-medium ml-2'>
                            Product
                        </Text>
                    </View>
                    <Ionicons
                        style={{ padding: 8, margin: 10 }}
                        name='cart-outline'
                        size={24}
                    />
                </View>
                <View
                    style={styles.boxShadow}
                    className='mx-auto mt-4 rounded-xl w-4/5 h-auto bg-white flex shadow-2xl'
                >
                    <Image
                        source={{ uri: item.image }}
                        className='w-10/12 h-64 rounded-xl mx-auto mt-5'
                        resizeMode='cover'
                    />
                    <View className='flex flex-row py-2 my-4 mx-2 '>
                        <Text className='font-bold text-base text-gray-700 w-3/5 mx-4'>
                            {item.name}
                        </Text>
                        <Text className='font-bold text-base text-gray-700 w-1/5 mx-4'>
                            {item.price} $
                        </Text>
                    </View>
                </View>

                {/* Colors & sizes */}
                <View className='mx-auto mt-4 rounded-xl w-4/5 h-auto '>
                    <View className='flex-row justify-between'>
                        <View className='h-18 justify-between'>
                            <Text className='text-sm  font-bold'>Color</Text>
                            <Text className='text-base text-slate-400 font-semibold mb-1'>
                                Kaki
                            </Text>
                        </View>
                        <View className='h-18 justify-between'>
                            <Text className='text-sm font-bold ml-2'>Size</Text>
                            <FlatList
                                horizontal
                                data={listSize}
                                keyExtractor={(item) => item.size}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginRight: 5,
                                        }}
                                    >
                                        <RadioButton
                                            value={item.size}
                                            status={
                                                selectedSize === item.size
                                                    ? 'checked'
                                                    : 'unchecked'
                                            }
                                            color={COLORS.primary}
                                            onPress={() =>
                                                setSelectedSize(item.size)
                                            }
                                        />
                                        <Text className='h-10 text-center font-medium leading-10 text-slate-400'>
                                            {item.size == '1'
                                                ? 'M'
                                                : item.size == '2'
                                                ? 'L'
                                                : 'XL'}
                                        </Text>
                                    </View>
                                )}
                            ></FlatList>
                        </View>
                    </View>
                    <View className='mt-2'>
                        <Text className='text-lg font-bold mb-1'>
                            Description
                        </Text>
                        <Text className='text-slate-400 text-base'>
                            Áo đẹp thế nhờ, bao nhiêu một cái đấy
                        </Text>
                    </View>
                </View>

                <View style={styles.addToCart}>
                    <View className='flex-row justify-between'>
                        <View className='h-18 justify-between'>
                            <View className='flex-row justify-center items-center'>
                                <View onPress={() => handleIncrease()}>
                                    <Ionicons name='remove-outline' size={24} />
                                </View>
                                <Text className='font-semibold text-lg mx-4'>
                                    {quantity}
                                </Text>
                                <View onPress={() => handleDecrease()}>
                                    <Ionicons name='add-outline' size={24} />
                                </View>
                            </View>
                        </View>
                        <View className='h-18 justify-between'>
                            <Text className='text-lg font-semibold'>
                                Total: ${price}
                            </Text>
                        </View>
                    </View>

                    <Button
                        title='Add to cart'
                        filled
                        style={{
                            marginTop: 24,
                        }}
                        onPress={() => handleIncrease}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    addToCart: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 26,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 12,
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
});

export default ProductDetail;
