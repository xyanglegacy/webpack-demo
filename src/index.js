import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./botton";
import { makeColorStyle } from "./button-styles";

console.log(
  nav(),
  top,
  bottom,
  makeButton("THIS IS A BUTTON"),
  makeColorStyle("cyan")
);
