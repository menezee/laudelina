import React from 'react';
import { Collapse, Icon, Typography } from 'antd';
import styles from './section-of-questions.module.scss';
import Panel from '../panel';

const { Title } = Typography;

const expandIconStyles = {
  fontSize: '24px',
  color: 'rgba(237, 109, 2, 1)',
};

function SectionOfQuestions({ category, questions }) {

  return (
    <>
      <Title level={3} className={styles.category}>{category}</Title>
      {
        questions.map(({ question, answer }, i) => (
          <Collapse
            bordered={false}
            expandIcon={() => <Icon style={expandIconStyles} type='plus-circle'/>}
            expandIconPosition='right'
            key={`collapsable-${category}-${i}`}
            className={styles.question}
            onChange={e => {
              console.log(e)
            }}
          >
            <Panel
              children={answer}
              header={question}
              key={`panel-${category}-${i}`}
            />
          </Collapse>
        ))
      }
    </>
  );
}

export default SectionOfQuestions;
