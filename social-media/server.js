const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the root URL
app.get("/evaluation-services/users", async (req, res) => {
  const response = await fetch('http://20.244.56.144/evaluation-services/users');
  const data = await response.json();
  res.send(data);
});

app.get('/evaluation-services/users/:userId/posts', (req,res)=>{
  const response = fetch(`http://20.244.56.144/evaluation-services/users/${req.params.userId}/posts`);
  const data = response.json();
  res.send(data);
})

app.get('/evaluations-services/posts:postId/comments', async(req,res)=>{
  const response = await fetch(`https://20.244.56.144/evaluation-services/posts/${req.params.postId}/comments`);
  const data = await response.json();
  res.send(data);
})


const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})