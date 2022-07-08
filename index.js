import DonutMaker from "./DonutMaker";
import {displayDonutStats} from "./utility-functions/utils"

renderPage();

function renderPage() {

    addDonut();
  
}

function addDonut() {
  const addDonut = document.querySelector('#makeDonut_button');


  addDonut.addEventListener('click', () => {
    const donuts = new DonutMaker(0, 0, 0, false);
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

const addDonutMultiplier = document.createElement('button');
addDonutMultiplier.innerText = 'Multiply Donuts';

donutInfoSection.appendChild(addDonutMultiplier);

donutList.appendChild(donutInfoSection);

addDonutMultiplier.addEventListener('click', () => {
  donuts.addDonutMultiplier();

  displayDonutStats(donutInfoPara, donuts);

});

const addAutoClicker = document.createElement('button');
addAutoClicker.innerText = 'AutoClicker';

donutInfoSection.appendChild(addAutoClicker);

donutList.appendChild(donutInfoSection);

addAutoClicker.addEventListener('click', () => {
  donuts.addAutoClicker();

  displayDonutStats(donutInfoPara, donuts);

});

setInterval(() => {
  if (donuts.isAutoClickerActivated == true) {
    console.log('Firing');
    donuts.addDonut();
    displayDonutStats(donutInfoPara, donuts);
  }
}, 1000);

});

}
