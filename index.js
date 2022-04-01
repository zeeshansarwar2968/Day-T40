//initialise the http module
const http = require('http');
//initialise the node file system module module
const fs= require('fs');

const PORT= 8000;              //Lets create a server to take requests

///////////////////////////////////////////////// 
//Get the current date and time
var currentdate = new Date(); 

var datetime = "TimeStamp: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


path = "./FileSystem/current-date-time.txt";   //path to the cretaed txt file with name current-date-time

//Write the datetime stamp in the newly initialised txt file
fs.writeFileSync(path, `
    Display Format 1: ${datetime}
    Display Format 2: ${currentdate}` );


//retrieval of data from the file
http.createServer((req,res)=>{
    //logic
    fs.readFile(path,(err,data)=>{
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
}).listen(PORT,()=>{
    console.log("Server is running on port:",PORT);
})