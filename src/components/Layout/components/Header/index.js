import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightToBracket, faSignOut } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import image from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';

import { Link } from 'react-router-dom';
import Search from '../Search';
import { useStore, action } from '~/Store';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useStore();

    const currentUser = state.isCheckLogin;

    const id = state.id;

    const users = state.users;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img className={cx('logo-news')} src={image.logoNews} alt="University_News" />
                    </Link>
                </div>
                <Search />
                {/* ul li */}

                <div className={cx('action')}>
                    {currentUser ? (
                        <></>
                    ) : (
                        <Button
                            className={cx('btn-dn')}
                            primary
                            to="/login"
                            leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                        >
                            Đăng nhập
                        </Button>
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
                                            <button
                                                className={cx('btn-popper')}
                                                onClick={() => dispatch(action.setLogOut(false))}
                                            >
                                                Log Out
                                            </button>
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
