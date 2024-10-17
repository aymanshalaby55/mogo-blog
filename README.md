# Project README

This project is designed to provide a simple blog details page. It utilizes React for the frontend and JSON Server for a mock backend.

## Installation

To install the project, run the following command in your terminal:

```bash
npm install
```

## Starting the Project

To start the project, run the following command in your terminal:

```bash
npm start
```

This will start the React application on `http://localhost:3000`.

## Starting the Mock Backend

To start the mock backend using JSON Server, run the following command in a separate terminal window:

```bash
npx json-server --watch data/db.json --port 4000
```

This will start the JSON Server on `http://localhost:4000/blogs`.

## Features

* Displays blog details on a single page
* Utilizes JSON Server for a mock backend to fetch blog data

## Technologies Used

* React
* JSON Server
