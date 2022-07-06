import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

    test("should be able to add a donut and retrive the total count", () => {
        //Arrange
        const underTest = new DonutMaker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add a donut an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100, 0);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () =>{
        const underTest = new DonutMaker(99, 0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test("cost of second autoclicker should rise by 10 percent", () =>{
        const underTest = new DonutMaker(110, 1);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(2);
    });

    test("cost of third autoclicker should cost 121 donuts", () =>{
        const underTest = new DonutMaker(121, 2);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(3);
    });

    test("when autoclicker is activated, the total amount of donuts added will increase by the number of autoclickers", () =>{
        const underTest = new DonutMaker(100, 2);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(103);
    });

    test("should be able to purchase a donut multiplier with 10 donuts", () => {
        const underTest = new DonutMaker(10,0,0);
        underTest.addDonutMultiplier();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numDonutMultipliers).toEqual(1);
    })

});