# About me

### Hello There👋🏻 My name is [Ali Jahankah](https://linktr.ee/uaral), a self-taught learner Full-Stack JavaScript Dev based in London. I love Coding, learning new Languages like Python & React Native, Playing Online games, electric guitar, listening to musics and going to the gym. Candlemass, Gojira, Thy Light and Hich are my favourite bands.🤘

### Here is the some simple steps to run this client React/TS project. If you get any errors , bugs or questions, feel free to contact me via:

- [LinkedIn](https://www.linkedin.com/in/uaral/)
- [GitHub](https://github.com/Ali-Jahankah)
- [Gmail](mailto:alijahankhah8@gamil.com)

### you can also find a few blogs that I've written on Medium website below:

[My blogs on Medium](https://medium.com/@ali-jahankah)

# Overview

This project is a client-side application built with

- React.js
- TypeScript for better type safety
- Built in Web Socket to fetch and display real-time information from specified endpoints.
- CSS for the styles

### This is a React/TypeScript project that uses WebSocket to interact with a Node.js server and display live data. State management is handled with Recoil.js, and navigation between pages is managed using React Router DOM.

# Architecture and Efficiency

### The application is designed for efficiency, even with a high number of users. Instead of making multiple API calls from the front end (which could be problematic with, for example, 10,000 users generating 10,000 API calls), a WebSocket connection is established when the user opens the page. Initially, the client receives a complete set of data.

### Users can navigate between different regions by clicking on any region, which updates the state to reflect the data for that specific region.

### A refresh button is provided to allow users to manually refresh the data for all regions. This button can be pressed every 60 seconds. The inclusion of this button is intentional, as not all users may need to see updated data in real-time. By allowing users to refresh data on demand, we save resources and reduce unnecessary data updates.

### To further optimize performance, load balancing or clustering of WebSocket workers can be implemented as needed.

# Prerequisites

Ensure you have the following installed on your machine:

- Node.js version 20
- npm version 10.5

# Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ali-Jahankah/regions-status-client
cd regions-status-client
```

### 2. Make Sure of the npm and Node Version

Ensure you are using Node 20 and npm 10.

### 3. .ENV file

Create an ENV file in the root where package.json is located, create a variable called "REACT_APP_WS_URL" and add your IPV4 and port there. For example:

```bash
REACT_APP_WS_URL=ws://192.168.1.25:4000
```

### 3. Install dependencies

```bash
npm install
```

### 4. Running the Project

You will see that the project will run on port 3000. Make sure your port 3000 is not in use. Also make sure that you are in branch 'master' and to start the server, run:

```bash
npm start
```
