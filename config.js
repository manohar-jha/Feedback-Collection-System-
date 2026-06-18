const { mongo } = require("mongoose");

module.exports = {
    email:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
        admin:process.env.ADMIN_EMAIL,
    },
    mongoURI:process.env.MONGODB_URI,
};