const mongoose = require('mongoose');
const connectDB = async () => {
  try {
   
  MONGO_URI= 'mongodb+srv://HussainAlkaabi:h1234@cluster0.jzpmndm.mongodb.net/Vegetables?retryWrites=true&w=majority&appName=Cluster0 ';


    
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









c










