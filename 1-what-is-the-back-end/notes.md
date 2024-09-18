## The Web Server

- The information comes from a web server and is sent to a client so that a user can interact with a website (regarding Front-End). "A <b>web server</b> is a computer process that listens for incoming information requests over the Internet and sends back responses."
  - So, when a user navigates to a website on their browser, the browser makes a request to the website's web server. Every website has at least one web server.
  - When a client makes a single request on a simple website, the web server receives that request and sends the client a response with the specific details to view the website. This is called a static website (akin to a snapshot of the website, where the files remain static and do not change or move). However, a static website falls short, for example, a user navigating social media who wants access to new content as it’s created.
- <b>Protocol:</b> The format of a request and the resulting response.

## What is the Back-end?

The back-end in a web application holds the logic to decide which assets to send to the specific user instead of sending the same files to every webpage user. This is known as dynamic content. Dynamic content refers to web content that changes based on various factors, primarily user interactions and preferences. Examples of dynamic content are pages based on user location, emails with automatic name insertion, recommendations based on browsing history, and so on.

## Storing Data

The back-ends of web applications include databases, usually more than one. Databases are information collections. There are many different databases, but they can be recognized as being divided into two types: relational and non-relational.

## What is an API?

- A web API is typically part of a back-end system. API stands for Application Programming Interface and can refer to various interfaces. Still, a web API is a set of rules that allow devices to communicate with a web application's data. This communication usually happens through something called HTTP requests and responses. Unlike the HTTP requests a client makes when a user navigates to a website's URL, these requests tell the server exactly what a user wants to do with its data - create new data, read existing information, update existing information, or delete existing information. Then, the server sends back some data in response to a user's request.

- When a customer selects a specific item for sale on an e-commerce site, the price for that item is stored in a database. When a user clicks a submit button to make an order, it triggers a request to send a customer to an order confirmation page. Still, an additional request will be triggered from the front-end, unseen by the user, to the web API so that the database can be updated with the information from the order (and the database needs to be updated with the correct inventory for that item type). Much of what the back-end entails is reading, updating, or deleting information stored in a database.

## Authorization and Authentication

Authentication and authorization are the other two concepts we'll want our server-side logic to handle. Authentication validates a user's identity, such as logins with usernames and passwords. These credentials must be securely stored in the back-end in a database and checked upon each visit. Authorization controls users' access to specific resources and actions (roles given to specific users for specific access).

## 7
