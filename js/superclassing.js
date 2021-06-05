let writeOutput = function(text)
{
    document.write(`<h1>${text}</h1>`)
}

writeOutput("<h3>Mammal</h3>");

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

function Bear(size, color) {
    this.size = size;
    this.color = color;
}

function Dog(name, color) {
    this.name = name;
    this.color = color;
}

function Mammal() {}

Mammal.prototype = {
    constructor: Mammal,
    eat: function() {
        return "nom nom";
    },
    sleep: function() {
        return "ZZZzzzzzz"
    },
    speak: function() {
        return "I have no voice...";
    }
}

Cat.prototype = Object.create(Mammal.prototype);
Bear.prototype = Object.create(Mammal.prototype);
Dog.prototype = Object.create(Mammal.prototype);

Cat.prototype.constructor = Cat;
Bear.prototype.constructor = Bear;
Dog.prototype.constructor = Dog;

Cat.prototype.speak = function() {return "Miau!";}
Dog.prototype.speak = function() {return "Woof!";}

let pussy = new Cat("Silvester", "Black and White");
writeOutput(pussy instanceof Cat);
writeOutput(pussy instanceof Bear);
writeOutput(pussy.eat());
writeOutput(pussy.speak());

let snoopy = new Dog("Snoopy", "White and Black");
writeOutput(snoopy.speak());

writeOutput("<h3>Birds</h3>");

//---------------------------------------------------

function Bird() {
    this.energy = 100;
}

Bird.prototype = {
    energy: 100,
    eat: function(amount) {
        this.energy += amount;
    },
    speak: function() {
        return "Piu!";
    },
    fly: function() {
        return "Look at me, i'm flying!!!";
    }
}

function Dove() {
    this.energy = 30;
}

Dove.prototype = Object.create(Bird.prototype);
Dove.prototype.constructor = Dove;

function Penguin() {
    this.energy = 200;
}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
    return "I'm a flightless bird (but I'm a fucking heck of a swimmer m8!)";
}

let penguin = new Penguin();
let dove = new Dove;

let birds = [penguin, dove];
for (let i = 0; i < birds.length; i++) {
    writeOutput(birds[i].fly());
}

//-----------------------------------------------------------

writeOutput("<h3>Let's use actual classes now...</h3>");

class Human {
    constructor(name) {
        this.name = name;
    }
    iq() {
        return "Not wanting to be pretentious, but I'm kinda smart!";
    }
}

class Retarded extends Human {
    constructor(name) {
        super(name);
    }
    iq() {
        return "nldoavhkbkfhavblhba";
    }
}

let alberto = new Retarded("Alberto");
writeOutput(alberto.iq());