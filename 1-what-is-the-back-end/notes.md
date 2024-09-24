# The Web Server

- The information comes from a web server and is sent to a client so that a user can interact with a website (regarding Front-End). "A <b>web server</b> is a computer process that listens for incoming information requests over the Internet and sends back responses."
  - So, when a user navigates to a website on their browser, the browser makes a request to the website's web server. Every website has at least one web server.
  - When a client makes a single request on a simple website, the web server receives that request and sends the client a response with the specific details to view the website. This is called a static website (akin to a snapshot of the website, where the files remain static and do not change or move). However, a static website falls short, for example, a user navigating social media who wants access to new content as it’s created.
- <b>Protocol:</b> The format of a request and the resulting response.

# What is the Back-end?

The back-end in a web application holds the logic to decide which assets to send to the specific user instead of sending the same files to every webpage user. This is known as dynamic content. Dynamic content refers to web content that changes based on various factors, primarily user interactions and preferences. Examples of dynamic content are pages based on user location, emails with automatic name insertion, recommendations based on browsing history, and so on.

# Storing Data

The back-ends of web applications include databases, usually more than one. Databases are information collections. There are many different databases, but they can be recognized as being divided into two types: relational and non-relational.

# What is an API?

- A web API is typically part of a back-end system. API stands for Application Programming Interface and can refer to various interfaces. Still, a web API is a set of rules that allow devices to communicate with a web application's data. This communication usually happens through something called HTTP requests and responses. Unlike the HTTP requests a client makes when a user navigates to a website's URL, these requests tell the server exactly what a user wants to do with its data - create new data, read existing information, update existing information, or delete existing information. Then, the server sends back some data in response to a user's request.

- When a customer selects a specific item for sale on an e-commerce site, the price for that item is stored in a database. When a user clicks a submit button to make an order, it triggers a request to send a customer to an order confirmation page. Still, an additional request will be triggered from the front-end, unseen by the user, to the web API so that the database can be updated with the information from the order (and the database needs to be updated with the correct inventory for that item type). Much of what the back-end entails is reading, updating, or deleting information stored in a database.

# Authorization and Authentication

Authentication and authorization are the other two concepts we'll want our server-side logic to handle. Authentication validates a user's identity, such as logins with usernames and passwords. These credentials must be securely stored in the back-end in a database and checked upon each visit. Authorization controls users' access to specific resources and actions (roles given to specific users for specific access).

# JavaScript for Node.js

Some important JavaScript concepts will be useful in fully utilizing Node.js in the following module.

# Arrow Expressions

- When using an arrow express, function declaration is not used.
- To define an arrow expression is to simply use: () => { }

## Anonymous Function (function is not named)

This shown an anonymous arrow expression to log a string to the console:
`console.log(() => console.log('I'm anonymous'));`

## Named Function

A named function is defined by creating an arrow expression and saving it to a variable helloWorld:

```
const helloWorld = (name) => {
  console.log(`Welcome ${name} to Codecademy, this is an arrow expression.`)
};
```

This is to call the helloWorld() function:

```
`helloWorld('Codey');` // Output: Welcome Codey to Codecademy, this is an Arrow Function Expression.
```

# Asynchronous Concepts

When developing in Node.js and JavaScript, a mix of synchronous (blocking I/O) and asynchronous (non-blocking I/O) code is used. Promises are a common example of asynchronous code.

## Promises

"A Promise is a JavaScript object that represents the eventual outcome of an asynchronous operation. A Promise has three different outcomes: pending (the result is undefined and the expression is waiting for a result), fulfilled (the promise has been completed successfully and returned a value), and rejected (the promise did not successfully complete, the result is an error object)."

A new Promise is defined and passed a function that takes two arguments: a fulfilled condition and a rejected condition. Then, the returned value of the Promise is logged to the console, and a .catch() method is chained to handle errors:

- Two arguments are being passed: one for when the promise resolves and one for if the promise is rejected.

```
const testLuck = new Promise((resolve, reject) => {
if (Math.random() < 0.5) {
resolve('Lucky winner!')
} else {
reject(new Error('Unlucky!'))
}
});

testLuck.then(message => {
console.log(message) // Log the resolved value of the Promise
}).catch(error => {
console.error(error) // Log the rejected error of the Promise
});
```

## Async/Await

- "The async...await syntax allows developers to easily implement Promise-based code."
- "The keyword async used in conjunction with a function declaration creates an async function that returns a Promise."
- "Async functions allow us to use the keyword await to block the event loop until a given Promise resolves or rejects."
- "The await keyword also allows us to assign the resolved value of a Promise to a variable."

```
// Creat a new promise that runs the function in the setTimeout after 5 seconds
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("All done!"), 5000);
});

// Creating an asynchronous function saved to a variable asyncFunction
const asyncFunction = async () => {
  // Await the promise to resolve and save the value returned to finalResult
  const finalResult = await newPromise;

  // Logging the result of the promise to the console
  console.log(finalResult); // Output: All done!
}

asyncFunction();
```

## setInterval() and setTimeout() functions

### setInterval() function

- "The setInterval() function executes a code block at a specified interval, in milliseconds. The setInterval() function requires two arguments: the name of the function (the code block that will be executed), and the number of milliseconds (how often the function will be executed)."
- "The setInterval() function will continue to execute until the clearInterval() function is called or the node process is exited."

```
// showAlert() function displays an alert box every 5000 milliseconds
const showAlert = () => {
  // Calling setInterval() and passing a function that shows an alert every 5 seconds.
  setInterval(() => {
    alert('I show every 5 seconds!')
  }, 5000);
};

// Calling the showAlert() function to call the setInterval
showAlert();
```

### setTimeout() function

- "The setTimeout() function executes a code block after a specified amount of time (in milliseconds) and is only executed once."
- "The setTimeout() function accepts the same arguments as the setInterval() function."
- "Using the clearTimeout() function will prevent the function specified from being executed."

```
// Defined a function showTimeout() to call setTimeout.
const showTimeout = () => {
  // setTimeout() function is defined to display an alert box after 5 seconds.
  setTimeout(() => {
    alert('I only show once after 5 seconds!');
  }, 5000);
};

// Calling the showTimeout() function
showTimeout();
```
