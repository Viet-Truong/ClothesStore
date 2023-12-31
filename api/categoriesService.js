import * as request from '../utils/request';

export const showCategory = async () => {
    try {
        const result = await request.get('categories'); // Gọi API endpoint để lấy danh sách danh mục
        return result; // Trả về dữ liệu sản phẩm
    } catch (error) {
        console.log(error); // Trả về null hoặc xử lý lỗi theo yêu cầu của bạn
    }
};

export const addCategory = async (name_category) => {
    try {
        const result = await request.post('category', {
            name_category: name_category,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const updateCategory = async (id, name_category) => {
    try {
        const result = await request.put(`categories/${id}`, {
            id,
            name_category,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
