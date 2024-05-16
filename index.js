// import express

const express = require("express");

const app = express();

const data ={
    status :true,
    randon_jokes :null,
    img_url : null,
}
const gettingDataForJoke = async()=>{
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const convertData = await response.json();
    data.randon_jokes = convertData.setup;

}

const gettingDataForimage = async()=>{
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const convertData = await response.json();
    data.img_url = convertData.message;

}

gettingDataForimage();
app.get("/",(req,res)=>{
    gettingDataForJoke();
    gettingDataForimage();
    res.json(data);
})

app.listen(8080,()=>{
    console.log("server is connected");
})