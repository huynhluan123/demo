import classNames from 'classnames/bind';
import styles from '../Posts.module.scss';
import { useStore } from '~/Store';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Posts() {
    const [state] = useStore();
    return (
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
                                <p className={cx('post-text')}>{post.content}</p>

                                <p className={cx('post-text')}>{post.details}</p>
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className={cx('advertise')}>
                <h3 className={cx('title-advertise')}>Mẹo Học Đường</h3>
                {state.boxAdvertise.map((box, index) => {
                    return (
                        <div className={cx('box-imgs')} key={index}>
                            <a href={box.link}>
                                <div className={cx('img-box')}>
                                    <img className={cx('img')} src={box.img} alt="aaaaaa" />
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Posts;
