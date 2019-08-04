import React from 'react';
import { Typography } from 'antd';
import styles from './section-of-questions.module.scss';
import { CollapsableQuestion } from '../';

const { Title } = Typography;

function SectionOfQuestions({ category, questions }) {

  return (
    <>
      <Title level={3} className={styles.category}>{category}</Title>
      {
        questions.map(({ question, answer }, i) => (
          <CollapsableQuestion
            question={question}
            answer={answer}
            key={`${category}-question-${i}`}
          />
        ))
      }
    </>
  );
}

export default SectionOfQuestions;
