const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})
app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res) {
  console.log(req.body);
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of the calculation is: "+ result)
})
app.post("/bmiCalculator", function(req, res) {
  console.log(req.body);
  var weight = Number(req.body.weight) * (0.453592);
  var height = (Number(req.body.height) * (0.0254)) ** 2;
  var bmi = weight / height;
  res.send("Your BMI is: "+ bmi)
})
app.listen("3000", function(){
  console.log("Server is running on port 3000.")
});
