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
    defaultPosts: [
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZB9CCey1SlRmgv99AG_YJO9lLQphTDTtTtA&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img2: '',
            img3: '',
            img4: '',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img2: '',
            img3: '',
            img4: '',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAkDPGatUgLxSeH3lwl_q6zF4J_rk_dY4bA&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img2: '',
            img3: '',
            img4: '',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img2: '',
            img3: '',
            img4: '',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img2: '',
            img3: '',
            img4: '',
        },
    ],
    boxAdvertise: {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        im4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        img5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        img6: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
    },
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
