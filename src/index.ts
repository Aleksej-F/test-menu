require('dotenv').config();

const cors = require('cors');
let express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;



// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dish = require('./app/dish/routes');
// app.get('*', (res) =>{
//   res.status(404).json('Страница не найдена!')
// })
app.use('/dishs', dish);
app.listen(port, () => {
  console.log('Server is running on port ' + port);
})