import * as request from '../utils/request';

export const showProducts = async () => {
    try {
        const products = await request.get('product'); // Gọi API endpoint để lấy danh sách sản phẩm

        console.log(products); // Log dữ liệu sản phẩm nhận được từ API

        return products; // Trả về dữ liệu sản phẩm
    } catch (error) {
        console.error(error);
        return null; // Trả về null hoặc xử lý lỗi theo yêu cầu của bạn
    }
};

export const showCategories = async () => {
    try {
        const categories = await request.get('categories'); // Gọi API endpoint để lấy danh sách danh mục

        console.log(categories); // Log dữ liệu danh mục nhận được từ API

        return categories; // Trả về dữ liệu danh mục
    } catch (error) {
        console.error(error);
        return null; // Trả về null hoặc xử lý lỗi theo yêu cầu của bạn
    }
};


export const showProductDetail = async (productId) => {
    try {
        const productDetail = await request.get(`products/${productId}`); // Gửi yêu cầu API để lấy thông tin chi tiết sản phẩm dựa trên productId

        console.log(productDetail); // Log thông tin chi tiết sản phẩm nhận được từ API

        return productDetail; // Trả về thông tin chi tiết sản phẩm
    } catch (error) {
        console.error(error);
        return null; // Trả về null hoặc xử lý lỗi theo yêu cầu của bạn
    }
};

// export const showProductsByCategoryId = async (categoryId) => {
//     try {
//         const products = await request.get(`products/${categoryId}`); // Gọi API endpoint để lấy danh sách sản phẩm dựa trên category ID

//         console.log(products); // Log dữ liệu sản phẩm nhận được từ API

//         return products; // Trả về dữ liệu sản phẩm
//     } catch (error) {
//         console.error(error);
//         return null; // Trả về null hoặc xử lý lỗi theo yêu cầu của bạn
//     }
//};