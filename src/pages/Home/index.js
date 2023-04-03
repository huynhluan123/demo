import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useStore, action } from '~/Store';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import SlideShow from '../composnents/SlideShow';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Home() {
    const [state, dispatch] = useStore();

    return (
        <div className={cx('wrapper-home')}>
            <SlideShow />
            <div className={cx('content-home')}>
                <div className={cx('news-wrapper')}>
                    <div className={cx('news-title')}>
                        <h3 className={cx('text-news')}>Thông báo</h3>
                    </div>
                    <div className={cx('newss')}>
                        {state.defaultPosts.map((post, index) => {
                            return (
                                <span key={index} className={cx('news')}>
                                    <h4 className={cx('title-news')}>{post.title}</h4>
                                    <Link to="details">
                                        <img className={cx('news-img')} src={post.img} alt="122121" />
                                    </Link>
                                    <div className={cx('news-text')}>{post.content}</div>
                                </span>
                            );
                        })}
                    </div>
                </div>

                {/* them noi dung */}

                <div className={cx('post-wrapper')}>
                    <div className={cx('post-left')}>
                        <div className={cx('post-title')}>
                            <h3 className={cx('text-post')}>Bài viết</h3>
                        </div>
                        <div className={cx('posts')}>
                            {state.defaultPosts.map((post, index) => {
                                return (
                                    <span key={index} className={cx('post')}>
                                        <h4 className={cx('title-post')}>{post.title}</h4>
                                        <div className={cx('img-post')}>
                                            <Link to="details">
                                                <img className={cx('post-img')} src={post.img} alt="122121" />
                                            </Link>
                                        </div>
                                        <div className={cx('post-text')}>{post.content}</div>

                                        <div className={cx('post-text')}>{post.details}</div>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('advertise')}>
                        <h3 className={cx('title-advertise')}>Mẹo Học Đường</h3>
                        <div className={cx('box-imgs')}>
                            <div className={cx('img-box')}>
                                <h3 className={cx('title-img')}>đọc sách hiệu quả</h3>
                                <img className={cx('img')} src={state.boxAdvertise.img} alt="" />
                            </div>
                            <div className={cx('img-box')}>
                                <h3 className={cx('title-img')}>đọc sách hiệu quả</h3>
                                <img className={cx('img')} src={state.boxAdvertise.img} alt="" />
                            </div>
                            <div className={cx('img-box')}>
                                <h3 className={cx('title-img')}>đọc sách hiệu quả</h3>
                                <img className={cx('img')} src={state.boxAdvertise.img} alt="" />
                            </div>
                            <div className={cx('img-box')}>
                                <h3 className={cx('title-img')}>đọc sách hiệu quả</h3>
                                <img className={cx('img')} src={state.boxAdvertise.img} alt="" />
                            </div>
                            <div className={cx('img-box')}>
                                <h3 className={cx('title-img')}>đọc sách hiệu quả</h3>
                                <img className={cx('img')} src={state.boxAdvertise.img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
