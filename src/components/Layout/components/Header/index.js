import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English"
                },
                {
                    code: "vi",
                    title: "Vietnamese"
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
]

function Header() {

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 0)
    }, [])

    return  <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="TikTok" />
            </div>
            <Tippy
                interactive
                visible={searchResult.length < 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Account
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                <div className={cx('search')}>
                    <input placeholder="Search " spellCheck={false} />

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('action')}>
                <Button text >Upload</Button>
                <Button primary >Log in</Button>

                <Menu items = {MENU_ITEMS} >
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>

            </div>
        </div>
    </header>

}

export default Header;