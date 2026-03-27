const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))

//middleware to connect server and routes
const userRoute = require('./routes/user')
app.use('/api', userRoute);

app.get('/', (req,res) => {
    res.send("How much do you love me?");
})

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected"))
.catch(err => console.log(err));

app.listen(PORT, () => console.log(`App is listening at PORT ${PORT}`));

