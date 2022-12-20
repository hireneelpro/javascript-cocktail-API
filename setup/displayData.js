
import { getElement } from "./getelement.js";
export const displayData = (data, sectionCenter) => {
  
    const results = data.drinks;
    
  sectionCenter.innerHTML = results
    .map((each) => {
      // console.log(each);
      const { strDrink: name, idDrink, strDrinkThumb: image } = each;
      //   console.log(name, image, idDrink);
      return `<article class="single-item">
          <a href="./drink.html?id=${idDrink}">
            <img class="img" src="${image}" data-id="${idDrink}" alt="">
          </a>
          <h3 class="cocktail-name">${name} </h3>
        </article>`;
    })
    .join("");
};
