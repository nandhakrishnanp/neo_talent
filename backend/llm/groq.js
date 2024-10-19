const { json } = require("express");
const Groq = require("groq-sdk");

const client = new Groq({
  apiKey: process.env.API_KEY,
});

async function runprompt(
  prompt,
  data
) {

    console.log(data);
    
  const params = {
    messages: [
      { role: "system", content: String(prompt) },
      { role: "user", content: JSON.stringify(data) },
    ],
    model: "llama3-8b-8192",
  };
  const chatCompletion = await client.chat.completions.create(params);

  const result = await chatCompletion.choices[0].message.content;

  return result;
}

module.exports = { runprompt };
