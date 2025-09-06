# Product Management Web Application

A modern, full-stack web application built with RestJS (Express.js) for managing products with user authentication.

## Features

- **User Authentication**
  - User registration and login
  - JWT-based authentication
  - Secure password hashing with bcrypt

- **Product Management**
  - Create new products
  - View all products
  - Update existing products
  - Delete products
  - User-specific product ownership

- **Modern UI/UX**
  - Responsive design
  - Beautiful gradient backgrounds
  - Interactive product cards
  - Modal forms for adding/editing
  - Real-time alerts and notifications

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Validation**: express-validator
- **Styling**: Custom CSS with gradients and animations

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/product-app
   JWT_SECRET=your-super-secret-jwt-key
   PORT=8082
   ```

4. **Start MongoDB**
   - **Local MongoDB**: Start your local MongoDB service
   - **MongoDB Atlas**: Use your connection string in `.env`

5. **Run the application**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:8082`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

## Usage

1. **First Time Setup**
   - Register a new account
   - Login with your credentials

2. **Managing Products**
   - Click "Add Product" to create new products
   - Fill in product details (name, description, price, category, stock)
   - Optionally add an image URL
   - Click "Save Product"

3. **Editing Products**
   - Click the "Edit" button on any product you own
   - Modify the details in the modal
   - Click "Save Product" to update

4. **Deleting Products**
   - Click the "Delete" button on any product you own
   - Confirm the deletion

## Project Structure

```
product-management-app/
├── models/
│   ├── User.js          # User model with password hashing
│   └── Product.js       # Product model with validation
├── routes/
│   ├── auth.js          # Authentication routes
│   └── products.js      # Product CRUD routes
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── public/
│   ├── index.html       # Main application page
│   └── app.js           # Frontend JavaScript
├── server.js            # Express server setup
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- User authorization for product operations
- CORS enabled for cross-origin requests

## Customization

- **Styling**: Modify CSS in `public/index.html`
- **Database**: Change MongoDB connection in `server.js`
- **Port**: Update port in `.env` or `server.js`
- **JWT Secret**: Change JWT secret in `.env`

## Troubleshooting

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network access for Atlas

2. **Port Already in Use**
   - Change port in `.env` file
   - Kill process using the port

3. **Authentication Issues**
   - Clear browser localStorage
   - Check JWT secret in `.env`
   - Verify token expiration

## Development

- **Auto-reload**: Use `npm run dev` for development
- **Logs**: Check console for server logs
- **Database**: Use MongoDB Compass for database management

## Deployment

1. Set environment variables on your hosting platform
2. Ensure MongoDB is accessible
3. Use `npm start` for production
4. Consider using PM2 for process management

## License

MIT License - feel free to use this project for learning and development.

## Support

For issues or questions, please check the troubleshooting section or create an issue in the repository. 