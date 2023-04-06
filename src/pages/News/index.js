import { useStore } from '~/Store';

import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);
function News() {
    const [state] = useStore();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content-left')}></div>
                <div className={cx('content')}>
                    <div className={cx('news-wrapper')}>
                        <div className={cx('news-title')}>
                            <h3 className={cx('text-news')}>Thông báo</h3>
                        </div>
                        <div className={cx('newss')}>
                            {state.news.map((news, index) => {
                                return (
                                    <span key={index} className={cx('news')}>
                                        <h4 className={cx('title-news')}>{news.date}</h4>
                                        <p className={cx('news-text')}>{news.content}</p>
                                        <img className={cx('news-img')} src={news.img} alt="122121" />
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('content-right')}></div>
            </div>
        </div>
    );
}

export default News;
