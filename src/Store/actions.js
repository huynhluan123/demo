import { SET_LOGIN } from './Constants';
import { SET_LOGOUT } from './Constants';
import { SET_REGISTER } from './Constants';
export const setLogin = (payload, id) => ({
    type: SET_LOGIN,
    payload,
    id,
});

export const setLogOut = (payload, id) => ({
    type: SET_LOGOUT,
    payload,
    id,
});

export const setRegister = (payload) => ({
    type: SET_REGISTER,
    payload,
});
