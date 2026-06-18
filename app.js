require('dotenv').config();
const express=require('express');
const path=require("path");
const Feedback=require("./models/Feedback");
const connectDB=require("./utils/db");
const { sendFeedbackEmail } = require('./utils/emailService');

//Instance ko express Kr do
//connect to database
connectDB();


const app  = express();
//serve ko shuru kr do
///view engine setup
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

// //middlewares
app.use(express.urlencoded({extended:true}));
// //pass data from a form 

// app.use(express.json);


//Routes
// home route
app.get('/',(req,res)=>{
res.render("home")
})
//about 
app.get('/about',(req,res)=>{
res.render("about")
})
//submit feedback 
app.get('/submit',(req,res)=>{
res.render("feedback-form")
})

//send feedback logc
app.post('/submit-feedback',async(req,res)=>{
try{
const feedback = new Feedback(req.body);
await feedback.save();
//send the email
await sendFeedbackEmail(feedback);
res.render('success',{message:'Thank you for your feedback'})
} catch(error){
console.log("Error submitting feedback",error);
res.render('error',{message:'Error while submitting the feedback'});
}
})


// //admin 
// app.get('/admin',(req,res)=>{
// res.render("admin", { feedbacks: [] });

// })
// app.get('/',(req,res)=>{
// res.render("home")
// })


//display all the feedbacks
app.get('/admin',async(req,res)=>{
     try {
        const feedbacks=await Feedback.find().sort({date:-1});
        res.render("admin",{feedbacks})
     } catch (error) {
        console.log("Error submitting feedback",error);
res.render('error',{message:'Error while fetching the feedback'});
     }
})









//ye shi hai

const PORT = process.env.PORT || 4000;
app.listen(PORT , console.log(`Server is runnign on port ${PORT}`)
);
 