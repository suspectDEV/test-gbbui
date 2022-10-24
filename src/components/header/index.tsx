import React, { HTMLAttributes, useState } from "react";
import {
  ContentHamburger,
  CurtainNavHamburger,
  LineHamburger,
  MenuHamburger,
  StyledNav,
  StyledNavHamburger,
  StyledNavItem,
} from "./header.style";

export interface Ichildren {
  children?: any;
}

export interface Inav {
  orientation?: "vertical" | "horizontal";
  align?: "start" | "center" | "end" | "split";
}

export interface InavHamburger{
  color?: string
}

export function Nav({
  children,
  ...rest
}: Ichildren & Inav & HTMLAttributes<HTMLDivElement>) {
  return <StyledNav {...rest}>{children}</StyledNav>;
}

Nav.Item = function NavItem({ children, ...rest }: Ichildren) {
  return <StyledNavItem {...rest}>{children}</StyledNavItem>;
};

Nav.Section = function NavSection({ children, ...rest }: Ichildren) {
  return <StyledNavItem {...rest}>{children}</StyledNavItem>;
};

Nav.Hamburger = function NavHamburger({ children, color, ...rest }: Ichildren & InavHamburger) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <StyledNavHamburger {...rest}>
        <MenuHamburger onClick={() => setOpen(!isOpen)} className={`${isOpen?"isOpen":""}`}>
          <LineHamburger />
          <LineHamburger />
          <LineHamburger />
        </MenuHamburger>
        <CurtainNavHamburger style={{right: isOpen?"0":"-300px", opacity: isOpen?1:0,backgroundColor:color}} />
        <ContentHamburger className={`menu-right ${isOpen ? "is-open" : "is-close"}`}>
          {children}
        </ContentHamburger>
      </StyledNavHamburger>
    </>
  );
};
