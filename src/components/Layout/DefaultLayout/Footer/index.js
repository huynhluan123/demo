import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('wrapper')}>
                <span className={cx('content')}>
                    <h4>Khoa kỹ thuật và công nghệ</h4>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                </span>
                <span className={cx('content1')}>
                    <h4>Khoa kỹ thuật và công nghệ</h4>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                </span>
                <span className={cx('content2')}>
                    <h4>Khoa kỹ thuật và công nghệ</h4>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                    <p>Sđt: 0332919340</p>
                </span>
            </div>
            <div className={cx('adress')}>
                <p className={cx('title-p')}>Địa chỉ: Khu phố 4 ninh tịnh 2, phường 9 thành phố tuy hòa</p>
            </div>
        </div>
    );
}

export default Footer;
