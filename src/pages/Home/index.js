import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Posts from '../composnents/Posts';
import NewsComp from '../composnents/NewsComp';
import SlideShow from '../composnents/Slide/SlideShow';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <div className={cx('content-home')}>
                <SlideShow />
                <NewsComp />
                <Posts />
            </div>
        </div>
    );
}

export default Home;
