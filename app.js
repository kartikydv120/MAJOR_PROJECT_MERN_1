//export the basic services for backend and database 
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const methodOverride = require( "method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require('./utils/ExpressError');
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./Modals/user");
const listingRouter = require("./routes/listings");
const reviewRouter = require("./routes/reviews");
const userRouter = require("./routes/user");

const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(dbUrl);
};
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));//to parse the form data
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expire:Date.now() + 7 * 24 *60 * 60 * 1000,
        maxAge:7 * 24 *60 * 60 * 1000,
        httpOnly:true,
    }
}; 

// app.get("/",(req,res)=>{
//     res.send("Hi i'm root ");
// });
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})
// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"kartikyadav102003@gmail.com",
//         username:"kartik yadav"
//     });
//     let registerUser = await User.register (fakeUser,"hello");
//     res.send(registerUser);
// })

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.all("/*path", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});
// Central error handler
app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs",{err})
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
