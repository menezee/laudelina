// NOT BEING USED FOR NOW

import {useEffect, useState} from "react";

export function useNetlifyQuestions() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.netlify.com/api/v1/sites/62cd8fb2-b673-48eb-82cc-4a33cd8180bb/submissions?access_token=a3a5fdab6a498e6ffd85facab456fa9432c7d7e0e3f8edfc8ee897fbb10473b9');
      // const res = await fetch('https://naughty-davinci-c8d9f1.netlify.com/.netlify/functions/hello');
      const json = await res.json();
      setQuestions(json);
    })()
  }, [])

  return questions;
}
