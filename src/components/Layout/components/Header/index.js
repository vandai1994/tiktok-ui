import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
console.log(images.logo);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Dienlanhtamduong" />

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
                        {' '}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
