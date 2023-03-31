import { SET_LOGIN, SET_LOGOUT, SET_REGISTER } from './Constants';

const initState = {
    isCheckLogin: false,
    id: -1,
    users: [
        {
            name: 'Huynh Luan',
            email: 'luan@gmail.com',
            password: 'luan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jWXyTKohVxDeT558vrVvvgvytbY_2cA1rUWMA9mHwwllPgFJo9AKMoihcnDT5zvsHVg&usqp=CAU',
        },
        {
            name: 'Hoang Phuc',
            email: 'phuc@gmail.com',
            password: 'phuc',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jWXyTKohVxDeT558vrVvvgvytbY_2cA1rUWMA9mHwwllPgFJo9AKMoihcnDT5zvsHVg&usqp=CAU',
        },
        {
            name: 'Tien Thanh',
            email: 'tien@gmail.com',
            password: 'tien',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jWXyTKohVxDeT558vrVvvgvytbY_2cA1rUWMA9mHwwllPgFJo9AKMoihcnDT5zvsHVg&usqp=CAU',
        },
    ],
    userInput: {},
    newPosts: [],
    defaultPosts: [],
    postInput: {},
};

function reducer(state, action) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isCheckLogin: action.payload,
                id: action.id,
            };
        case SET_LOGOUT:
            return {
                ...state,
                isCheckLogin: action.payload,
            };
        case SET_REGISTER:
            return {
                ...state,
            };
        default:
            throw new Error('Invalid action');
    }
}

export { initState };
export default reducer;
