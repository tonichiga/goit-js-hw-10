import products from "./menu.json";
import { template } from "./template.js";
import templateList from "./template/template-list.hbs";

const containerRef = document.querySelector(".container");
const bodyRef = document.querySelector("body");
const toggleRef = document.querySelector(".theme-switch__track");
const wrapperRef = document.createElement("div");
const listRef = document.createElement("ul");

wrapperRef.classList.add("container");
wrapperRef.classList.add("list-wrapper");
bodyRef.classList.add("light-theme");

const notParseValue = localStorage.getItem("control");
const parseValue = JSON.parse(notParseValue);
toggleRef.control.checked = parseValue;

if (localStorage.getItem("control") === null) {
  localStorage.setItem("control", false);
  localStorage.setItem("theme", "light-theme");
}

toggleRef.addEventListener("click", (e) => {
  if (e.target.nodeName === "LABEL") {
    if (localStorage.getItem("control") === "false") {
      localStorage.setItem("theme", "dark-theme");
      localStorage.setItem("control", true);
      bodyRef.classList.remove("light-theme");
    } else if (localStorage.getItem("control") === "true") {
      localStorage.setItem("theme", "light-theme");
      localStorage.setItem("control", false);
      bodyRef.classList.remove("dark-theme");
    }
  }
  let theme = localStorage.getItem("theme");
  bodyRef.classList.add(`${theme}`);
});

let theme = localStorage.getItem("theme");
bodyRef.classList.add(`${theme}`);

bodyRef.append(wrapperRef);
console.log(wrapperRef);

// ВАРИАНТ ДОБАВЛЕНИЯ РАЗМЕТКИ - 1

// const order = (products) =>
//   products.map(({ name, id, description, image, price, ingredients }) => {
//     wrapperRef.insertAdjacentHTML(
//       "beforeend",
//       template(name, id, description, image, price, ingredients)
//     );
//   });

// order(products);

// ВАРИАНТ ДОБАВЛЕНИЯ РАЗМЕТКИ - 2 (ЧЕРЕЗ ШАБЛОНИЗАТОР)

const markup = templateList(products);
wrapperRef.insertAdjacentHTML("beforeend", markup);
