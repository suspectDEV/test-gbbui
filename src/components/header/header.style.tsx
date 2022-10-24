import { styles } from "@grubbe/ui";
import styled from "styled-components";
import { Inav } from ".";

export const StyledNav = styled.nav<Inav>`
  display: flex;
  ${(props) =>
    props.orientation === "vertical"
      ? `flex-direction: column;
        ${
          props.align === "center"
            ? `align-items:center;`
            : props.align === "split"
            ? `align-items:stretch;`
            : props.align === "end"
            ? `align-items:end;`
            : props.align === "start" && `align-items:start;`
        }`
      : `
        align-items: center;
        ${
          props.align === "center"
            ? `justify-content:center;`
            : props.align === "split"
            ? `justify-content:space-between;`
            : props.align === "end"
            ? `justify-content:end;`
            : `justify-content:start;`
        }
  `}
`;

export const StyledNavItem = styled.span`
  display: inherit;
  align-items: center;
`;

export const StyledNavHamburger = styled.div`
  // background-color: red;
  display: inherit;
  // position: relative;
  
  .content-hamburger {
    display: inherit;
  }
  @media only screen and (max-width: 734px) {
    .menu-right {
      right: 17px;
      text-align: right;
    }

    .is-close {
      display: none;
    }
    .is-open {
      display: block;
    }
  }
`;

export const MenuHamburger = styled.div`
  display: none;
  height: 15px;
  width: 22px;
  z-index: 1;
  cursor: pointer;

  @media only screen and (max-width: 734px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    
    &.isOpen {
      span:first-child {
        margin-top: 7px;
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: rotate(-45deg);
        position: absolute;
        top: 7px;
      }
    }
  }
`

export const LineHamburger = styled.span`
  display: block;
  transition: 300ms;
  width: 22px;
  height: 2px;
  background-color: ${styles.color.secondary.nile};
  border-radius: 100px;
`;

export const ContentHamburger = styled.div`
display: inherit;
  @media only screen and (max-width: 734px) {
    position: absolute;
    margin-top: 2rem;
    > span {
      margin-top: 1.1rem;
    }
  }
`;

export const CurtainNavHamburger = styled.div`
  @media only screen and (max-width: 734px) {
    display: block;
  }
  display: none;
  position: absolute;
  transition: 300ms;
  opacity:0;
  top:0;
  right:0;
  background-color: #F1F1F1;
  margin-top: -20px;
  width: 90%;
  max-width: 280px;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;
