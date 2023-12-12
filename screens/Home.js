import { View, Text, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import ListProduct from '../components/ListProduct';
import HorizontalList from '../components/HorizontalList';

const categories = [
    {
        name: 'Clothes',
        url: 'https://i.pinimg.com/564x/39/f1/d1/39f1d10fc835b70a6f41fbcce9cf15c4.jpg',
    },
    {
        name: 'Shoes',
        url: 'https://i.pinimg.com/564x/aa/52/fa/aa52fa6188b8a19f66b58a0ea96423d3.jpg',
    },
    {
        name: 'Bags',
        url: 'https://i.pinimg.com/564x/af/6a/2d/af6a2d205fbb58a0b49dd7558096cbcb.jpg',
    },
    {
        name: 'Hats',
        url: 'https://i.pinimg.com/736x/08/5d/fc/085dfcde105e9a3acf8450c98eefe85c.jpg',
    },
    {
        name: 'Pants',
        url: 'https://i.pinimg.com/736x/00/5d/bb/005dbba9862fbc7d69d322de0907d23e.jpg',
    },
];

export default function Home({ navigation }) {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='h-16 flex justify-around items-center flex-row'>
                <Ionicons
                    className='flex-none'
                    name='menu'
                    size={24}
                    color={COLORS.grey}
                />
                <Text className='font-bold'>Clothes Store</Text>
                <Ionicons
                    className='flex-none'
                    name='cart'
                    size={24}
                    color={COLORS.grey}
                />
            </View>

            {/* Search Input */}
            <View className='flex items-center mx-auto my-2 flex-row border-gray-50 border w-5/6 bg-white rounded-3xl px-3'>
                <Ionicons
                    className='ml-2'
                    name='search'
                    size={24}
                    color={COLORS.grey}
                />
                <TextInput
                    placeholder='Search Products'
                    className='flex-auto mx-auto rounded-md p-3 '
                />
            </View>

            {/* Categories */}

            <View className='h-auto w-full my-2'>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <HorizontalList item={item}></HorizontalList>
                    )}
                ></FlatList>
            </View>

            {/* Products */}
            <View className='w-full h-full flex-1 '>
                <Text className='font-bold ml-6 text-xl my-2'>
                    New Products
                </Text>

                <FlatList
                    className='grow'
                    data={categories}
                    keyExtractor={(item) => item.name}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <ListProduct item={item}></ListProduct>
                    )}
                ></FlatList>
            </View>
        </SafeAreaView>
    );
}
