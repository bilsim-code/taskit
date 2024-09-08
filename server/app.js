const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODBURI)
.then(() => console.log(`Database connected: ${mongoose.connection.host}`))
//END OF IMPORTS

//routes
app.use("/api/auth", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})