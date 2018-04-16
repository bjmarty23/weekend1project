// import express
let express = require('express')
//make the application
let app = express();
const PORT= 5000;
//serve our files
app.use(express.static('server/public'))
//run server!
app.listen(PORT, () => {
    console.log('app is running on port 5000');
})