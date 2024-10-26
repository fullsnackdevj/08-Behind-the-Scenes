'use strict';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // regular function call, the 'this' keyword is 'undefined'
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); //arrow function doest get its 'this' keyword.

jonas.calcAge(1991);

// never use and arrow function in calling a method
