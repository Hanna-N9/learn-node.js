//------------------------------------------------------------ Introduction

/* Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime”
converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute. */

//---- (Node.js is already installed) so type node -v in the terminal to check the version of Node

//------------------------------------------------------------ The Node REPL

/* REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: 
a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and 
the print state where the program prints out its evaluation to a console. Then it loops through these states again. */

// Installing Node comes with a built-in JavaScript REPL. To access the REPL is to type the command node into the terminal and hit enter.
// A > character will show up in the terminal, indicating the REPL is running and prompting your input. The Node REPL will evaluate your
// input line by line.
// To type multiple lines and then have them evaluated at once is to type .editor while in the REPL

/* REPLs are powerful tools for calculations, learning, and development, allowing exploration of language features with immediate feedback.
The Node environment provides a global object containing Node-specific properties and methods, enhancing functionality beyond standard
JavaScript capabilities. */

//---- To do to try out the Node REPL and explore the Node global object

//---- Type node in the terminal and press enter to enter the Node REPL
//---- To access global is to type global which bring huge contents because of global.process object
//---- So to check out an easier-to-read list of the properties on the global object is to type Object.keys(global)
/* The global object contains numerous valuable properties and methods that are rarely modified. However, since the global object is
essentially a regular JavaScript object, we have the flexibility to customize it further if needed. For instance, we could 
--- Add a new property like global.cat = 'meow!' to extend its functionality then print or return the property by typing 
console.log(global.cat) */
