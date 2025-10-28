# May Amina Store - E-Commerce Shopping App

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Material-UI for the frontend.

## Features

### User Features
- User authentication (registration, login, logout)
- Password reset via email
- Profile management
- Product browsing and search
- Shopping cart functionality
- Order placement and tracking
- Product reviews and ratings
- Multiple shipping addresses
- Secure payment processing with Stripe

### Admin Features
- Admin dashboard
- User management
- Product management (CRUD operations)
- Order management
- Review management
- Coupon management
- Sales analytics

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Stripe (Payment processing)
- Nodemailer (Email service)
- Cloudinary (Image storage)
- Bcryptjs (Password hashing)

### Frontend
- React.js
- Redux (State management)
- Material-UI (UI components)
- React Router (Navigation)
- Axios (HTTP client)
- Stripe React (Payment integration)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Stripe account
- Cloudinary account
- Gmail account (for email service)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend/config` directory with the following variables:
```env
PORT=5000
DB_LINK=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
NODE_ENV=production
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_PASS=your-app-password
CLOUDINARY_NAME=your-cloudinary-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
CLOUDINARY_URL=cloudinary://<api-key>:<api-secret>@<cloudinary-name>
FRONTEND_URL=http://localhost:3000
STRIPE_API_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
REACT_APP_API_URL=http://localhost:5000
```

4. Start the frontend development server:
```bash
npm start
```

## Project Structure

```
may-amina-store/
├── backend/
│   ├── config/
│   │   └── .env
│   ├── controllers/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── payments.js
│   │   ├── admin.js
│   │   └── users.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Coupon.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── payments.js
│   │   ├── admin.js
│   │   └── users.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── actions/
│   │   │   ├── userActions.js
│   │   │   ├── productActions.js
│   │   │   ├── cartActions.js
│   │   │   └── orderActions.js
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.js
│   │   │   │   └── Footer.js
│   │   │   ├── user/
│   │   │   │   ├── Login.js
│   │   │   │   ├── Register.js
│   │   │   │   ├── Profile.js
│   │   │   │   ├── UpdateProfile.js
│   │   │   │   ├── UpdatePassword.js
│   │   │   │   ├── ForgotPassword.js
│   │   │   │   └── NewPassword.js
│   │   │   ├── product/
│   │   │   │   ├── Products.js
│   │   │   │   ├── ProductDetails.js
│   │   │   │   └── Search.js
│   │   │   ├── cart/
│   │   │   │   ├── Cart.js
│   │   │   │   ├── Shipping.js
│   │   │   │   ├── ConfirmOrder.js
│   │   │   │   ├── Payment.js
│   │   │   │   └── OrderSuccess.js
│   │   │   ├── order/
│   │   │   │   ├── ListOrders.js
│   │   │   │   └── OrderDetails.js
│   │   │   ├── admin/
│   │   │   │   ├── Dashboard.js
│   │   │   │   ├── ProductList.js
│   │   │   │   ├── NewProduct.js
│   │   │   │   ├── UpdateProduct.js
│   │   │   │   ├── OrderList.js
│   │   │   │   ├── ProcessOrder.js
│   │   │   │   ├── UsersList.js
│   │   │   │   ├── UpdateUser.js
│   │   │   │   └── ProductReviews.js
│   │   │   └── route/
│   │   │       ├── ProtectedRoute.js
│   │   │       └── AdminRoute.js
│   │   ├── store/
│   │   │   ├── constants/
│   │   │   │   ├── authConstants.js
│   │   │   │   ├── productConstants.js
│   │   │   │   ├── cartConstants.js
│   │   │   │   ├── orderConstants.js
│   │   │   │   └── userConstants.js
│   │   │   ├── reducers/
│   │   │   │   ├── authReducer.js
│   │   │   │   ├── productReducer.js
│   │   │   │   ├── cartReducer.js
│   │   │   │   ├── orderReducer.js
│   │   │   │   └── userReducer.js
│   │   │   └── index.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── theme.js
│   ├── package.json
│   └── .env
├── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updateprofile` - Update user profile
- `PUT /api/auth/updatepassword` - Update password
- `POST /api/auth/forgotpassword` - Forgot password
- `PUT /api/auth/resetpassword/:token` - Reset password

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `POST /api/products/:id/reviews` - Create product review
- `GET /api/products/:id/reviews` - Get product reviews
- `DELETE /api/products/:id/reviews/:reviewId` - Delete review (Admin)

### Orders
- `POST /api/orders/order/new` - Create new order
- `GET /api/orders/order/:id` - Get single order
- `GET /api/orders/orders/me` - Get my orders
- `GET /api/orders/admin/orders` - Get all orders (Admin)
- `PUT /api/orders/admin/order/:id` - Update order (Admin)
- `DELETE /api/orders/admin/order/:id` - Delete order (Admin)

### Payments
- `POST /api/payments/payment/process` - Process payment
- `GET /api/payments/stripeapikey` - Get Stripe API key

### Admin
- `GET /api/admin/users` - Get all users (Admin)
- `GET /api/admin/users/:id` - Get user details (Admin)
- `PUT /api/admin/users/:id` - Update user (Admin)
- `DELETE /api/admin/users/:id` - Delete user (Admin)
- `GET /api/admin/stats` - Get admin stats (Admin)
- `GET /api/admin/coupons` - Get all coupons (Admin)
- `POST /api/admin/coupons` - Create coupon (Admin)
- `PUT /api/admin/coupons/:id` - Update coupon (Admin)
- `DELETE /api/admin/coupons/:id` - Delete coupon (Admin)

### Users
- `POST /api/users/address` - Add address
- `PUT /api/users/address/:id` - Update address
- `DELETE /api/users/address/:id` - Delete address
- `PUT /api/users/address/:id/default` - Set default address

## Usage

1. Start both backend and frontend servers
2. Open your browser and navigate to `http://localhost:3000`
3. Register a new account or login with existing credentials
4. Browse products and add them to your cart
5. Proceed to checkout and complete your order
6. For admin features, login with an admin account

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please contact us at support@mayaminastore.com




