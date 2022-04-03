//lets use the module called as express
const express = require('express');
const app=express();
//initialise the node file system module module
const fs= require('fs');

//create a port number
const PORT = process.env.PORT||5000;    

///////////////////////////////////////////////// 
//Get the current date and time
var currentdate = new Date(); 

var datetime = "TimeStamp: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


//path to the created txt file with name current-date-time
path = "./FileSystem/current-date-time.txt";   

//Write the datetime stamp in the newly initialised txt file
fs.writeFileSync(path, `
    Display Format 1: ${datetime}
    Display Format 2: ${currentdate}` );

//retrieval of data from the file

app.get("/",(req,res)=>{
    fs.readFile(path,(err,data)=>{
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
})

app.listen(PORT,()=>{console.log("server is running on port: "+PORT);})






