import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const key = process.env.API_KEY;

app.post('/api', (req, res) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: req.body.messages,
      max_tokens: 1024,
    }),
  };
  // process the response
  fetch('https://api.openai.com/v1/completions', requestOptions)
    .then((response) => {
    // handle response
      res.send(response.json());
    })
    .catch((error) => console.error(error));
});

// start the server
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
