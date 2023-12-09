import React from "react";
import { View, Text, Image } from 'react-native';

const HorizontalList = ({item}) => {
  return (
    <View className="flex w-20 justify-center items-center p-3 mx-3">
      <Image
        source={{ uri: item.url }}
        className="rounded-full h-14 w-14 outline-2"
        resizeMode="cover"
      />
      <Text className="font-medium text-gray-500 mt-2">{item.name}</Text>
    </View>
  );
};

export default HorizontalList;
