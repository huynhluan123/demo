import Posts from '../composnents/Posts';

import classNames from 'classnames/bind';
import styles from './PostNew.module.scss';
import SlideShow from '../composnents/Slide/SlideShow';

const cx = classNames.bind(styles);
function PostNew() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <SlideShow />
                        <Posts />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostNew;
