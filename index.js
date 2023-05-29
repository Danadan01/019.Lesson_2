class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getPersonInfo() {
    return `${this.name}, ${this.age} y.o.`; 
  }
}

class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  newOwner(person) {
    if(person.age >= 18) {
      this.owner = person;
    } else {
      console.log("To become an owner age must be more than 18");
    }
  }

  getCarInfo() {
    if(this.owner) {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Owner: ${this.owner.getPersonInfo()}`);
    } else {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Owner: No owner yet!`);
    }
  }
}



let person1 = new Person("Nick", 22);
let person2 = new Person("Kris", 17);

console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());

let car1 = new Car("Honda", "Civic", 1992, "Blue");
let car2 = new Car("Toyota", "Corolla", 2014, "Black");


car1.newOwner(person1);
car1.getCarInfo();

car2.newOwner(person2);
car2.getCarInfo();
