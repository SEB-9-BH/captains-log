const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    // Correct the URI string by adding quotes around the MongoDB URI
    const MONGO_URI = 'mongodb+srv://Abdulrazaq:otosJk7V6X6BgnYM@cluster0.fnhhkkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    // Use the correct variable MONGO_URI to connect to the database
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if connection fails
  }
};
module.exports = connectDB;