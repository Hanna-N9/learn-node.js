//------------------------------------------------------------ Introduction

/* Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime”
converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute. */

//---- (Node.js is already installed) so type node -v in the terminal to check the version of Node

//------------------------------------------------------------ The Node REPL

/* REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: 
a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and 
the print state where the program prints out its evaluation to a console. Then it loops through these states again. 

- Installing Node comes with a built-in JavaScript REPL. To access the REPL is to type the command node into the terminal and hit enter.
A '>' character will show up in the terminal, indicating the REPL is running and prompting your input. The Node REPL will evaluate your 
input line by line.
- To type multiple lines and then have them evaluated at once is to type .editor while in the REPL.

REPLs are powerful tools for calculations, learning, and development, allowing exploration of language features with immediate feedback.
The Node environment provides a global object containing Node-specific properties and methods, enhancing functionality beyond standard
JavaScript capabilities. */

//----// To do to try out the Node REPL and explore the Node global object

//---- Type node in the terminal and press enter to enter the Node REPL
//---- To access global is to type global which bring huge contents because of global.process object
//---- So to check out an easier-to-read list of the properties on the global object is to type Object.keys(global)

/* 
The global object contains numerous valuable properties and methods that are rarely modified. However, since the global object is
essentially a regular JavaScript object, we have the flexibility to customize it further if needed. For instance, we could Add a new 
property //--- like global.cat = 'meow!' to extend its functionality then print or return the property by typing console.log(global.cat).
 */

//------------------------------------------------------------ Running a Program with Node

/* Node was designed for server-side web development and has thoughtful functionality for that end. At its most simple, however, it 
allows us to run JavaScript programs on our own computers instead of just in the browser’s console or embedded in HTML. */

//----// Explore some of the functionality and properties specific to the Node environment

/* To execute the code is to navigate to to the directory that contains the <specific file>.js with codes that you wrote there and 
type the command node <specific file with written codes>.js into the terminal. */

console.log("Hello World");

//----// There are a number of variables assigned the string.

let noun1 = "cat";
let adjective = "silly";
let noun2 = "banana";
let verb = "play";
let noun3 = "elephant";

console.log(
  `The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`,
);

//---- Type node lesson.js (this directory's file) to run the program to see the output

//------------------------------------------------------------ Core Modules

// Modularity
/* 
- Modularity is a software design technique where one program has distinct parts, each providing a single piece of the overall 
  functionality. These separate modules come together to build a cohesive whole.
- Doc on modules: As the program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, modules 
  can be used to separate codes in separate files as per their functionality. This makes the code more organized and easier to maintain.
- A module is a file that contains code that performs a specific task. A module may contain variables, functions, classes, etc.

- Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns 
  into manageable chunks. Essentially, a module is a collection of code located in a file.
- Instead of having an entire program located in a single file, code is organized into separate files based on the concerns they address. 
  - These files can then be included in other files by using the require() function. 
*/

// Core Modules
/* 
- Node.js has several built-in modules to perform common tasks efficiently. These are known as the core modules. Core modules are built-in 
  modules that come pre-installed with Node.js. The core modules are defined within Node.js’s source code and are located in the lib/ 
  folder. Core modules can be required by passing a string with the name of the module into the require() function:

// Require in the 'events' core module:
const events = require('events');

- The example above shows how the events module is required into a file and stored in an events variable.
- The events module is a Node.js core module that provides key function for working with events.
*/

/* Node.js has several core modules. Some core modules are actually used inside other core modules. For instance, the util module can be 
used in the console module to format messages. We’ll cover these two modules in this lesson (util & console), as well as two other commonly
used core modules: process and os. */

//----// Listing all of the core modules built into Node.js

//---- To enter the Node REPL is to type node in the terminal
//---- Once in the REPL, type this command to see a ist of core modules: require('module').builtinModules

// You will see there are many modules already built into Node.js and ready to be utilized.

//------------------------------------------------------------ The Console Module

// One of the most commonly used Node.js core modules is the console module.

/* 
In Node.js, the terminal is used to send and receive text feedback to and from a program, often for debugging purposes. This may sound 
familiar to how we use the console in the web browser. That’s because in Node.js, the built-in console module exports a global console 
object that gives the terminal similar functionality. The console object provides many of the same familiar methods such as: 
  - .log() — to print messages to the terminal.
  - .assert() — to print a message to the terminal if the value is falsy.
  - .table() — to print out a table in the terminal from an object or array.

Since console is a global module, its methods can be accessed from anywhere, and the require() function is not necessary.
*/

