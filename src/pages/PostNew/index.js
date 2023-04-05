import Footer from '~/components/Layout/DefaultLayout/Footer';
import Posts from '../composnents/Posts';

import classNames from 'classnames/bind';
import styles from './PostNew.module.scss';

const cx = classNames.bind(styles);
function PostNew() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content-left')}></div>
                <div className={cx('content')}>
                    <Posts />
                </div>
                <div className={cx('content-right')}></div>
            </div>
            <Footer />
        </div>
    );
}

export default PostNew;
