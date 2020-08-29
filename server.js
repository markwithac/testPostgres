const express = require('express')
const app = express();
const cors = require('cors')
const pool = require('./server/db')

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

// CREATE A TODO
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)", [description]
    );
    res.json(newTodo)
  } catch (err) {
    console.log(err)
  }
})

// get all todos

// get a todo

// 

app.listen(5000, () => {
  console.log('Server online at localhost:5000')
})