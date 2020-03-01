class Animal {
    constructor (name){
        this.name = name;
    }
}

class AnimalFactory {
    constructor() {
        this.name = AnimalFactory.animal_names[
            Math.floor(Math.random() * AnimalFactory.animal_names.length)
            ];
    }
    create_animal(name) {
      return new Animal(name ? name : this.name);
    }
}
AnimalFactory.animal_names = [
    "cat", "dog", "mouse", "rat"
];

let animalFactory = new AnimalFactory();
console.log(animalFactory.create_animal());

function User(name) {
    this.name = name;
    this.animal = null;
    this.setAnimal = function (animal) {
        if(animal instanceof Animal){
            this.animal = animal;
        } else {
            //throw new Error("error");
        }
    }
}
let user = new User("Vika");
user.setAnimal(animalFactory.create_animal());
console.log(user);

let user2 =  new User("Igor");
user2.setAnimal(user);
console.log(user2);

let arr1 = [1, -2, 3, 4, -9, 6];

getMaxSubSum =function (arr) {
    let sum = 0;
    let prsum = 0;
    for(let item of arr){
        prsum +=item;
        sum = Math.max(prsum, sum);
        if(prsum < 0){
            prsum =0;
        }
    } return sum;
};

console.log(getMaxSubSum(arr1));


camelize = function (str) {
    str = str.split('-');
    str = str.map(function (item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    str = str.join("");
    console.log(str);
};

camelize("background-color");





