class DonutMaker {

    constructor(numDonuts, numAutoClickers, numDonutMultipliers) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numDonutMultipliers = numDonutMultipliers;
    }
    

    addDonut() {
        if(this.numAutoClickers >= 1 && this.numDonutMultipliers >=1) {
            this.numDonuts += Math.pow(1.2, this.numDonutMultipliers) +this.numAutoClickers;
            
        }else if(this.numAutoClickers >=1) {
            this.numDonuts += 1;
           this.numDonuts += this.numAutoClickers;

        } else if(this.numDonutMultipliers >= 1) {
           this.numDonuts += Math.pow(1.2, this.numDonutMultipliers);

        } else if (this.numDonuts += 1);
   
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