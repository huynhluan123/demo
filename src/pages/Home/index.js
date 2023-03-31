import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <div className={cx('post-home')}>
                <div className={cx('post-wrapper')}>
                    <div className={cx('post-title')}>
                        <h3 className={cx('text-post')}>Bài viết</h3>
                    </div>
                    <span className={cx('posts')}>ASDASASDAS</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
