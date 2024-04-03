/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "lion"];
  let adjs = ["great", "big", "fast", "tall"];
  let nouns = ["jogger", "racoon", "boots", "village"];
  let ends = [".com", ".net", ".edu", ".fr", ".ca", ".org", ".gov", ".ht"];

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

  document.querySelector(".bodyDom").innerHTML = `<ol>${domainGen
    .map(
      domainGen => `
<li>${domainGen}</li>`
    )
    .join(" ")}</ol>`;
};
