const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGOBD_URI);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error: ",error);
    }
};

module.exports = {connectDB};