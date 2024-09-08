const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODBURI)
.then(() => console.log(`Database connected: ${mongoose.connection.host}`))
//END OF IMPORTS

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/user/auth", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})