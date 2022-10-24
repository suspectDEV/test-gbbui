import { Ichildren } from "../header"
import { StyledRow } from "./grid.style"

export interface Irow{
  fullWidth?: boolean
  //TODO:
  // estos ya existen en UI (Borrar)
  /** Margin Top */
  mt?: number;
  /** Margin Bottom */
  mb?: number;
  /** Margin left */
  ml?: number;
  /** Margin right */
  mr?: number;
  /** Padding horizontal */
  ph?: number;
  /** Padding vertical */
  pv?: number;
}

export function Row({children, ...rest} : Ichildren & Irow){
  return <StyledRow {...rest}>{children}</StyledRow>
}