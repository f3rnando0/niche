import { env } from '@/env';
import mongoose from 'mongoose';

if (!env.DATABASE_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(env.DATABASE_URI);
}

export default dbConnect;