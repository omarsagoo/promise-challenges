/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * Step 1 - logged before the snooze function is called.
 * Step3 - logs asynchronously as the snooze function runs. 
 * the setTimeout function causes the snooze function to take 2 seconds.
 * Step 2 - Takes  2 seconds to run before it prints out to the terminal.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * Step 1
 * Step 3
 * Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * Same order because of asynchronous code. it takes a tiny bit longer for the funciton to run compared to the log
 * Yes I was correct.
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

