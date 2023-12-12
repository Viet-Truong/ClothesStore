import { Box, FormControl, Input, ScrollView, VStack, Button } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";
import bcrypt from "bcryptjs";
import Colors from "../../color";


const Inputs = [
    {
        label: "HỌ VÀ TÊN ",
        type: "text",
        dataKey: "fullname",

    },
    {
        label: "PHONE",
        type: "text",
        dataKey: "phone_number",
    },
    {
        label: "EMAIL",
        type: "text",
        dataKey: "email",
    },
    {
        label: "DAY OF BIRTH",
        type: "text",
        dataKey: "dob",
    },
    {
        label: "ADDRESS",
        type: "text",
        dataKey: "address",
    },
    {
        label: "PASSWORD",
        type: "password",
        dataKey: "password",
    }
]

const Profile = () => {

    const navigation = useNavigation();
    const { logout } = useContext(AuthContext);
    const { auth } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState({ ...auth }); // Trạng thái chỉnh sửa
    const [currentUser, setCurrentUser] = useState({ ...auth }); // Lưu trữ thông tin người dùng hiện tại
    const handleLogout = () => {
        logout();
        navigation.navigate('Login');
    }
    // useEffect(() => {
    //     if (!isEditing) {
    //         // Nếu không ở chế độ chỉnh sửa, cập nhật thông tin người dùng hiện tại từ auth
    //         setCurrentUser({ ...auth.data });
    //     }
    // }, [auth]);

    // const handleEditClick = () => {
    //     setIsEditing(!isEditing); // Chuyển đổi giữa chế độ chỉ đọc và chế độ chỉnh sửa
    // };

    // const handleInputChange = (key, value) => {
    //     // Cập nhật thông tin người dùng khi thay đổi input trong chế độ chỉnh sửa
    //     setCurrentUser((prevUser) => ({
    //         ...prevUser,
    //         [key]: value,
    //     }));
    // };

    return (
        // <Box h="full" bg={Colors.white} px={5}>
        //     <ScrollView showsVerticalScrollIndicator={false}>
        //         <VStack space={10} mt={5} pb={10}>
        //             {Inputs.map((input, index) => (
        //                 <FormControl key={index}>
        //                     <FormControl.Label
        //                         _text={{
        //                             fontSize: "12px",
        //                             fontWeight: "bold",
        //                         }}
        //                     >
        //                         {input.label}
        //                     </FormControl.Label>
        //                     <Input
        //                         borderColor={Colors.main}
        //                         borderWidth={0.5}
        //                         bg={Colors.subGreen}
        //                         py={4}
        //                         type={input.type}
        //                         color={Colors.main}
        //                         fontSize={15}
        //                         _focus={{
        //                             bg: Colors.subGreen,
        //                             borderWidth: 1,
        //                         }}
        //                         value={isEditing[input.dataKey] ? currentUser[input.dataKey] : auth.data[input.dataKey]}
        //                         onChange={(e) => handleInputChange(input.dataKey, e.nativeEvent.text)}
        //                         readOnly={!isEditing}
        //                     />
        //                 </FormControl>
        //             ))}
        <Button
            title='Log out'
            filled
            onPress={() => handleLogout()} style={{
                marginTop: 18, marginBottom: 4,
            }}

        > Đăng xuất</Button>
        //         </VStack>
        //     </ScrollView>
        // </Box>
    );
};
export default Profile;
