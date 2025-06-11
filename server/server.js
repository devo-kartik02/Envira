import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js';
// import pollutionRoutes from './routes/pollutionRoutes.js';


const app = express();
const PORT = 5000;

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);


// MongoDB local connection
const mongoURI = 'mongodb://127.0.0.1:27017/pollution-db'; // Local MongoDB, custom DB name: enviraDB

mongoose.connect(mongoURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log('✅ Connected to local MongoDB at 127.0.0.1:27017');
    });
  })
  .catch((error) => console.log('❌ MongoDB connection error:', error));

// Health Check
app.get('/', (req, res) => {
  res.send('Server is running...');
});
