import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faGear,
    faHouse,
    faReceipt,
    faRightToBracket,
    faSchool,
    faSignOut,
    faStar,
    faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import image from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';

import { Link } from 'react-router-dom';
import { useStore, action } from '~/Store';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useStore();

    const [href, setHref] = useState();

    const currentUser = localStorage.getItem('login');

    const id = localStorage.getItem('id');

    const users = state.users;

    useEffect(() => {
        if (id) {
            setHref('/login');
        }
    }, [id]);

    const handelLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('id');
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img className={cx('logo-news')} src={image.logoNews} alt="University_News" />
                    </Link>
                </div>
                <div className={cx('nav-wrapper')}>
                    <Button textWhite leftIcon={<FontAwesomeIcon icon={faHouse} />} className={cx('btn-nav')} to="/">
                        Home
                    </Button>

                    <Button
                        textWhite
                        leftIcon={<FontAwesomeIcon icon={faSchool} />}
                        className={cx('btn-nav')}
                        to="/news"
                    >
                        News
                    </Button>

                    <Button
                        textWhite
                        leftIcon={<FontAwesomeIcon icon={faStar} />}
                        className={cx('btn-nav')}
                        to="/postNew"
                    >
                        Post{' '}
                    </Button>
                    <Button
                        textWhite
                        leftIcon={<FontAwesomeIcon icon={faSuitcase} />}
                        className={cx('btn-nav')}
                        to="/wordSchool"
                    >
                        Đoàn - Hội
                    </Button>
                    <Button
                        textWhite
                        leftIcon={<FontAwesomeIcon icon={faBookmark} />}
                        className={cx('btn-nav')}
                        to="/introduce"
                    >
                        Giới thiệu
                    </Button>
                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <></>
                    ) : (
                        <>
                            <Button
                                className={cx('btn-dn')}
                                primary
                                to="/login"
                                leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                            >
                                Đăng nhập
                            </Button>

                            <Button primary to="/register" leftIcon={<FontAwesomeIcon icon={faReceipt} />}>
                                Đăng ký
                            </Button>
                        </>
                    )}
                    {currentUser && (
                        <Tippy
                            interactive // sel vao box
                            delay={[0, 700]}
                            placement="bottom-end"
                            render={(attrs) => (
                                <PopperWrapper>
                                    <div className={cx('popper')} tabIndex="-1" {...attrs}>
                                        <div className={cx('wrapper-popper')}>
                                            <Button
                                                className={cx('btn-popper')}
                                                leftIcon={<FontAwesomeIcon icon={faGear} />}
                                                to="/setting"
                                                text
                                            >
                                                Setting
                                            </Button>
                                        </div>
                                        <div className={cx('wrapper-popper')}>
                                            <div className={cx('icon-popper')}>
                                                <FontAwesomeIcon icon={faSignOut} />
                                            </div>

                                            <Button to={href} className={cx('btn-popper')} onClick={handelLogout}>
                                                Log Out
                                            </Button>
                                        </div>
                                    </div>
                                </PopperWrapper>
                            )}
                        >
                            <div className={cx('users')}>
                                <img className={cx('user-avatar')} src={users[id].image} alt={users[id].name} />
                                <div className={cx('p-wrapper')}>
                                    <p className={cx('user-name')}>{users[id].name}</p>
                                </div>
                            </div>
                        </Tippy>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
