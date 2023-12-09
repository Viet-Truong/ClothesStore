import React from "react";
import { View, Text, Image } from 'react-native';


const ListProduct = ({item}) => {
  return (
    <View className="h-64 w-2/5 m-5 rounded-lg flex flex-col justify-center items-start ">
      <Image
        source={{ uri: item.url }}
        className="w-full h-full rounded-lg"
        resizeMode="cover"
      />
      <Text className="font-medium text-gray-500 mt-2">{item.name}</Text>
    </View>
  );
};

export default ListProduct;
