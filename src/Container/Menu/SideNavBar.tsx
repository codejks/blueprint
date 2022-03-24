import { Icon } from '@blueprintjs/core';
import { IconName } from "@blueprintjs/icons";
import { Button } from '@blueprintjs/core';
export interface IconMenu {
    icon : IconName;
    IconSize : number;
}

export default function SideNavBar(obj : IconMenu) {

    const onDraw = () => {
        console.log('open');
    }

    return (
        <Button className='bp4-minimal'>
            <Icon icon={obj.icon} size={obj.IconSize} onClick={onDraw} />
        </Button>
    );
}