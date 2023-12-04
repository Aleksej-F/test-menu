require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// app.use(express.json());
app.use(cors());

// app.get('*', (req, res) =>{
//   res.status(404).json('Страница не найдена!')
// })

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})