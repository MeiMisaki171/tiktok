import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {Wrapper as PopperWrapper} from '~/components/Popper'
import Header from "./Header";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu( {children, items=[] }) {

    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];


    const renderItems = () => {
        return current.data.map((item, title) => 
            <MenuItem key={title} data={item} />
        )
    }

    return ( 
    
    <Tippy
        visible
        interactive
        delay={[0, 700]}
        placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        <Header title="Language" />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
    >    
        {children}
    </Tippy> );
}

export default Menu;