import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '~/pages/Login/Login.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
// const accounts = [
//     {
//         name: 'luan',
//         email: 'huynhluan@gmail.com',
//         password: '123456',
//     },
// ];

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email, password);

    const handleSignIn = () => {};

    return (
        <div>
            <div className={cx('background')}></div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h2 className={cx('title-login')}>Hello friend !!</h2>
                    <br />
                    <h3>- Kính chào bạn đã đến với Kênh thông tin của trường !</h3>
                    <br />
                    <h3>- Ở đây chúng ta có thể nắm bắt thông tin, chia sẽ và gớp ý kiến của mình !</h3>
                    <br />
                    <h3>- Hãy đăng nhập vào trang để có thêm thông tin về trường nhé !</h3>
                </div>

                <div className={cx('logreg-box')}>
                    <div className={cx('form-box')}>
                        <form action="#">
                            <h2>Sign In</h2>
                            <div className={cx('input-box')}>
                                <span className={cx('icon')}>
                                    {' '}
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                <label>Email</label>
                            </div>
                            <div className={cx('input-box')}>
                                <span className={cx('icon')}>
                                    {' '}
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input
                                    type="password"
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <label>password</label>
                            </div>
                            <div className={cx('remember-forgot')}>
                                <label className={cx('checkbox')}>
                                    {' '}
                                    <input type="checkbox"></input> Remember Now
                                </label>
                                <Link to="#" className={cx('forgot-password')}>
                                    {' '}
                                    Forgot password
                                </Link>
                            </div>
                            <button type="submit" className={cx('btn')} onClick={handleSignIn}>
                                Sign In
                            </button>
                            <div className={cx('login-register')}>
                                <p>
                                    Don't have an account?{' '}
                                    <Link to="/register" className={cx('register-link')}>
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
