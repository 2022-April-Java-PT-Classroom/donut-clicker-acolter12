class DonutMaker {

    constructor(numDonuts, numAutoClickers, numDonutMultipliers, isAutoClickerActivated) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numDonutMultipliers = numDonutMultipliers;
        this.isAutoClickerActivated = isAutoClickerActivated;
    }
    

    addDonut() {
        if(this.numAutoClickers >= 1 && this.numDonutMultipliers >=1) {
            this.numDonuts += Math.pow(1.2, this.numDonutMultipliers) +this.numAutoClickers;
            this.isAutoClickerActivated = true;
            
        }else if(this.numAutoClickers >=1) {
            this.numDonuts += 1;
           this.numDonuts += this.numAutoClickers;
           this.isAutoClickerActivated = true;

        } else if(this.numDonutMultipliers >= 1) {
           this.numDonuts += Math.pow(1.2, this.numDonutMultipliers);

        } else if (this.numDonuts += 1);
   
    }

    addAutoClicker() {
        let autoClickerCost = 100;

        for(let i = 0; i < this.numAutoClickers; i++){
            autoClickerCost += autoClickerCost * .10;
        }

        if(this.numDonuts >= autoClickerCost) {
        this.numDonuts -= autoClickerCost;
        this.numAutoClickers += 1;
        } 
    }

    activateAutoClicker() {
        this.isAutoClickerActivated = true;
    }

    addDonutMultiplier() {
        let donutMultiplierCost = 10;
        for(let i = 0; i < this.numDonutMultipliers; i++) {
            donutMultiplierCost += donutMultiplierCost * .10;
        }
        if(this.numDonuts >= donutMultiplierCost) {
        this.numDonuts -= donutMultiplierCost;
        this.numDonutMultipliers += 1;
        }
    }

}



export default DonutMaker;