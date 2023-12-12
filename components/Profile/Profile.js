import { Box, FormControl, Input, ScrollView, VStack, Button } from "native-base";
import React, { useState, useEffect } from "react";
import Colors from "../../color";


const initialUser = {
    user_id: 1,
    first_name: 'John',
    last_name: 'Doe',
    phone_number: '1234567890',
    email: 'john@example.com',
    dob: '1990-01-01',
    address: '123 Main St, City',
    password: 'password123',
};
const Inputs = [
    {
        label: "FIRSTNAME",
        type: "text",
        dataKey: "first_name",

    },
    {
        label: "LASTNAME",
        type: "text",
        dataKey: "last_name",
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
    const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa
    const [currentUser, setCurrentUser] = useState({ ...initialUser }); // Lưu trữ thông tin người dùng hiện tại

    useEffect(() => {
        if (!isEditing) {
            // Nếu không ở chế độ chỉnh sửa, cập nhật thông tin người dùng hiện tại từ initialUser
            setCurrentUser({ ...initialUser });
        }
    }, [isEditing]);

    const handleEditClick = () => {
        setIsEditing(!isEditing); // Chuyển đổi giữa chế độ chỉ đọc và chế độ chỉnh sửa
    };

    const handleInputChange = (key, value) => {
        // Cập nhật thông tin người dùng khi thay đổi input trong chế độ chỉnh sửa
        setCurrentUser((prevUser) => ({
            ...prevUser,
            [key]: value,
        }));
    };

    return (
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {Inputs.map((input, index) => (
                        <FormControl key={index}>
                            <FormControl.Label
                                _text={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                }}
                            >
                                {input.label}
                            </FormControl.Label>
                            <Input
                                borderColor={Colors.main}
                                borderWidth={0.5}
                                bg={Colors.subGreen}
                                py={4}
                                type={input.type}
                                color={Colors.main}
                                fontSize={15}
                                _focus={{
                                    bg: Colors.subGreen,
                                    borderWidth: 1,
                                }}
                                value={isEditing ? currentUser[input.dataKey] : initialUser[input.dataKey]}
                                onChange={(e) => handleInputChange(input.dataKey, e.nativeEvent.text)}
                                readOnly={!isEditing}
                            />
                        </FormControl>
                    ))}
                    <Button onPress={handleEditClick}>
                        {isEditing ? 'Save' : 'Edit'}
                    </Button>
                </VStack>
            </ScrollView>
        </Box>
    );
};
export default Profile;
