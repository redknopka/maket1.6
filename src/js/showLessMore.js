import {AMOUNT_CARDS} from "./variables";
import {hideCards} from "./hideCards";

export let buttonShowMoreLessBrands = document.querySelector('.brands__footer-button');
buttonShowMoreLessBrands.addEventListener('click', function() {
  let brandsContainer = document.querySelectorAll('.brands__card');
  if (buttonShowMoreLessBrands.classList.contains('show-more')) {
    buttonShowMoreLessBrands.classList.remove('show-more');
    buttonShowMoreLessBrands.classList.add('show-less');
    buttonShowMoreLessBrands.textContent = 'Скрыть';
    for (let i = 0; i < AMOUNT_CARDS; i++) {
      brandsContainer[i].classList.remove('invisible');
    }
  }
  else if (buttonShowMoreLessBrands.classList.contains('show-less')) {
    buttonShowMoreLessBrands.classList.remove('show-less');
    buttonShowMoreLessBrands.classList.add('show-more');
    buttonShowMoreLessBrands.textContent = 'Показать все';
    hideCards("brands");
  }
});
export let buttonShowMoreLessTechnics = document.querySelector('.technics__footer-button');
buttonShowMoreLessTechnics.addEventListener('click', function() {
  let technicsContainer = document.querySelectorAll('.technics__card');
  if (buttonShowMoreLessTechnics.classList.contains('show-more')) {
    buttonShowMoreLessTechnics.classList.remove('show-more');
    buttonShowMoreLessTechnics.classList.add('show-less');
    buttonShowMoreLessTechnics.textContent = 'Скрыть';
    for (let i = 0; i < AMOUNT_CARDS; i++) {
      technicsContainer[i].classList.remove('invisible');
    }
  }
  else if (buttonShowMoreLessTechnics.classList.contains('show-less')) {
    buttonShowMoreLessTechnics.classList.remove('show-less');
    buttonShowMoreLessTechnics.classList.add('show-more');
    buttonShowMoreLessTechnics.textContent = 'Показать все';
    hideCards("technics");
  }
});
