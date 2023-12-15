import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    FlatList,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import COLORS from '../constants/colors';
import Button from '../components/Button';

const imgDir = FileSystem.documentDirectory + 'images/';

const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
    }
};
export default function AddProduct() {
    const [name, setname] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        loadImages();
    }, []);

    // Load images from file system
    const loadImages = async () => {
        await ensureDirExists();
        const files = await FileSystem.readDirectoryAsync(imgDir);
        if (files.length > 0) {
            setImages(files.map((f) => imgDir + f));
        }
    };

    // Select image from library or camera
    const selectImage = async (useLibrary) => {
        let result;
        const options = {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.75,
        };

        if (useLibrary) {
            result = await ImagePicker.launchImageLibraryAsync(options);
        } else {
            await ImagePicker.requestCameraPermissionsAsync();
            result = await ImagePicker.launchCameraAsync(options);
        }
        // Save image if not cancelled
        if (!result.canceled) {
            saveImage(result.assets[0].uri);
        }
    };

    // Delete image from file system
    const deleteImage = async (uri) => {
        await FileSystem.deleteAsync(uri);
        setImages(images.filter((i) => i !== uri));
    };

    // Save image to file system
    const saveImage = async (uri) => {
        await ensureDirExists();
        const filename = new Date().getTime() + '.jpeg';
        const dest = imgDir + filename;
        await FileSystem.copyAsync({ from: uri, to: dest });
        setImages([...images, dest]);
    };

    // Render image list item
    const renderItem = ({ item }) => {
        const filename = item.split('/').pop();
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 4,
                    alignItems: 'center',
                    gap: 5,
                }}
            >
                <Image
                    style={{ width: 80, height: 80 }}
                    source={{ uri: item }}
                />
                <Text style={{ flex: 1 }}>{filename}</Text>
                <Ionicons
                    name='trash'
                    size={24}
                    onPress={() => deleteImage(item)}
                />
            </View>
        );
    };

    const handleAddProduct = () => {};
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View
                        style={{
                            marginVertical: 16,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Icon
                            name={'add-circle-outline'}
                            size={22}
                            color={COLORS.black}
                            style={{
                                marginRight: 6,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: COLORS.black,
                            }}
                        >
                            Thêm sản phẩm
                        </Text>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Tên sản phẩm
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='VD: Quần jeans'
                                placeholderTextColor={COLORS.black}
                                keyboardType='default'
                                value={name}
                                onChangeText={(newText) => setname(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Giá
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='VD: 200000'
                                placeholderTextColor={COLORS.black}
                                keyboardType='numeric'
                                value={price}
                                onChangeText={(newText) => setPrice(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Số lượng
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='VD: 20'
                                placeholderTextColor={COLORS.black}
                                keyboardType='numeric'
                                value={quantity}
                                onChangeText={(newText) => setQuantity(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Mô tả
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='VD: Quần Jean Nam Ống Rộng, Trơn, ...'
                                placeholderTextColor={COLORS.black}
                                keyboardType='default'
                                value={description}
                                onChangeText={(newText) =>
                                    setDescription(newText)
                                }
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Kích cỡ
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='VD: S, M, L, ...'
                                placeholderTextColor={COLORS.black}
                                keyboardType='default'
                                value={size}
                                onChangeText={(newText) => setSize(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Màu sắc
                        </Text>

                        <View
                            style={{
                                width: '100%',
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 22,
                            }}
                        >
                            <TextInput
                                placeholder='VD: Xanh, đen, ...'
                                placeholderTextColor={COLORS.black}
                                keyboardType='default'
                                value={color}
                                onChangeText={(newText) => setColor(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Danh mục
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginVertical: 6,
                            }}
                        >
                            <SelectDropdown
                                data={['Quần', 'Áo thun', 'Áo khoác']}
                                defaultButtonText={'Danh mục'}
                                onSelect={(selectedItem, index) => {
                                    setCategory(selectedItem);
                                }}
                                buttonTextAfterSelection={(
                                    selectedItem,
                                    index
                                ) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item;
                                }}
                                buttonStyle={styles.dropdown1BtnStyle}
                                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                renderDropdownIcon={(isOpened) => {
                                    return (
                                        <Entypo
                                            name={
                                                isOpened
                                                    ? 'chevron-down'
                                                    : 'chevron-up'
                                            }
                                            size={24}
                                            color='black'
                                        />
                                    );
                                }}
                                dropdownIconPosition={'right'}
                                dropdownStyle={styles.dropdown1DropdownStyle}
                                rowStyle={styles.dropdown1RowStyle}
                                rowTextStyle={styles.dropdown1RowTxtStyle}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Thêm hình ảnh
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: 6,
                            }}
                        >
                            <AntDesign
                                name='addfile'
                                size={26}
                                color='black'
                                style={{ marginRight: 12 }}
                                onPress={() => selectImage(true)}
                            />
                            <AntDesign
                                name='camera'
                                size={32}
                                color='black'
                                onPress={() => selectImage(false)}
                            />
                        </View>
                    </View>

                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: '500',
                                marginVertical: 20,
                            }}
                        >
                            Danh sách hình ảnh
                        </Text>
                        <FlatList
                            data={images}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <Button
                        title='Thêm sản phẩm'
                        filled
                        style={{
                            marginVertical: 24,
                        }}
                        onPress={handleAddProduct}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    dropdownsRow: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: '5%',
    },

    dropdown1BtnStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.black,
    },
    dropdown1BtnTxtStyle: {
        color: COLORS.black,
        textAlign: 'left',
        fontSize: 13,
    },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5',
    },
    dropdown1RowTxtStyle: {
        color: COLORS.black,
        textAlign: 'left',
        fontSize: 12,
    },
    divider: { width: 12 },
    dropdown2BtnStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown2BtnTxtStyle: { color: COLORS.black, textAlign: 'left' },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown2RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5',
    },
    dropdown2RowTxtStyle: { color: COLORS.black, textAlign: 'left' },
});
