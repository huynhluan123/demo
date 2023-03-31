import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '~/pages/Login/Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import { useStore, action } from '~/Store';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SignUp() {
    const [state, dispatch] = useStore();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);

    // console.log(name, email, password);
    let user = { name: name, email: email, password: password, image: '' };

    const handleRegister = () => {
        let i = 0;
        let isCheckLogOut = true;
        const count = state.users.length;

        for (i; i < count; i++) {
            if (email === state.users[i].email) {
                alert('Tài khoản email đã có trên hệ thống Vui lòng đổi email ');
                isCheckLogOut = false;
                break;
            }
        }
        if (isCheckLogOut) {
            state.users.push(user);
            dispatch(action.setRegister(user));
            // truyen vao handle
        }
    };

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
                            <h2>Sign Up</h2>
                            <div className={cx('input-box')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input
                                    type="text"
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                                <label>Name</label>
                            </div>
                            <div className={cx('input-box')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                <label>Email</label>
                            </div>
                            <div className={cx('input-box')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <label>password</label>
                            </div>
                            <div className={cx('remember-forgot')}>
                                <label className={cx('checkbox')}>
                                    {' '}
                                    <input type="checkbox"></input> I agree to the terms & conditions
                                </label>
                            </div>
                            <button type="submit" className={cx('btn')} onClick={handleRegister}>
                                Register
                            </button>
                            <div className={cx('login-register')}>
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" className={cx('login-link')}>
                                        Sign In
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

export default SignUp;
