export const displayDonutStats = (element, object) => {
    element.innerText = 'Donuts: ' + object.numDonuts + ' Auto CLickers: ' + object.numAutoCLickers +
        ' Multipliers: ' + object.numDonutMultipliers;
}