import { IconName } from "@blueprintjs/icons";
import Drawer from '../../Component/Drawer/Drawer';
import React from 'react';
export interface IconMenu {
    Icon : IconName;
    IconSize : number;
}

export default function SideNavBar(obj : IconMenu) {


    return (
        <React.Fragment>
            <Drawer 
            Icon={'menu-open'}
            IconSize={28} />
        </React.Fragment>
    );
}