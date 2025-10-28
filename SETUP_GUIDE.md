# May Amina Store - Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- Git
- A code editor (VS Code recommended)

## Step 1: Install Dependencies

Run this command in the root directory to install all dependencies for both backend and frontend:

```bash
npm run install-all
```

## Step 2: Configure Services

### 2.1 MongoDB Configuration

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new project
4. Create a new cluster (choose the free tier)
5. Create a database user with username and password
6. Whitelist your IP address (or use 0.0.0.0/0 for development)
7. Get your connection string from "Connect" → "Connect your application"
8. Replace `<username>`, `<password>`, and `<database-name>` in the connection string

### 2.2 Cloudinary Configuration

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Go to your dashboard
4. Copy the following values:
   - Cloud Name
   - API Key
   - API Secret

### 2.3 Stripe Configuration

1. Go to [Stripe](https://stripe.com/)
2. Create a free account
3. Go to the dashboard
4. Copy the following values:
   - Publishable key (starts with pk_test_)
   - Secret key (starts with sk_test_)

### 2.4 Gmail Configuration

1. Use your existing Gmail account or create a new one
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password (not your regular Gmail password)

## Step 3: Create Environment Files

### Backend Environment File

Create a file named `.env` in the `backend` directory with the following content:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_LINK=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/may-amina-store?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random-123456789
JWT_EXPIRE=5d
COOKIE_EXPIRE=5

# Email Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
SMTP_PASS=your-16-character-app-password

# Cloudinary Configuration
CLOUDINARY_NAME=your-cloudinary-cloud-name
API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
CLOUDINARY_URL=cloudinary://YOUR_API_KEY:YOUR_API_SECRET@YOUR_CLOUD_NAME

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Stripe Configuration
STRIPE_API_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
```

### Frontend Environment File

Create a file named `.env` in the `frontend` directory with the following content:

```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
REACT_APP_API_URL=http://localhost:5000
```

## Step 4: Start the Application

### Option 1: Start Both Servers Together
```bash
npm run dev
```

### Option 2: Start Servers Separately

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

## Step 5: Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Step 6: Test the Application

1. Open http://localhost:3000 in your browser
2. Register a new account
3. Browse products
4. Add items to cart
5. Test the checkout process

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**: Check your connection string and ensure your IP is whitelisted
2. **Stripe Error**: Verify your API keys are correct and you're using test keys
3. **Email Not Sending**: Check your Gmail app password and ensure 2FA is enabled
4. **Cloudinary Error**: Verify your cloud name, API key, and secret are correct

### Environment Variables Checklist:

- [ ] MongoDB connection string
- [ ] JWT secret (long random string)
- [ ] Gmail credentials with app password
- [ ] Cloudinary credentials
- [ ] Stripe test keys
- [ ] Frontend Stripe publishable key

## Next Steps

Once everything is working:

1. Create some test products through the admin panel
2. Test the complete user flow
3. Customize the design and branding
4. Deploy to production when ready

## Support

If you encounter any issues, check the console logs for error messages and ensure all environment variables are correctly set.




