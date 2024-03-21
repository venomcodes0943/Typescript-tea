interface Person {
    email: string,
    userId: number,
    greet: () => string
    loginCoupen(numberOfCoupen: number): number
}

const person1: Person = {
    email: "john@doe.com",
    userId: 123,
    greet: () => {
        return "Hello User"
    },

    // Implementing the method from the interface
    loginCoupen: (coupen: 12) => {
        return coupen;
    }
};

// Interface Can Be Inherit From Another Interface
interface user extends Person {
    role: string
}

const newUser: user = {
    ...person1,
    role: 'admin'

}
console.log(newUser);


export { }