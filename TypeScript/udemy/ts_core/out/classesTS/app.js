'use strict';
var classesTS;
(function (classesTS) {
  class Person {
    constructor(name, username) {
      this.username = username;
      this.age = 27;
      this.name = name;
    }

    printAge() {
      console.log(this.age);
      this.setType('Old Guy');
    }

    setType(type) {
      this.type = type;
      console.log(this.type);
    }
  }

  const person = new Person('Max', 'max');
  console.log(person.name, person.username);
  person.printAge();
  // person.setType("Cool guy"); // Won't work with private method
  // Inheritance
  class Max extends Person {
    // name = "Max";
    constructor(username) {
      super('Max', username);
      this.age = 31;
    }
  }

  const max = new Max('max');
  console.log(max);

  // Getters & Setters
  class Plant {
    constructor() {
      this._species = 'Default';
    }

    get species() {
      return this._species;
    }

    set species(value) {
      if (value.length > 3) {
        this._species = value;
      } else {
        this._species = 'Default';
      }
    }
  }

  let plant = new Plant();
  console.log(plant.species);
  plant.species = 'AB';
  console.log(plant.species);
  plant.species = 'Green Plant';
  console.log(plant.species);

  // Static Properties & Methods
  class Helpers {
    static calcCircumference(diameter) {
      return this.PI * diameter;
    }
  }

  Helpers.PI = 3.14;
  console.log(2 * Helpers.PI);
  console.log(Helpers.calcCircumference(8));

  // Abstract Classes
  class Project {
    constructor() {
      this.projectName = 'Default';
      this.budget = 1000;
    }

    calcBudget() {
      return this.budget * 2;
    }
  }

  class ITProject extends Project {
    changeName(name) {
      this.projectName = name;
    }
  }

  let newProject = new ITProject();
  console.log(newProject);
  newProject.changeName('Super IT Project');
  console.log(newProject);
})(classesTS || (classesTS = {}));
//# sourceMappingURL=app.js.map
