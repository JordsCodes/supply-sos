import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getPlan = async (choices) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Write me a lesson plan based on the UK national curriculum. Use the following criteria:
        Year Group: ${choices.yearGroup}. Subject: ${choices.subject}. 
        Topic: ${choices.topic}. Curriculum Aim: ${choices.curriculumAim}. 
        Organize the plan under the following subheadings: 
        Subject, Year Group, Topic, Curriculum Aim, Learning Objective, 
        Introduction, Main Lesson Activities, Differentiation.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  const plan = chatCompletion.choices[0].message.content;
  console.log(plan);
  return plan;
};

export default getPlan;
