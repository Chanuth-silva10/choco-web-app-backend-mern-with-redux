# 🍫 Choco Web App Backend - MERN Stack E-commerce API

## 📋 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Docker Deployment](#docker-deployment)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Introduction

A robust and scalable e-commerce backend API built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This backend serves as the foundation for a chocolate e-commerce web application, providing comprehensive APIs for user management, product catalog, shopping cart, orders, and payment processing.

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT-based Authentication**: Secure user login and registration
- **Password Hashing**: BCrypt implementation for secure password storage
- **Role-based Access Control**: Admin and user role management
- **Password Reset**: Secure password reset functionality with email verification

### 🛍️ E-commerce Functionality
- **Product Management**: CRUD operations for products with image upload
- **Category & Brand Management**: Organize products by categories and brands
- **Shopping Cart**: Add, update, remove items from cart
- **Wishlist**: Save favorite products for later
- **Order Processing**: Complete order lifecycle management
- **Payment Integration**: Stripe payment gateway integration

### 🔧 Technical Features
- **File Upload**: Cloudinary integration for image storage
- **Email Service**: Nodemailer for sending emails
- **Error Handling**: Comprehensive error handling middleware
- **Data Validation**: Mongoose schema validation
- **CORS Support**: Cross-origin resource sharing enabled
- **Docker Support**: Containerized application for easy deployment

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT** - JSON Web Tokens for authentication
- **BCrypt** - Password hashing
- **Validator** - Input validation

### File Storage & Communication
- **Cloudinary** - Image storage and management
- **Nodemailer** - Email service
- **Multer** - File upload handling

### Payment & DevOps
- **Stripe** - Payment processing
- **Docker** - Containerization
- **Nodemon** - Development server

## 📁 Project Structure

```
choco-web-app-backend/
├── controller/               # Business logic controllers
│   ├── BrandController.js    # Brand management
│   ├── CartController.js     # Shopping cart operations
│   ├── CategoryController.js # Category management
│   ├── OrderController.js    # Order processing
│   ├── PaymentController.js  # Payment handling
│   ├── ProductController.js  # Product CRUD operations
│   ├── UserController.js     # User management
│   └── WishListController.js # Wishlist functionality
├── db/
│   └── Database.js           # MongoDB connection
├── middleware/
│   ├── auth.js              # Authentication middleware
│   ├── catchAsyncErrors.js  # Async error handling
│   └── error.js             # Error handling middleware
├── models/                   # Mongoose schemas
│   ├── BrandModel.js        # Brand data model
│   ├── CartModel.js         # Cart data model
│   ├── CategoryModel.js     # Category data model
│   ├── OrderModel.js        # Order data model
│   ├── ProductModel.js      # Product data model
│   ├── UserModel.js         # User data model
│   └── WishListModel.js     # Wishlist data model
├── routes/                   # API route definitions
│   ├── BrandRoute.js        # Brand endpoints
│   ├── CartRoute.js         # Cart endpoints
│   ├── CategoryRoute.js     # Category endpoints
│   ├── OrderRoute.js        # Order endpoints
│   ├── PaymentRoute.js      # Payment endpoints
│   ├── ProductRoute.js      # Product endpoints
│   ├── UserRoute.js         # User endpoints
│   └── WishListRoute.js     # Wishlist endpoints
├── utils/                    # Utility functions
│   ├── ErrorHandler.js      # Custom error handling
│   ├── Features.js          # Helper functions
│   ├── jwtToken.js          # JWT utilities
│   └── sendMail.js          # Email utilities
├── app.js                    # Express app configuration
├── server.js                # Server entry point
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose setup
└── package.json             # Dependencies and scripts
```

## 🔧 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**
- **Docker** (optional, for containerized deployment)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chanuth-silva10/choco-web-app-backend-mern-with-redux.git
   cd choco-web-app-backend-mern-with-redux
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run start
   ```

5. **Access the API**
   ```
   http://localhost:4000
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
DB_URL=mongodb://localhost:27017/choco-ecommerce

# JWT Configuration
JWT_SECRET_KEY=your_super_secret_jwt_key
JWT_EXPIRES=7d

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Stripe Configuration
STRIPE_API_KEY=your_stripe_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 🌐 API Endpoints

### Authentication
- `POST /api/v2/registration` - User registration
- `POST /api/v2/login` - User login
- `POST /api/v2/logout` - User logout
- `POST /api/v2/forgot/password` - Forgot password
- `PUT /api/v2/password/reset/:token` - Reset password

### Products
- `GET /api/v2/products` - Get all products
- `GET /api/v2/product/:id` - Get single product
- `POST /api/v2/product/new` - Create product (Admin)
- `PUT /api/v2/product/:id` - Update product (Admin)
- `DELETE /api/v2/product/:id` - Delete product (Admin)

### Categories & Brands
- `GET /api/v2/categories` - Get all categories
- `POST /api/v2/category/new` - Create category (Admin)
- `GET /api/v2/brands` - Get all brands
- `POST /api/v2/brand/new` - Create brand (Admin)

### Cart & Wishlist
- `GET /api/v2/get-cart/:id` - Get user cart
- `POST /api/v2/add-to-cart` - Add item to cart
- `DELETE /api/v2/remove-cart/:id` - Remove from cart
- `GET /api/v2/get-wishlist/:id` - Get user wishlist
- `POST /api/v2/add-to-wishlist` - Add to wishlist

### Orders
- `POST /api/v2/create/order` - Create new order
- `GET /api/v2/get-orders/:userId` - Get user orders
- `GET /api/v2/get-all-orders` - Get all orders (Admin)

### Payment
- `POST /api/v2/payment/process` - Process payment
- `GET /api/v2/stripeapi` - Get Stripe API key

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode**
   ```bash
   docker-compose up -d
   ```

### Using Docker Commands

1. **Build the Docker image**
   ```bash
   docker build -t choco-web-app-backend .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 4000:4000 --name choco-backend choco-web-app-backend
   ```

## 📜 Available Scripts

- `npm start` - Start the server with nodemon (development)
- `npm run dev` - Start the server with node (production)

## 🧪 Testing

### API Testing with Postman

Access the comprehensive API collection for testing all endpoints:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/lively-rocket-514967/workspace/public-api-collection/collection/24118288-c19af9c2-961c-4aca-9e6b-3d93340b8a19?action=share&creator=24118288)

## 🚀 Deployment

### Production Deployment

1. **Set environment to production**
   ```bash
   NODE_ENV=production
   ```

2. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start server.js --name "choco-backend"
   ```

## 👨‍💻 Author

**Chanuth Silva**
- GitHub: [@Chanuth-silva10](https://github.com/Chanuth-silva10)


---




