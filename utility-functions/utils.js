export const displayDonutStats = (element, object) => {
    element.innerText = 'Donuts: ' + object.numDonuts + ' Auto Clickers: ' + object.numAutoClickers +
        ' Multipliers: ' + object.numDonutMultipliers + ' is Auto Clicker Activated? ' + object.isAutoClickerActivated;
}