//----// Explore with the console module

// Here are an array of pets, named petsArray.
const petsArray = ["dog", "cat", "bird", "monkey"];

//---- Use console.log() to print petsArray to the terminal.
console.log(petsArray);

//---- Type node <this file name> in the terminal

//---- Use the console.table() method to print petsArray to the terminal as a table
console.table(petsArray);

//---- Type node <this file name> in the terminal

//---- Inside the console.assert() method, check if the length of petsArray is greater than 5.
console.assert(petsArray.length > 5);

//---- Type node <this file name> in the terminal

//------------------------------------------------------------ The Process Module

/* 
- In computer science, a process is the instance of a computer program that is being executed. Open Task Manager if on a Windows machine or 
Activity Monitor from a Mac to to see information about the various processes running on your computer currently.
- Node has a global process object with useful methods and information about the current process. 
*/

/* 
- The process.env property is an object which stores and controls information about the environment in which the process is currently 
running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current 
process is located.
 - It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase
   might perform different tasks than when it’s live to users. We could store this information on the process.env.
    - One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

     if (process.env.NODE_ENV === 'development'){
        console.log('Testing! Testing! Does everything work?');
     }
 */

/*      
- The process.memoryUsage() returns information on the CPU demands of the current process. It returns a property that looks similar to this:
     
    { rss: 26247168,
      heapTotal: 5767168,
      heapUsed: 3573032,
      external: 8772 
    } 

- Heap can mean different things in different contexts: a heap can refer to a specific data structure or to a block of computer memory.
  The process.memoryUsage().heapUsed method will return a number representing how many bytes of memory the current process is using.
*/

/*      
- The process.argv property holds an array of command line values provided when the current process was initiated.
  - The first element in the array is the absolute path to Node, which ran the process.
  - The second element in the array is the path to the file that’s running. 
  - The following elements will be any command line arguments provided when the process was initiated.
    - Command line arguments are separated from one another with spaces.
  
  node myProgram.js testing several features

  console.log(process.argv[3]); // Prints 'several'

*/

/* A few of the properties of the process object are covered so there are more others to check out to learn and explore its other methods
and properties. */

//----// Practice using the process object!

/* We want the program to store the starting amount of memory used (heapUsed), perform an operation, and then compare the final amount of
memory used to the original amount. */

/* initialMemory variable could be assigned the value of the heapUsed property on the object returned from invoking the 
process.memoryUsage() method using dot notation*/

//---- To access the value of heapUsed is to type this command in Node REPL: process.memoryUsage().heapUsed

let initialMemory = process.memoryUsage().heapUsed;

// We want the user of the program to be able to fill in their own word when they run the program.

/* When a user initiates the program with an additional command line argument, vaiable word will be assigned that value. For example, running 
the program with the command: node lesson.js Codecademy would result in word being assigned the value 'Codecademy'. */

//---- When initiating the program with the command, node lesson.js Codecademy, the third element is string 'Codecademy'. Here is the
// variable word that is assign to this third element in the array

let word = process.argv[2];

// Codes from the file (nothing added):

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`,
);

//---- Type this command in the terminal, node <this file's name>.js by any word you like

//------------------------------------------------------------ The OS Module

/* 
- When developing or debugging an app, it can be helpful to have information about the computer, operating system, and network on which the
program is running. Node.js as a JavaScript runtime allows code to be execut eoutside of the browser hence, allowing the programmers to 
get access to much of this information through the os core module.
- Unlike process and console, the os module is not global and needs to be included into the file in order to gain access to its methods. 
- To can include the os module into your file by typing: 

   const os = require('os'); 
*/

/* 
With the os module saved to the os variable, you can call methods like:

os.type() — to return the computer’s operating system.
os.arch() — to return the operating system CPU architecture.
os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
os.homedir() — to return the current user’s home directory.
os.hostname() — to return the hostname of the operating system.
os.uptime() — to return the system uptime, in seconds.
*/

//----// Explore the os module (down below return the information learning environment hosted by Codecademy)

//---- Using the const keyword, declare a variable, os, that stores the os module.
const os = require("os");

//---- Use const to create an empty object named server
//---- Inside server, add the keys: type, architecture, and uptime Store their respective values using methods from the os module.
const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
};

//----  console.log() the server object and run the program by typing node <this file's name>.js in the terminal.
console.log(server);
