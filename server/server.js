const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors({
  origin: '*',
}));
app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/api', async (req, res) => {
  // process the response
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: req.body.messages,
      max_tokens: 100,
    });
    const completion = await response.json();
    console.log(completion.data.choices[0].message);
    res.json(completion);
  } catch (error) {
    console.error(error);
  }
});

// start the server
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

/*
console.log(req);
  const requestOptions = {
    url: 'https://api.openai.com/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: req.body.messages,
      max_tokens: 1024,
    }),};
 */
