import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '~/pages/Login/Login.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { account, currentUser } from '~/Story/Blog';
import { DefaultLayout } from '~/components/Layout';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

let accounts = [...account];

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('/login');
    console.log(email, password);

    console.log(currentUser);

    useEffect(() => {
        let i = 0;
        let isCheck = false;
        for (i; i < accounts.length; i++) {
            if (email === account[i].email && password === account[i].password) {
                isCheck = true;
            }
        }
        if (isCheck) {
            setLogin('/');
        }
    }, [email, password]);

    const handleSignIn = () => {
        if (login === '/login') {
            alert('sai tk mat khau');
        } else {
            alert('Dang nhap thanh cong');
        }
    };

    return (
        <div>
            <div className={cx('background')}></div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h2 className={cx('title-login')}>Hello friend !!</h2>
                    <br />
                    <h3>- Kênh thông tin trường ABC</h3>
                    <br />
                    <h3>- Cập nhật tin tức</h3>
                    <br />
                    <h3>- Chia sẽ thông tin</h3>
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
                            <Button large to={login} className={cx('btn')} onClick={handleSignIn}>
                                Sign In
                            </Button>
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
