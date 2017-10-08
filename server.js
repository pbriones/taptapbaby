'use strict';
const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT || 8080;
let ip = process.env.IP || '0.0.0.0';
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Running on: http://${ip}:${port}`);
  console.log(`Started at: ${new Date().toISOString()}`);
});