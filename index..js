const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();


app.use(express.json());
app.use(cors());