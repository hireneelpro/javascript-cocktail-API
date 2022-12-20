import { getElement } from "./getelement.js";
import { fetchData } from "./fetchdata.js";
const gif = getElement(".gif");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);
const singleDrink = getElement(".single-drink");

const url = ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const start = async () => {
  const data = await fetchData(url);
  // console.log(data);
  const {
    strInstructions: text,
    strDrinkThumb,
    strDrink: name,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = data.drinks[0];

  console.log(strIngredient1);

  const ingredientList = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  // console.log(ingredientList);
  const ingredientHtml = ingredientList
    .map((each) => {
      if (!each) {
        return;
      } else {
        return `<li><i class="far fa-check-square"></i>${each}</li>`;
      }
    })
    //   return each !== null;
    //      })
    // .map(
    //   (each) => `<li><i class="far fa-check-square"></i>${each}</li>`
    // )
    .join("");
  console.log(ingredientHtml);

  gif.classList.add("hide");
  singleDrink.classList.remove("hide");
  singleDrink.innerHTML = `<img src="${strDrinkThumb}" class="single-img img" alt="">
    <div class="drink-info">
      <h2 class="drink-title ">${name}</h2>
      <p class="drink-text">${text}</p>
      <ul>
          ${ingredientHtml}
        </ul>
      <button class="btn "> <a href="./index.html">ALL COCKTAIL</a> </button>
    </div>`;
};

start();
