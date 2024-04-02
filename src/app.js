/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "tiger"];
  let adjs = ["great", "big", "fast"];
  let nouns = ["jogger", "racoon", "boots"];
  let ends = [".com", ".net", ".edu", ".fr", ".ca", ".org"];

  let domainGen = [];
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let end of ends) {
          domainGen.push(`${pronoun}${adj}${noun}${end}`);
        }
      }
    }
  }

  //

  let domainGen2 = [];
  //domainGen2 = domainGen.join("");
  //document.querySelector(".bodyDom").innerHTML = domainGen2;

  document.querySelector(".bodyDom").innerHTML = `<ol>${domainGen.map(
    domainGen => `
<li>${domainGen}</li>`
  )}</ol>`;
};
