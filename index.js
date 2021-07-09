const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];


// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);

});

app.get('/api/fortune', (req,res) => {
  const fortunes = 
  ["A beautiful, smart, and loving person will be coming into your life.", 
  "A soft voice may be awfully persuasive.", 
  "A truly rich life contains love and art in abundance.", 
  "An important person will offer you support.",
  "Believe it can be done."];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomCompliment = fortunes[randomIndex];

  res.status(200).send(randomCompliment)
})
// app.get('/api/starships/10/', (req,res) => {
//   const fortunes = 

//   let randomIndex = Math.floor(Math.random() * fortunes.length);
//   let randomCompliment = fortunes[randomIndex];

//   res.status(200).send(randomCompliment)
// })

app.listen(4000, () => console.log("Server running on 4000"));
