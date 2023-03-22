import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBookmark, faHouse, faRadio, faStar, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <Button normal leftIcon={<FontAwesomeIcon icon={faHouse} />} className={cx('btn-content')} to="/">
                    Home
                </Button>
                <Button normal leftIcon={<FontAwesomeIcon icon={faStar} />} className={cx('btn-content')} to="/login">
                    Mới nhất
                </Button>
                <Button normal leftIcon={<FontAwesomeIcon icon={faSuitcase} />} className={cx('btn-content')} to="/">
                    Công tác Đoàn - Hội
                </Button>
                <Button normal leftIcon={<FontAwesomeIcon icon={faRadio} />} className={cx('btn-content')} to="/">
                    Thông báo
                </Button>
                <Button normal leftIcon={<FontAwesomeIcon icon={faBookmark} />} className={cx('btn-content')} to="/">
                    Giới thiệu
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;
