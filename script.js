// Define the Animal class
class Animal {
    private _species: string;

    // Constructor to initialize species
    constructor(species: string) {
        this._species = species;
    }

    // Getter for species
    get species(): string {
        return this._species;
    }

    // Method to make a sound
    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
    // Method to purr
    purr(): void {
        console.log("purr");
    }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
    // Method to bark
    bark(): void {
        console.log("woof");
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();     // Output: woof
