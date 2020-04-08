import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./botton";
import { makeColorSytle } from "./button-styles";

const button = makeButton("YAH!");
button.style = makeColorSytle("peru");
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
