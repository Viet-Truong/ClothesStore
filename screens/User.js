// Dữ liệu ảo về người dùng và sản phẩm
import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import { NativeBaseProvider } from 'native-base';
import Tabs from "../components/Profile/Tabs";

function User() {
    return (
        <NativeBaseProvider>
            <Center bg={Colors.main} pt={10} pb={6}>
                <Image
                    source={{
                        uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png"
                    }}
                    alt="profile"
                    w={24}
                    h={24}
                    resizeMode="cover"
                />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                    Admin Doe
                </Heading>
                <Text italic fontSize={10} color={Colors.white}>Joined Dec 12 2022</Text >
            </Center >
            <Tabs />
        </NativeBaseProvider >
    );
}
export default User;
