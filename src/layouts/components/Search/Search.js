import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce} from '~/asset/hooks';
import * as searchServices  from '~/service/searchService'
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HandleSearchResult from './HandleSearchResult';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResult(result);
            setLoading(false);
        };

    
        fetchApi();
    }, [debounce]);
    
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    
        
    

    return (
        <div>
     <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <HandleSearchResult value = {searchResult}/>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
                        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
        </div>
    );
}

export default Search;
