const express = require('express')
const routes = require('./routes')
const app = express();

//Configuring express to get params passed throught the routers
app.use(express.json())
app.use(routes);


// Catch All
//Middeweare

app.use((error,req,res,nex) =>{

    res.status(error.status || 500)
    res.json({error:error.message})
})

app.listen(3305,()=> console.log('Server is running'))