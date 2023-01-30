import {AMOUNT_CARDS, GRID_ROW_DESKTOP, GRID_ROW_MOBI, MIN_HEIGHT_GRID_3, MIN_HEIGHT_GRID_4} from "./variables";

let brandsContainer = document.querySelectorAll('.brands__card');
let technicsContainer = document.querySelectorAll('.technics__card');
export let hideCards = function(parameter) {
  if (window.innerWidth >= MIN_HEIGHT_GRID_3 && window.innerWidth < MIN_HEIGHT_GRID_4) {
    for (let i = GRID_ROW_MOBI; i < AMOUNT_CARDS; i++) {
      if (parameter == "all" || parameter == "brands") {
        brandsContainer[i].classList.add('invisible');
      }
      if (parameter == "all" || parameter == "technics") {
        technicsContainer[i].classList.add('invisible');
      }
    }
  }
  if (window.innerWidth >= MIN_HEIGHT_GRID_4) {
    for (let i = GRID_ROW_DESKTOP; i < AMOUNT_CARDS; i++) {
      if (parameter == "all" || parameter == "brands") {
        brandsContainer[i].classList.add('invisible');
      }
      if (parameter == "all" || parameter == "technics") {
        technicsContainer[i].classList.add('invisible');
      }
    }
  }
}
