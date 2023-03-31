import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    className,
    href,
    normal,
    primary,
    outline,
    textWhite,
    to,
    small,
    large,
    text,
    children,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const _prop = {
        onClick,
        ...passProp,
    };

    if (to) {
        _prop.to = to;
        Comp = Link;
    } else if (href) {
        _prop.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(_prop).forEach((key) => {
            //lap qua _prop nhan lai key
            if (key.startsWith('on') && typeof _prop[key] === 'function') {
                ///neu _prop[key] bat dau bang 'on' se delete _prop[key]
                delete _prop[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className, // dung classnames de css
        normal,
        textWhite,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        ...passProp,
    });

    return (
        <Comp className={classes} {..._prop}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
