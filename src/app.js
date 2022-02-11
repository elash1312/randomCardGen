/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add("hearts");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("hearts");
    document.querySelector(".card").classList.add("spades");
  }, 1000);
  document.querySelector(".card").classList.add("spades");
  document.querySelector(".card").classList.add("diamonds");
  document.querySelector(".card").classList.add("clubs");
};
