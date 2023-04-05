import classNames from 'classnames/bind';
import styles from '../Posts.module.scss';
import { useStore } from '~/Store';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NewsComp() {
    const [state, dispatch] = useStore();
    return (
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
                            <Link to="details">
                                <img className={cx('news-img')} src={news.img} alt="122121" />
                            </Link>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default NewsComp;
