const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

// create openai configuration
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

// create openai instance
const openai = new OpenAIApi(configuration);

// create express app
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
      messages: req.body.messages,
      model: 'gpt-3.5-turbo',
      max_tokens: 1000,
    });
    const completion = await JSON.stringify(response.data.choices[0].message);
    console.log(completion);
    res.send(completion);
  } catch (error) {
    console.error(error);
  }
});

// start the server
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
