let writeOutput = function(text)
{
    document.write(`<h1>${text}</h1>`)
}

writeOutput("Done!");

let dog = {
    name: "Snoopy",
    numLegs: 4,
    sayNumLegs: function() {
        //return "This dog is called " + dog.name + " and it has " + dog.numLegs + " legs";
        //TEMPLATE STRINGS (o mesmo que o que está em cima)
        return `This dog is called ${this.name} and it has ${dog.numLegs} legs`;
    }
};

writeOutput(dog.name);
writeOutput(dog.sayNumLegs());


// var é público
// let é 


//---------------------------------------------------------


//Construtor de Cães!
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    this.sayNumLegs = function() {
        return `This dog has ${this.numLegs} legs`;
    }
}

let doggy = new Dog("Snoopy", "Black and White");
let terrier = new Dog("Fox", "Brown");

writeOutput(doggy.name);
writeOutput(terrier.name);

//---------------------------------------------------------

//Construtor de Casas!
function House(numOfBedrooms) {
    this.numOfBedrooms = numOfBedrooms;
}

let myHouse = new House(2);
writeOutput(myHouse instanceof House);

//----------------------------------------------------------

//Construtor de Passaralhos!

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let yellow_bird = new Bird("Tweety");

//verificar que propriedades tem
let ownProperties = [];

for (let property in yellow_bird) {
    if(yellow_bird.hasOwnProperty(property)) {
        ownProperties.push(property);
    }
}

writeOutput(ownProperties); 

//---------------------------------------------------------

//todos os "Objects" que se criam pertencem à classe "Object"
//e são um dos seus "Prototypes", logo
//quando um dos atributos de certo Prototype é GERAL
//pode-se declarar em separado dos atributos que lhe são únicos

function Dogge(name) {
    this.name = name;
} //o nome de um cão é único a esse cão

Dogge.prototype.numLegs = 4; //mas geralmente todos os cães têm 4 patas 
Dogge.prototype.eat = function() {
    return "nom nom";
}
Dogge.prototype.describe = function() {
    return `Hello, my name is ${this.name} and I have ${this.numLegs} legs`;
}

let scooby = new Dogge("Scooby Doo");
writeOutput(scooby.describe());

let doggo = new Dogge("Snoopy");
writeOutput(doggo.numLegs);

//verifica se o seu construtor/protótipo é x
function isADogge(barkingBeast) {
    return barkingBeast.constructor === Dogge;
}

let snoopy = new Dogge("Snoopy");
writeOutput(isADogge(snoopy));