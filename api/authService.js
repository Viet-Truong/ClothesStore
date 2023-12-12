import * as request from '../utils/request';

export const login = async ({ email, password }) => {
    try {
        const res = await request.post('login', {
            email,
            password,
        });
        console.log(res);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const register = async ({ email, password, name, phone_number }) => {
    try {
        const res = await request.post('register', {
            name,
            email,
            password,
            phone_number
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
