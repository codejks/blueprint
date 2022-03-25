import React from "react";
import {
  AnchorButton,
  NavbarDivider,
  ButtonGroup
} from "@blueprintjs/core";
import Styles from '../../CSSModule.module.css';

export interface NavbarState {
  alignRight : boolean;
}

export const HeadNav = () => {

  function test() {
    console.log('sucess');
  }

  return (
    <div>
      <div className={`${Styles.menu}`}>
        <div className={`${Styles.group1}`}>
          <ButtonGroup className={Styles.menubutton}>
              <AnchorButton
                text="Location"
                onClick={test}
                minimal
                rightIcon="locate"
              />
              <NavbarDivider style={{marginTop:'6px'}}/>
              <AnchorButton
                text="Symbol"
                target="_blank"
                onClick={test}
                minimal
                rightIcon="add"
              />
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup className={Styles.menubutton}>
            <AnchorButton
              text="Zoom-in"
              onClick={test}
              minimal
              rightIcon="zoom-in"
            />
            <NavbarDivider style={{marginTop:'6px'}}/>
            <AnchorButton
              text="Zoom-out"
              onClick={test}
              minimal
              rightIcon="zoom-out"
            />
            <NavbarDivider style={{marginTop:'6px'}}/>
          <AnchorButton
            href="http://blueprintjs.com/docs"
            text="github"
            target="_blank"
            minimal
            rightIcon="share"
          />
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};
