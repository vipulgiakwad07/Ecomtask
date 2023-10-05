const mongoose = require("mongoose");

const DB = process.env.DATABASE||"mongodb+srv://amezhonecom:amezhonecomdb@cluster0.oax3f.mongodb.net/amezhonecom?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))