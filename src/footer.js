// const top = 'top';
// const bottom = 'bottom';
import "./footer.css";
import { peru, azure } from "./button-styles";

const top = document.createElement("div");
top.innerText = "Top footer";
top.style = peru;

const bottom = document.createElement("div");
bottom.innerText = "Bottom footer";
bottom.style = azure;

const footer = document.createElement("foot");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
