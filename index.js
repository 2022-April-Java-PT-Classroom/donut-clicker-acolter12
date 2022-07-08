import DonutMaker from "./DonutMaker";
import {displayDonutStats} from "./utility-functions/utils"

renderPage();

function renderPage() {
    addDonut();
}

function addDonut() {
  const createBtn = document.querySelector('#makeDonut_button');
  const numDonuts = document.querySelector('.donutCount_number');
  const numAutoClickers = document.querySelector('.autoClickers_info');
  const numDonutMultipliers = document.querySelector('.donutMultiplier_info');
  

  createBtn.addEventListener('click', () => {
    const donuts = new DonutMaker(numDonuts.value, numAutoClickers.value, numDonutMultipliers.value);
    const donutList = document.querySelector('numOfDonuts');
    const donutInfoPara = document.createElement('p');
    const donutInfoSection = document.createElement('section');

    displayDonutStats(donutInfoPara, donuts);

    donutInfoSection.appendChild(donutInfoPara);

    
  })
}




