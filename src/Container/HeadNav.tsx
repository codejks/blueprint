import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";

export interface NavigationProps {}

export const HeadNav: React.FC<NavigationProps> = () => {
  return (
    <Navbar className={Classes.DARK} toggle-hidden>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Blueprint Study</NavbarHeading>
        <NavbarDivider />
        <AnchorButton
          href="http://blueprintjs.com/docs"
          text="Docs"
          target="_blank"
          minimal
          rightIcon="share"
        />
        <AnchorButton
          href="https://github.com/codejks/blueprint.git"
          text="Github"
          target="_blank"
          minimal
          rightIcon="code"
        />
      </NavbarGroup>
    </Navbar>
  );
};
