import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import className from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/16dcd6a6d06ded04be7d891727426af2.jpeg?x-expires=1659920400&x-signature=Rs8X66kuGLm7sDZVAejokHn4LK4%3D"
                alt="Hoa"
                fallback = 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/151605881_2324896834321418_5389562201359866396_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=SIfq92i8BF0AX9GlQxT&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_KlnYDBU74keJh_WZSq8p7Wh_wfg2skflN1un4rBFojA&oe=63221A6F'
                
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
