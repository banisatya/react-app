//arrow function example
function Calculate(a, b) {
    return a + b;
  }
  const calculate2 = (a, b) => a + b;
  const calculate3 = (a) => a + 5;
  
  //arrow map
  const cities = ["Bangalore", "Hyderabad", "Delhi", "Mumbai", "Pune"];
  const cities2 = cities.map((city) => city + " city");
  
  //Object destructuring
  const address = {
    address1: "Six Mile",
    address2: "Guwahati",
    district: "Kamrup",
    state: "Assam",
  };
  const { address1, district } = address;
  console.log(district);

//array destructuring
const add=["Delhi", "Bangalore", "Chennai"];
const [firstName, lastName, add1]=add;
console.log(firstName, lastName, add1);
  
  //this keyword
  const person = {
    name: "bani",
    walk() {
      console.log(this);
    },
  };
  person.walk(); //this will display person object
  const walk = person.walk;
  walk(); //Here the walk is called without object, so it will display the global object which is
  // window in this case
  
  //Spread operator
  //Example 1
  const first = [1, 2, 3];
  const second = [4, 5];
  const combined = first.concat(second);
  const combined2 = [...first, ...second];
  
  //Example 2
  const firstClass = { name: "Bani" };
  const secondClass = { job: "Private" };
  const combined3 = { ...firstClass, ...secondClass, location: "Australia" };
  //Example 3 this can be used to clone an object
  const cloned = { ...firstClass };
  
  //Classes
  class Person {
    constructor(name) {
      this.name = name;
    }
    walk() {
      console.log(this.name + " walks");
    }
  }
  // const person1 = new Person("Bani");
  // person1.walk();
  
  //Inheritence
  class Teacher extends Person {
    constructor(name, degree) {
      super(name);
    }
    teach() {
      console.log("Teacher teaches too!");
    }
  }
  // const teacher1 = new Teacher("Das", "BE");
  // teacher1.walk();
  // teacher1.teach();
  
  //Importing a class
  //const teacherClass1 = new TeacherClass("Smith", "BA");
  //console.log(teacherClass1);

  //var and let
  function varScoping() {
	  var x = 1;
	  if (true) {
		var x = 2;
		console.log(x); // will print 2
	  }
	  console.log(x); // will print 2
	}

	function letScoping() {
	  let x = 1;
	  if (true) {
		let x = 2;
		console.log(x); // will print 2
	  }
	  console.log(x); // will print 1
	}

  function nestedScopeTest() {
    if (true) {
      var functionVariable = 1;
      let blockVariable = 2;
  
      console.log(functionVariable); // will print 1
      console.log(blockVariable); // will print 2
  
      if (true) {
        console.log(functionVariable); // will print 1
        console.log(blockVariable); // will print 2
      }
    }
  
    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will throw an error
  }
  
  