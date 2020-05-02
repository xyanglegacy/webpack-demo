import nav from "./nav";
// 3rd
// import { footer } from "./footer";
const getFooter = () => import("./footer");
import makeButton from "./button";
import { makeColorSytle } from "./button-styles";
import makeImage from "./image";
import logoUrl from "./logo-on-dark-bg.jpg";
// console.log(logoUrl);
import css from "./footer.css";
import buttonStyle from "./button.css";
// import "./footer.css";

const button = makeButton("YAH!");
button.style = makeColorSytle("peru");
document.body.appendChild(button);

// 3rd
button.addEventListener("click", (e) => {
  getFooter().then((footerModule) => {
    document.body.appendChild(footerModule.footer);
  });
});

// 2nd
// naive way. still loading the code.
// button.addEventListener("click", (e) => {
//   document.body.appendChild(footer);
// });

// 1st
// document.body.appendChild(footer);

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
