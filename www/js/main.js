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

function Calculator() {
    this.calculate = function (str) {
        let val = str.split(" ");
        if (this.operators.hasOwnProperty(val[1]) && !isNaN(val[0]) && !isNaN(val[2])){
            return this.operators[val[1]](+val[0], +val[2]);
        }
        throw new Error;
    };
    this.addMethod = function (name, func) {
        return this.operators[name] = func;
    };
    this.operators = {
    };
}

let calc = new Calculator;
calc.addMethod("*", function(a, b){return a * b});
calc.addMethod("+", function(a, b){return a + b});
calc.addMethod("-", function(a, b){return a - b});
let result = calc.calculate("30 + 3");

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [vasya, petya, masha];

let names = users.map(function (item) {
    return item.name;
});

let usersMapped1 = users.map(function (item) {
    return {
        id: item.id,
        fullName: item.name + " " + item.surname
    };
});

console.log(usersMapped1);

let vasya1 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr = [ vasya1, petya2, masha3 ];

function sortByAge(users){
    let result = users.sort(function(a, b){
        if( a.age < b.age ){
            return -1;
        }else {
            return 1;
        }
    });
    console.log(result);
    return result;
}

sortByAge(arr);

function getAverageAge(arr){
    let val = 0;
    for(let i =0; i<arr.length; i++){
        val += arr[i].age;
    }
    return val/arr.length;
}
console.log(getAverageAge(arr));

let arr10 = [1, 2, 3];
function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(shuffle(arr10));

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

function wdw(arr) {
    let arr20 =[];
    for(let key of arr){
        if(!arr20.includes(key)){
            arr20.push(key);
        }
    }
    return arr20;
}

console.log(wdw(strings));

function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        let interest = interests.toString();
        if(this.gender == 'female'){
            alert(this.name.first + ' ' + this.name.last + ' is ' +
                this.age + ' years old. She likes ' + interest + '.');
        } else {
            alert(this.name.first + ' ' + this.name.last + ' is ' +
                this.age + ' years old. He likes ' + interest + '.');
        }
    };
}

let user10 = new Person('Vika', 'Bakhturova', 28, 'female', ['animal', "snowbord"]);
let user11 = Object.create(user10);
let user12 = new user10.constructor('Igor', 'Agafonov', 29, 'male', ['cat', "snowbord"]);

Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
};

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function() {
    if(this.gender == 'female'){
        alert('Hello. My name is Ms ' + this.name.last + ', and I teach ' + this.subject + '.');
    } else {
        alert('Hello. My name is Mr ' + this.name.last + ', and I teach ' + this.subject + '.');
    }
};

Teacher.bio = function(){
    alert("cat");
};
let teacher = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

console.log(teacher);

function Student(first, last, age, gender, interests) {
    Person.call(this, first, last, age, gender, interests)
}

Student.prototype.greeting = function() {
    alert ("I\'m " + this.name.first);
};

let student = new Student('Div', 'Griffiths', 20, 'male', ['football', 'dog']);

function Worker(name, surname, rate, days ) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function () {
        return this.rate * this.days;
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getFullName = function () {
        return this.name + " " + this.surname;
    };
    this.setFullName = function (full_name) {
        let array_name = full_name.split(" ");
        if (!array_name[0] || !array_name[1]){
            throw new Error("Invalid full name");
        }
        this.name = full_name.split(" ")[0];
        this.surname = full_name.split(" ")[1];
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);


function MyString() {
    this.reverse = function (str) {
        return str.split("").reverse().join("");
    };
    this.ucFirst =function (str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    };
    this.ucWords = function (str) {
        let a = str.split(" ");
        for (let i = 0; i < a.length; i++){
             a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1)
        }
        return a.join(" ");
    }
}

let str = new MyString();


function Validator() {
    this.isEmail =function (email) {
        if(!email.match(/\w+@\w+\.\w+/g)){
            return false;
        }
        return true;
    };
    this.isDomain = function (domen) {
        if(!domen.match(/\w+\.[n][e][t]/g)){
            return false;
        }
        return true;
    };
    this.isDate = function (date) {
        if(!date.match(/\d\d\.\d\d\.\d\d\d\d/g)){
            return false;
        }
        return true;
    };
}

let validator = new Validator();

function Student(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.getFullName =function () {
        return this.name + " " + this.surname;
    };
    this.getCourse = function () {
        let now_data = getFullYear();
        return now_data - this.year;
    };
}

