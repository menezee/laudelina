export function QuestionFromNetlify({human_fields: {Answer: answer, Question: question}}) {
  return {
    answer,
    question,
  }
}
