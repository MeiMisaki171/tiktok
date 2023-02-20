import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);


function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6465ca763764b020f506ef5cdea5c3ad~c5_100x100.jpeg?x-expires=1677056400&x-signature=XhDEPd2D6lPutW7217i0SWlnEHs%3D" alt="Nam" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen nam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>nguyen nam</span>               
            </div>
        </div>
     );   
}

export default AccountItem;