//this in global context
console.log("This is Global Context",this);


//'this' in regular function context
function whatThis(){
    console.log("This is functional context",this)
}

// whatThis()

// 'this' in arrow function context
const thisInArrowFunc = () => {
    console.log("This is arrow function context: ",this); 
}

thisInArrowFunc() 
// arrow fucntion doesn't have their own defined "this" but why?
// arrow function inherit the 'this' value form the enclosing execution context?



// "this" in object's method context
const age = 25;

const person = {
    name: "Amdadul Islam", 
    age: 23,
    calculateBirthday: function() {
        console.log("This is object's method context: ", this.age);
    },

    constructor: function(){
        console.log(this);
    }
}


// if I use age js will look for any variable named age. if I use this.age js will look for age in the present objs

person.calculateBirthday()
person.constructor() // referes to the newly created intances


const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", function(){
    console.log("This is event handler context: ",this)
});

