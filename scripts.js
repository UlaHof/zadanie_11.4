function Phone(brand, price, color, releaseYear, screenSize, weight) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.releaseYear = releaseYear;
    this.screenSize = screenSize;
    this.weight = weight;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.checkIfOld = function() {
    if (this.releaseYear <= 2015) {
        console.log("The phone was released in or before 2015, and the release date is " + this.releaseYear + ".");
    }
    else {
        console.log("The phone was released after 2015, and the release date is " + this.releaseYear + ".");
    }
}

Phone.prototype.checkIfBig = function() {
    if  (this.screenSize > 5) {
        console.log("The phone is classified as big with screen size equal to " + this.screenSize + " inches.");
    }
    else {
        console.log("The phone is classified as small with screen size equal to " + this.screenSize + " inches.");
    }
}

var SamsungGalaxyS6 = new Phone ("Samsung", 1500, "white", 2016, 4.9, 162);
var iPhone6S = new Phone ("Apple", 2250, "white", 2015, 5.6, 160);
var OnePlusOne = new Phone("OnePlus", 1200, "black", 2014, 5.5, 165);

iPhone6S.printInfo();
OnePlusOne.printInfo();
SamsungGalaxyS6.printInfo();

iPhone6S.checkIfOld();
SamsungGalaxyS6.checkIfOld();

SamsungGalaxyS6.checkIfBig();
OnePlusOne.checkIfBig();
