import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 3000);
    });

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div>
            <Tippy
                interactive // sel vao box
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        placeholder="Tìm kiếm tiêu đề bài viết"
                        spellCheck="false"
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
