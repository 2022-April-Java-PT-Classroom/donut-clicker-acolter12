class DonutMaker {

    constructor(numDonuts, numAutoClickers) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
    }

    addDonut() {
        this.numDonuts += 1;
    }

    addAutoClicker() {
        if(this.numDonuts >= 100) {
        this.numDonuts -= 100;
        this.numAutoClickers += 1;
    }
}

}

export default DonutMaker;