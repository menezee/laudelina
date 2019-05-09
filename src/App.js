import React, {Fragment, useEffect, useState} from 'react';
import {Col, Icon, Layout, Row} from 'antd';
import {css, withStyles} from './Theme';
import LaudelinaIcon from './laudelina.jpeg';
import Question from './Question';

const {Header, Content} = Layout;

function useNetlifyQuestions() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('https://naughty-davinci-c8d9f1.netlify.com/.netlify/functions/hello');
      const json = await res.json();
      setQuestions(json);
    })()
  }, [])

  return questions;
}

function App({styles}) {
  const questions = useNetlifyQuestions();
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  return (
    <Fragment>
      <Header {...css(styles.header)}>
        <div  {...css(styles.logo)}>
          <img src={LaudelinaIcon} alt='logo'/>
          <span {...css(styles.logoText)}>LAUDELINA</span>
        </div>
        <div {...css(styles.subTitle)}>
          Perguntas Frequentes
        </div>
      </Header>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={12} style={{ marginTop: '-50px' }}>
            {
              selectedQuestion !== null ? (
                <Question message={questions[selectedQuestion].answer} onClick={() => {
                  setSelectedQuestion(null)
                }}>
                  <Icon type='left'/>
                </Question>
              ) : (
                questions.map(({question}, i) => (
                  <Question
                    message={question}
                    key={i}
                    onClick={() => {
                      setSelectedQuestion(i)
                    }}
                  >
                    <Icon type='right'/>
                  </Question>
                ))
              )
            }
          </Col>
        </Row>
      </Content>
    </Fragment>
  );
}

export default withStyles(({color}) => ({
  header: {
    backgroundColor: color.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'unset',
    flexDirection: 'column',
    lineHeight: '15px',
  },
  logo: {
    margin: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: 900,
    color: 'white',
    textShadow: '1px 1px 1px black',
    letterSpacing: '1px',
    fontSize: '20px',
    fontFamily: 'sans-serif',
    paddingLeft: '10px',
  },
  subTitle: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    paddingBottom: '80px',
    paddingTop: '10px',
  },
}))(App);
