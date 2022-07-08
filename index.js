import DonutMaker from "./DonutMaker";
import {displayDonutStats} from "./utility-functions/utils"

renderPage();

function renderPage() {
    addDonut();
}

function addDonut() {
  const createBtn = document.querySelector('#makeDonut_button');
  const numDonuts = document.querySelector('.donutCount_number');
  const numAutoClickers = document.querySelector('.autoClicker_number');
  const numDonutMultipliers = document.querySelector('.donutMultiplier_number');
  

  createBtn.addEventListener('click', () => {
    const donuts = new DonutMaker(0, 0, 0);
    const donutList = document.querySelector('#numOfDonuts');
    const donutInfoPara = document.createElement('p');
    const donutInfoSection = document.createElement('section');
  
    displayDonutStats(donutInfoPara, donuts);
    donutInfoSection.appendChild(donutInfoPara);


    const addADonut = document.createElement('button');
    addADonut.innerText = 'Create A Donut';

    donutInfoSection.appendChild(addADonut);

    donutList.appendChild(donutInfoSection);

    addADonut.addEventListener('click', () => {
      donuts.addDonut();

      displayDonutStats(donutInfoPara, donuts);

});

  });
}




