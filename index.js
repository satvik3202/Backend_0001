require('dotenv').config();
const express = require('express')   //created a object from the express 
const app = express()        //we create a variable using express which has so many functions
const port = 3000      //it is a virtual port where we will listen the request


//get request runs at the home route and res.send is run and helloworld is sent
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//we can create out own :
app.get('/twitter', (req,res)=> {
    res.send('satvik_4344')
})
//we will create more
app.get('/login', (req,res)=>{
    res.send('<h1>Please login at my website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>');
})


//listens to the port
//we will provide the port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
 