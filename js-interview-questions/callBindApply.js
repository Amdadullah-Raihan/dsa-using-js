function sayHello() {
  console.log("Hello,", this.name);
}

sayHello();

const person = { name: "Raihan" };
sayHello.call(person);

function sayHello2(name, age) {
  console.log("apply(): Hello ," + this.name, "I am " + name + "I am " + age);
}

sayHello2.apply(person, ["Amdad", 23]);

function sayHello3(name) {
  console.log("Hello,", this.name, "my name is " + name);
}

const greetPerson = sayHello3.bind(person, ["Amdad"]);

greetPerson();
