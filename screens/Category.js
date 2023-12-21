import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import * as CategoriesService from '../api/categoriesService';

export default function Category() {
    const [category, setCategory] = useState('');
    const [categoryUpdated, setCategoryUpdated] = useState('');
    const [categories, setCategories] = useState([]);
    const [editingId, setEditingId] = useState(null);
    // Add
    const handleAddCategory = async () => {
        const res = await CategoriesService.addCategory(category);
        if (res.type === 'success') {
            alert('Thêm danh mục thành công');
            setCategory('');
        } else {
            alert('Có lỗi xảy ra');
        }
    };
    // Update
    const handleEditClick = (id, category) => {
        setCategoryUpdated(category);
        setEditingId(id);
    };

    const handleSaveClick = async (id) => {
        const res = await CategoriesService.updateCategory(id, categoryUpdated);
        if (res.type === 'success') {
            setCategories(res.data);
            alert('Sua danh muc thanh cong');
            setEditingId(null);
        } else {
            alert('co loi xay ra');
        }
    };

    useEffect(() => {
        const fetch = async () => {
            const res = await CategoriesService.showCategory();
            if (res.type === 'success') {
                setCategories(res.data.data);
            } else {
                alert('Có lỗi xảy ra');
            }
        };

        fetch();
    }, [category]);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 22,
                            color: COLORS.black,
                        }}
                    >
                        Danh mục
                    </Text>
                    <View style={{ marginBottom: 4 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                            }}
                        >
                            Tên danh mục
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
                                placeholder='VD: Quần, Áo, ...'
                                placeholderTextColor={COLORS.black}
                                keyboardType='default'
                                value={category}
                                onChangeText={(newText) => setCategory(newText)}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </View>
                    </View>

                    <Button
                        title='Thêm danh mục'
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={handleAddCategory}
                    />
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginTop: 24,
                            color: COLORS.black,
                        }}
                    >
                        Danh sách danh mục
                    </Text>
                    <FlatList
                        data={categories}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginVertical: 8,
                                }}
                            >
                                {editingId === item.id ? (
                                    <TextInput
                                        style={{
                                            borderWidth: 1,
                                            flex: 1,
                                            marginRight: 10,
                                            padding: 4,
                                            borderColor: '#ccc',
                                        }}
                                        value={categoryUpdated}
                                        onChangeText={(newText) => {
                                            setCategoryUpdated(newText);
                                        }}
                                    />
                                ) : (
                                    <Text>{item.name_category}</Text>
                                )}
                                <View style={{ flexDirection: 'row' }}>
                                    <EvilIcons
                                        name='pencil'
                                        size={28}
                                        style={{ marginRight: 10 }}
                                        onPress={() =>
                                            handleEditClick(
                                                item.id,
                                                item.name_category
                                            )
                                        }
                                    />
                                    <AntDesign
                                        name='save'
                                        size={28}
                                        onPress={() =>
                                            handleSaveClick(
                                                item.id,
                                                categoryUpdated
                                            )
                                        }
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
