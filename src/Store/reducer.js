import { SET_LOGIN, SET_LOGOUT, SET_REGISTER } from './Constants';

const initState = {
    isCheckLogin: false,
    settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    },
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
    news: [
        {
            date: '2/4/2023',
            content: 'THÔNG BÁO V/v NHẮC NHỞ SINH VIÊN TUÂN THỦ QUY ĐỊNH TRONG QUÁ TRÌNH THỰC TẬP ',
            img: 'https://file1.hutech.edu.vn/file/editor/khoathuychannuoi/460722-page0001.jpg',
        },
        {
            date: '2/4/2023',
            content: 'THÔNG BÁO V/v ĐĂNG KÝ THAM DỰ LỄ TRAO BẰNG TỐT NGHIỆP ĐỢT THÁNG 3 NĂM 2023',
            img: 'https://file1.hutech.edu.vn/file/editor/khoathuychannuoi/460722-page0001.jpg',
        },
        {
            date: '2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            img: 'https://file1.hutech.edu.vn/file/editor/khoathuychannuoi/460722-page0001.jpg',
        },
        {
            date: '2/4/2023',
            content: 'THÔNG BÁO V/v ĐĂNG KÝ THAM DỰ LỄ TRAO BẰNG TỐT NGHIỆP ĐỢT THÁNG 3 NĂM 2023',
            img: 'https://file1.hutech.edu.vn/file/editor/khoathuychannuoi/460722-page0001.jpg',
        },
        {
            date: '2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            img: 'https://file1.hutech.edu.vn/file/editor/khoathuychannuoi/460722-page0001.jpg',
        },
    ],
    defaultPosts: [
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZB9CCey1SlRmgv99AG_YJO9lLQphTDTtTtA&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAkDPGatUgLxSeH3lwl_q6zF4J_rk_dY4bA&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        },
        {
            title: 'NGÀY CHỦ NHẬT XANH 2/4/2023',
            content:
                'Sáng ngày 2/4/2023, Tuổi trẻ Trường Đại học Phú Yên tổ chức "NGÀY CHỦ NHẬT XANH" thu hút sự hưởng ứng của các đoàn viên, thanh niên nhà trường.',
            details:
                'Đây không chỉ là hoạt động để đoàn viên thanh niên thực hiện Công trình "Vườn hoa thanh niên" chào mừng Đại hội Hội Sinh viên các cấp mà còn nhằm nâng cao ý thức của  cộng đồng về bảo vệ môi trường.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN45qvafN4M71MVU6y5vTUeVOH5m8Ct--ZHg&usqp=CAU',
        },
    ],
    boxAdvertise: [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwpv2VlsvdAo-V3B8L_KDh7ki3kXzlri3iQ&usqp=CAU',
            link: 'https://giasuhanoigioi.edu.vn/cach-hoc-gioi-toan-sieu-hieu-qua.html',
        },
        {
            img: 'https://vietphapaau.com/wp-content/uploads/2019/04/tu-vung-tieng-phap.jpg',
            link: 'https://vietphapaau.com/mot-so-meo-hoc-tu-vung-tieng-phap-hay/',
        },
        {
            img: 'https://i.ytimg.com/vi/yeUZR8uNMkE/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=yeUZR8uNMkE&ab_channel=M%E1%BB%99tC%E1%BB%8DngNg%C3%B2',
        },
        {
            img: 'https://blog.hocmai.vn/wp-content/uploads/2021/05/9-meo-on-luyen-giup-nang-cao-ket-qua-hoc-tap.jpg',
            link: 'https://blog.hocmai.vn/9-meo-hoc-tap-giup-nang-cao-ket-qua-cho-ki-thi-sap-toi-ma-2k3-khong-nen-bo-qua/',
        },
        {
            img: 'https://i.ytimg.com/vi/pNKRExRmvBQ/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=HGA4rWFrnmU&ab_channel=DrawYourBrain',
        },
        {
            img: 'https://r73troypb4obj.vcdn.cloud/website02/uploads/images/6242cf881a1b854d4e90307c/so-do-tu-duy-la-gi.jpg',
            link: 'https://clevai.edu.vn/hieu-con-yeu/so-do-tu-duy/',
        },
        {
            img: 'http://nlptraining.vn/wp-content/uploads/2018/07/H%E1%BB%8Dc-k%E1%BB%B9-n%C4%83ng-m%E1%BB%81m-trong-giao-ti%E1%BA%BFp-b%C3%A1n-h%C3%A0ng-t%E1%BB%91t-nh%E1%BA%A5t-H%C3%A0-N%E1%BB%99i-2.jpg',
            link: 'https://nlptraining.vn/hoc-ky-nang-mem-trong-giao-tiep-ban-hang-tot-nhat-ha-noi/',
        },
        {
            img: 'https://nghenghiep.vieclam24h.vn/wp-content/uploads/2018/05/infographic-10-ky-nang-mem-quan-trong-doi-voi-nha-quan-ly-hinh-anh.png',
            link: 'https://nghenghiep.vieclam24h.vn/cam-nang-tuyen-dung/infographic-10-ky-nang-mem-quan-trong-doi-voi-nha-quan-ly/',
        },
    ],
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
