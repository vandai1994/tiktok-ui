import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faKeyboard,
    faSpinner,
    faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

 // Handle logic
 const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            console.log(menuItem)
            // Handle change language
            break;
        default:
    }
};


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Dienlanhtamduong" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="search accounts and videos"
                            spellCheck={false}
                        />
                        <button>
                            <FontAwesomeIcon
                                className={cx('clear')}
                                icon={faCircleXmark}
                            />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text className={cx('red-btn')}>
                        Upload
                    </Button>
                    <Button
                        primary
                        leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                    >
                        Login
                    </Button>
                </div>

                <Menu
                 items={MENU_ITEM}
                 onChange = {handleMenuChange}
                 >
                    <button className={cx('more-btn')} >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </header>
    );
}

export default Header;
