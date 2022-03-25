import { Button, Icon } from '@blueprintjs/core';
import React, {useState} from 'react';
import { IconMenu } from '../../Container/Menu/SideNavBar';
import Style from '../../CSSModule.module.css';

interface CloseIconMenu extends IconMenu {}

export default function Drawer(obj: CloseIconMenu) {
    
    const [isOpen, setMenu] = useState(true); 
    const [openIcon, setIcon] = useState(true);

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
        setIcon(openIcon => !openIcon);
    }

    return (
        <>
            <Button className={isOpen ? `${Style.menuIconClose}` : `${Style.menuIconOpen}`} onClick={toggleMenu}>
                <Icon icon={openIcon ? 'menu-open' : 'menu-closed'} size={obj.IconSize}/>
            </Button>
            <div className={isOpen ? `${Style.hideMenu}` : `${Style.showMenu}`}>
                <div className={Style.modal}>
                    <h2 style={{color:'white', marginLeft:'10px'}}>Blueprint Menu</h2>
                    <br/>
                </div>
            </div>
        </>
    );
}