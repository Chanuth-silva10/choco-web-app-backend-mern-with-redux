# Choco Web App Backend - MERN with Redux

## Introduction
This repository contains the backend implementation for the Choco Web App, built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Redux for state management.

## Features
- **User Authentication**: Register, login, and manage user sessions.
- **Product Management**: Add, update, delete, and view products.
- **Order Management**: Create and manage customer orders.
- **Cart Functionality**: Manage user carts and checkout process.
- **Docker Support**: Containerized application using Docker.

## Project Structure
- `controllers/`: Application logic and user interactions.
- `db/`: Database configuration and connection.
- `middlewares/`: Middleware for request and response handling.
- `models/`: Mongoose schemas for data models.
- `routes/`: API endpoint definitions.
- `utils/`: Utility functions.

## Installation

### Prerequisites
- Node.js
- MongoDB
- Docker (optional)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Chanuth-silva10/choco-web-app-backend-mern-with-redux.git

2. Navigate to the project directory:
   ```bash
   cd choco-web-app-backend-mern-with-redux

3. Install dependencies:
   ```bash
   npm install

4. Create a .env file in the root directory and add your environment variables:
   ```bash
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret

5. Start the development server:
   ```bash
   npm run dev

7. Build the Docker image:
   ```bash
   docker build -t choco-web-app-backend .

8. Run the Docker container:
   ```bash
   docker run -d -p 5000:5000 --name choco-web-app-backend choco-web-app-backend

## Choco web app backend api collection
![image](https://github.com/Chanuth-silva10/choco-web-app-backend-mern-with-redux/assets/80547770/f4713185-8211-405f-bd59-f02ebeb1891b)

Click for `Go To API Collection` [POSTMAN API COLLECTION](https://www.postman.com/lively-rocket-514967/workspace/public-api-collection/collection/24118288-c19af9c2-961c-4aca-9e6b-3d93340b8a19?action=share&creator=24118288)



