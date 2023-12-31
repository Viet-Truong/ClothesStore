import * as request from '../utils/request';

export const login = async ({ email, password }) => {
    try {
        const res = await request.post('login', {
            email,
            password,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const register = async ({
    name,
    email,
    password,
    phone_number,
    role,
}) => {
    try {
        const res = await request.post('register', {
            name,
            email,
            password,
            phone_number,
            role,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const verifyToken = async (token) => {
    try {
        const res = await request.get(`verify/${token}`);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const sendToken = async (email) => {
    try {
        const res = await request.post('reset-password', {
            email,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const changePassword = async ({ token, password }) => {
    try {
        const res = await request.post(`change-password`, {
            password,
            token,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
};
