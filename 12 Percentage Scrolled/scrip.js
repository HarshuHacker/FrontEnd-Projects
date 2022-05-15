// var add = (function () 
// {
//     var counter = 0;
//     console.log("Counter : ",counter)
//     return function () 
//     {
//       counter += 1; 
//       return counter
//     }
// })();    
// console.log(add());
// console.log(add());
// console.log(add());


// function Adder(x) 
// {
//     return function(y) 
//     {
//       return x - y;
//     };
// }
// var add5 = Adder(5);
// var add10 = Adder(10);
// console.log(add5(7));
// console.log(add10(2));

// var arguments = [1, 2, 3];
// var arr = () => {console.log(arguments[2])};
// arr();
// function foo(n) {
//   var f = () => {console.log(arguments[0])
//       arguments[0] + n} 
//   return f();
// }
// console.log(foo(3));   

// var obj = {"hi":2};
// function A() 
// { 
//   return obj; 
// }
// function B() 
// { 
//   return obj; 
// }
// console.log( new A(),new B() );

// function bike() 
// {
//   console.log(this.name);
// }
// var name = "Ninja";
// bike();

// function Person(age) 
// {
// this.age = age;
// }
// var p1 = new Person();
// console.log(Person.hasOwnProperty("name"));

class Person 
{
  constructor(name) 
  {
      this.name = name;
  }
  get name() 
  {
      return this._name;
  }
  set name(value) 
  {
      this._name = value;
  }
}
var person = new Person("James");
console.log(person.name)

// var add = (function () 
// {
//   var counter = 0;
//   return function () {counter += 1; return counter}
// })();    
// add()
// console.log(add());
// add()
// console.log(add());

// const object1 = new Object();
// object1.property1 = 42;
// console.log(typeof(object1));