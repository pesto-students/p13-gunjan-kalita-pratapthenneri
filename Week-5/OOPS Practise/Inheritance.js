class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

const myCar = new Car("Toyota", "Camry", 2022, "Blue", 5);
const rideCar = new RideShareCar("Honda", "Civic", 2020, "Red", 4, true);

myCar.drive();
console.log(myCar.numSeats);
console.log(rideCar.isAvailable);
