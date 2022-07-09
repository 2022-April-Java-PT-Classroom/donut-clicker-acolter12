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
// if(donuts.numDonuts > 0) {
//   addDonutMultiplier.disabled = false;
// } else  {
//   addDonutMultiplier.disabled = true;
// }

addDonutMultiplier.addEventListener('click', () => {
  // if(donuts.numDonuts < 10) {
  //   addDonutMultiplier.disabled = true;
  // } else if (donuts.numDonuts > 10) {
  //   addDonutMultiplier.disabled = false;
  // }

  if(donuts.numDonuts < 10) {
    alert("You don't have enough to buy this yet! Keep making donuts!")
  }

  donuts.addDonutMultiplier();

  displayDonutStats(donutInfoPara, donuts);

});

const addAutoClicker = document.createElement('button');
addAutoClicker.innerText = 'AutoClicker';

donutInfoSection.appendChild(addAutoClicker);

donutList.appendChild(donutInfoSection);

addAutoClicker.addEventListener('click', () => {
  if(donuts.numDonuts < 100) {
    alert("You don't have enough to buy this yet! Keep making donuts!")
  }
  donuts.addAutoClicker();

  displayDonutStats(donutInfoPara, donuts);

  setInterval(function() {
    if (donuts.isAutoClickerActivated == true) {
      donuts.addDonut();
    }
  }, 1000);

});

});

}
