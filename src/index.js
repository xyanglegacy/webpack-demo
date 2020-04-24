import nav from "./nav";
//import { top, bottom } from "./footer";
import { footer } from "./footer";
import makeButton from "./botton";
import { makeColorStyle } from "./button-styles";

const button = makeButton("YAH!");
button.style = makeColorStyle("peru");
document.body.appendChild(button);
document.body.appendChild(footer);

// console.log(
//   nav(),
//   top,
//   bottom,
//   button,
//   // makeButton("THIS IS A BUTTON"),
//   makeColorSytle("cyan")
// );
