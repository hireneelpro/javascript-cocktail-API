import { getElement } from "./getelement.js";
import { fetchData } from "./fetchdata.js";
import { displayData } from "./displayData.js";
const gif = getElement(".gif");
const img = getElement(".img");
const cocktailName = getElement(".cocktail-name");
const sectionCenter = getElement(".section-center");
const url = " https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ma";


// ===== function search =====//
const search = () => {
  const input = getElement(".cocktail-search");
  input.addEventListener("keyup", async () => {
    const value = input.value;
    // console.log(value);
    const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    const data1 = await fetchData(searchUrl);
    console.log(data1);
    if (data1.drinks !== null) {
      displayData(data1,sectionCenter);
    } else {
      sectionCenter.innerHTML = `<h2 class="error"> No Match Found for your Search </h2>`;
    }
  });
};

// ================ function start================
const start = async () => {
 
  const data = await fetchData(url);
  gif.classList.add("hide");
  sectionCenter.classList.remove("hide")
  displayData(data,sectionCenter);
};
start();
search();
