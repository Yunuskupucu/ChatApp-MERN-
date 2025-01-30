import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// app.put('/auth/update-profile', async (req, res) => {
//   try {
//     const updatedProfile = { success: true, data: { username: 'exampleuser' } };
//     res.status(200).send(updatedProfile);
//   } catch (error) {
//     console.error('Error in /auth/update-profile:', error);
//     res.status(500).send({ message: 'An error occurred on the server' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
