import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorSytle } from "./button-styles";
import makeImage from "./image";
import logoUrl from "./logo-on-dark-bg.jpg";
// console.log(logoUrl);
import css from "./footer.css";
import buttonStyle from "./button.css";
// import "./footer.css";
import Foo from "./foo.ts";

const button = makeButton("YAH!");
button.style = makeColorSytle("peru");
document.body.appendChild(button);
document.body.appendChild(footer);

const image = makeImage(logoUrl);
document.body.appendChild(image);
// console.log(
//   nav(),
//   top,
//   bottom,
//   button,
//   // makeButton("THIS IS A BUTTON"),
//   makeColorSytle("cyan")
// );
