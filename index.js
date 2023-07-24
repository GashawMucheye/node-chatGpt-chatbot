import openai from './config/open-ai.js';

async function main() {
  const chatComplation = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'what is capital of Ethiopia?',
      },
    ],
  });
  console.log(chatComplation.data.choices[0].message.content);
}

main();
