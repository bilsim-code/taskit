const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const tasksRoute = require('./routes/tasksRoute')
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODBURI)
.then(() => console.log(`Database connected: ${mongoose.connection.host}`))
.catch(error => console.log(error.message));
const cors = require('cors');
//END OF IMPORTS

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/auth", userRoute);
app.use('/tasks', tasksRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})