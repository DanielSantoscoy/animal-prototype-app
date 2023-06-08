// Animal constructor
function Animal(name) {
    this.name = name;
  }
  
  // Method for Animal
  Animal.prototype.sound = function() {
    var soundText = this.name + " makes a sound";
    displayResult(soundText);
  };
  
  // Dog constructor
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Set Dog's prototype to Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Method for Dog
  Dog.prototype.bark = function() {
    var barkText = this.name + " barks";
    displayResult(barkText);
  };
  
  // Cat constructor
  function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
  }
  
  // Set Cat's prototype to Animal's prototype
  Cat.prototype = Object.create(Animal.prototype);
  
  // Method for Cat
  Cat.prototype.meow = function() {
    var meowText = this.name + " meows";
    displayResult(meowText);
  };
  
  // Lion constructor
  function Lion(name, age) {
    Animal.call(this, name);
    this.age = age;
  }
  
  // Set Lion's prototype to Animal's prototype
  Lion.prototype = Object.create(Animal.prototype);
  
  // Method for Lion
  Lion.prototype.roar = function() {
    var roarText = this.name + " roars";
    displayResult(roarText);
  };
  
  // Creating instances of animals
  var dog = new Dog("Max", "Labrador");
  var cat = new Cat("Whiskers", "Gray");
  var lion = new Lion("Simba", 5);
  
  // Function to display the result on the webpage
  function displayResult(text) {
    var resultElement = document.createElement("p");
    resultElement.textContent = text;
    document.body.appendChild(resultElement);
  }
  