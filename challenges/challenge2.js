/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 *  Hello there, Ducky
 * MAKE SCHOOL IS AWESOME!!!
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 *      It says that it recived an error and the name must be a string.
 *      It will not run uppercaser()
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 *    It will only run the greet function. If the greet function fails, it will not run the uppercaser function
 * 
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *******************************************************************************
 */

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the spaced version of a string.
 * @param {*} str The string to uppercase.
 */
function spacer(str) {
    return new Promise(function(res, rej) {
      setTimeout(function() {
        if (typeof str === 'string') { 
          res(str.split("").join(" "));
        } else {
          rej('Name must be a string!');
        }
      }, 1000);
    })
}


/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

name = "Ducky"
my_str = "Makeschool is awesome!!!"

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(uppercaserResult)
    }).then(result => {
        console.log(result)
    }).catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
