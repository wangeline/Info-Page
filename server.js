const express = require("express");
const app = express();
app.use(express.static("./public"));

app.get("/", function(req,res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res) {
  res.sendFile(__dirname + "/index2.html");
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running on port ${process.env.PORT}.');
});

// FIRST PROJECT
//let image = document.getElementById("pfp");

/*
image.addEventListener("click", function() {          window.location.replace("https://codepen.io/Angie-W/full/zYMNMPQ");
  //https://codepen.io/Angie-W/full/zYMNMPQ
});
*/
