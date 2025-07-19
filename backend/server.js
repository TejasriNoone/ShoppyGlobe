const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// ✅ Enable CORS for frontend (Vite default)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // enable credentials (cookies, auth headers if needed)
}));

// ✅ Basic route to verify API is working
app.get('/', (req, res) => {
  res.send('✅ ShoppyGlobe API is running...');
});

// ✅ Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// ✅ Custom error handler
app.use(errorHandler);

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
