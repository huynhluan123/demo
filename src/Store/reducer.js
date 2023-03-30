import { SET_LOGIN } from './Constants';

const initState = {
    isCheckLogin: false,
    users: [
        {
            name: 'luan',
            email: 'luan@gmail.com',
            password: 'luan',
        },
        {
            name: 'phuc',
            email: 'phuc@gmail.com',
            password: 'phuc',
        },
        {
            name: 'tien',
            email: 'tien@gmail.com',
            password: 'tien',
        },
    ],
    userInput: {},
    newPosts: [],
    defaultPosts: [],
    postInput: {},
};

function reducer(state, action) {
    console.log(action.payload);
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isCheckLogin: action.payload,
            };
        default:
            throw new Error('Invalid action');
    }
}

export { initState };
export default reducer;
