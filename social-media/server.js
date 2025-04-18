const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');

})

const PORT=  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
})