const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path"); 

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");


//variable or const enviroment
env.config();

//mongoBD connection
//mongodb+srv://root:<password>@cluster0.sojy4.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.sojy4.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
    }
    ).then(() =>{
        console.log("Database connected");
    });

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

/*app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello from Back-End Server"
    });
});

app.post("/data", (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});
*/
app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});