import React, {Fragment, useEffect, useState} from 'react';
import {Col, Collapse, Icon, Layout, Row, Typography} from 'antd';
import {css, withStyles} from './Theme';
import Panel from './components/Panel';
import parseQuestion from './adapters/Question';
import Header from './components/Header';

const {Content} = Layout;
const {Title} = Typography;

function useNetlifyQuestions() {
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

function App({styles}) {
  const questions = useNetlifyQuestions();

  return (
    <Fragment>
      <Header/>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={12}>
            <Title level={3} {...css(styles.title)}>Direitos</Title>
            <Collapse
              bordered={false}
              expandIcon={() => <Icon style={{color: '#F0770E'}} type='plus-circle'/>}
              expandIconPosition='right'
              accordion
              style={{backgroundColor: 'transparent'}}
            >
              {
                questions
                  .map(parseQuestion)
                  .map(({question, answer}, i) => (
                    <Panel
                      children={answer}
                      header={question}
                      key={i}
                    />
                  ))
              }

            </Collapse>

          </Col>
        </Row>
      </Content>
    </Fragment>
  );
}

export default withStyles(({color}) => ({
  panel: {
    marginBottom: '24px',
    backgroundColor: color.display,
    fontWeight: '500',
  },
  title: {
    marginTop: '20px',
    marginBottom: '10px',
  },
  expandIcon: {
    color: color.primary,
  },
}))(App);
