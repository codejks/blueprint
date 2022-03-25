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


  return (
    <div>
      <div className={`${Styles.menu}`}>
        <div className={`${Styles.group1}`}>
          <ButtonGroup className={Styles.menubutton}>
              <AnchorButton
                href="https://github.com/codejks/blueprint.git"
                text="Github"
                target="_blank"
                minimal
                rightIcon="code"
              />
              <NavbarDivider style={{marginTop:'6px'}}/>
              <AnchorButton
                href="https://github.com/codejks/blueprint.git"
                text="Github"
                target="_blank"
                minimal
                rightIcon="code"
              />
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup className={Styles.menubutton}>
            <AnchorButton
              href="http://blueprintjs.com/docs"
              text="Docs"
              target="_blank"
              minimal
              rightIcon="share"
            />
            <NavbarDivider style={{marginTop:'6px'}}/>
            <AnchorButton
              href="https://github.com/codejks/blueprint.git"
              text="Github"
              target="_blank"
              minimal
              rightIcon="code"
            />
            <NavbarDivider style={{marginTop:'6px'}}/>
            <AnchorButton
              href="https://google.com"
              text="Google"
              target="_blank"
              minimal
              rightIcon="code"
            />
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};
