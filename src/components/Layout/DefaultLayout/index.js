import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from './Footer';
import Home from '~/pages/Home';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content-left')}></div>
                <div className={cx('content')}>
                    <Home />
                </div>
                <div className={cx('content-right')}></div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