var student10 = new Student('Иван', 'Иванов', 2017);

let arra20 =[[1, 2, 3], [4, 5, 6], [7,8,9] ];

arra20[1][0];

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(arr) {
    let sum_arr = Object.values(arr);
    let sum_all = 0;
    for (let sal of sum_arr){
        sum_all += sal;
    }
    return sum_all;
}
sumSalaries(salaries);

let user40 = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}
count(user40);

let data_20_02_2012 = new Date(2012, 1, 20);
let data_21_02_2012 = new Date(2012, 1, 21);
let data_22_02_2012 = new Date(2012, 1, 22);
let data_23_02_2012 = new Date(2012, 1, 23);
let data_24_02_2012 = new Date(2012, 1, 24);
let data_25_02_2012 = new Date(2012, 1, 25);
let data_26_02_2012 = new Date(2012, 1, 26);

function getWeekDay(date) {
    let arrWeekDay = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return arrWeekDay[date.getDay()];
}
getWeekDay(data_21_02_2012);

function getLocalDay(date) {
    if (date.getDay() == 0){
        return 7;
    } else {
        return date.getDay();
    }
}
getLocalDay(data_26_02_2012);

function getDateAgo(date, days) {
    let date_1 = new Date(date.getTime() - days * 24 * 3600 * 1000);
    return date_1;
}
getDateAgo(data_21_02_2012, 1);

function getLastDayOfMonth(year, month) {
    let data = new Date(year, month);
    return new Date(data.getTime() - 1 * 24 * 3600 * 1000);
}
getLastDayOfMonth(2012, 2);

function getSecondsToday() {
    let data = new Date();
    return data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds();
}
getSecondsToday();

function getSecondsToTomorrow() {
    let data = new Date();
    return 24 * 3600 - (data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds());
}
getSecondsToTomorrow();


function formatDate(date) {
    let current_date = new Date;
    if(current_date.getTime() - 1000 < date.getTime()){
    } else if (current_date.getTime() - 60 * 1000 < date.getTime()){
        return (current_date.getTime() - date.getTime())/1000;
    } else if (current_date.getTime() - 3600 * 1000 < date.getTime()){
        return (current_date.getTime() - date.getTime())/60000;
    } else {
        return date.toLocaleString().slice(0, -3);
    }

}
formatDate(new Date(new Date - 1096400 * 1000));

function sumTo(n){
    let result = 0;
    for (let i = 0; i <= n; i++){
        result += i;
    } return result;
}

function sumTo1(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo1(n - 1);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(obj) {
    let tmp = obj;
    while (tmp){
        //console.log(tmp.value);
        tmp = tmp.next;
    }
}

printList(list);

function printList1(obj) {
    //console.log(obj.value);
    if(obj.next){
        printList1(obj.next);
    }
}

printList1(list);

function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

function sum(a){
    return function (b) {return b + a};
}

let arr100 = [1, 6, 2, 3, 4, 5, 6, 7];

function inBetween (min, max){
    return function (element) {
        if (element >= min && element <= max) {
            return true;
        }
        return false;
    }
}

function inArray(arr) {
    return function (element) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == element){
                return true;
            }
        }
        return false;
    }
}

console.log(arr100.filter(inArray([1, 6, 2, 10])));

let users1000 = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key_sort) {
    return function (a, b) {
        if (a[key_sort] > b[key_sort]) {
            return 1;
        }
        if (a[key_sort] < b[key_sort]) {
            return -1;
        }        return 0;
    }
}

console.log(users1000.sort(byField('name')));
console.log(users1000.sort(byField('age')));

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        (function (val) {
            var a = val;
            let shooter = function () {
                console.log(a);
            };
            shooters.push(shooter);
            i++;
        })(i);
    }
    return shooters;
}

let army = makeArmy();

console.log(army);
army[5]();
army[7]();


let timerId = setTimeout (function printNumbers(from, to){
    if (from <= to){
        //console.log(from);
        timerId = setTimeout(printNumbers, 1000, ++from, to);
    }
}, 1000, 4, 9);


function timeInterval(from, to) {
    let iii = from;
    let timerId1 = setInterval (function (){
        if (iii = to){
            clearInterval(timerId1);
        }
        console.log(iii);
        iii++;
    }, 1000);
}

timeInterval(4, 9);


















