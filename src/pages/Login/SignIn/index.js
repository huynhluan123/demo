import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '~/pages/Login/Login.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div>
            <div className={cx('background')}></div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h2>Hello friend !!</h2>
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
                                <input type="email" required></input>
                                <label>Email</label>
                            </div>
                            <div className={cx('input-box')}>
                                <span className={cx('icon')}>
                                    {' '}
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input type="password" required></input>
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
                            <button type="submit" className={cx('btn')}>
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
