// simple classes in ts or say typescript 

class Person {
    name: string
    email: string
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

const user = new Person('Haseeb', 'h@ai.com');


// now lets get into some modifiers in ts 

// Everthing that you dont mark as a private or something else its by default is public in class

class Car {
    model: string
    brand: string
    private _price = 989
    private readonly year: number
    constructor(brand: string, model: string) {
        this.brand = brand
        this.model = model
        this.year = 2024
    }
    // Getters And Setters
    get carDetails(): string {
        return `Your Car Brand is ${this.brand} Having a model ${this.model}`;
    }

    get carPrice(): number {
        return this._price;
    }

    set newPrice(price: number) {
        this._price = price;
    }

}


const carObj = new Car('Mustang', "E901");

// Inheritance


class Vehical extends Car {
    numberOfSeats: number = 4

    getSeat(seat: number): number {
        return this.numberOfSeats = seat
    }
}
const vehObj = new Vehical('Mustang', "E901");
vehObj.getSeat(2)

console.log(vehObj)


export { }