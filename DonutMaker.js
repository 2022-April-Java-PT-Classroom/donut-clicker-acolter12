class DonutMaker {

    constructor(numDonuts, numAutoClickers, numDonutMultipliers) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numDonutMultipliers = numDonutMultipliers;
    }

    addDonut() {
        this.numDonuts += 1;
        if(this.numAutoClickers >=1) {
           this.numDonuts += this.numAutoClickers;
        }
    }

    addAutoClicker() {
        let autoClickerCost = 100;
        for(let i = 0; i < this.numAutoClickers; i++){
            autoClickerCost += autoClickerCost * .10;
        }
        if(this.numDonuts >= 100) {
        this.numDonuts -= autoClickerCost;
        this.numAutoClickers += 1;
        } 
    }

    addDonutMultiplier() {
        let donutMultiplierCost = 10;
        for(let i = 0; i < this.numDonutMultipliers; i++) {
            donutMultiplierCost += donutMultiplierCost * .10;
        }
        if(this.numDonuts >= 10) {
        this.numDonuts -= donutMultiplierCost;
        this.numDonutMultipliers += 1;
        }
    }

}



export default DonutMaker;