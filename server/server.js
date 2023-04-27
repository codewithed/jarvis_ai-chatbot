require('dotenv').config({ path: require('find-config')('.env') });
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const key = process.env.API_KEY;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
