import React, { Fragment } from 'react';
import { Col, Layout, Row, BackTop } from 'antd';
import { Header, SectionOfQuestions } from './components';
import questions from './data/questions';

const { Content } = Layout;

function App() {
  return (
    <Fragment>
      <BackTop/>
      <Header/>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={19}>
            {
              questions
                .map(({ questions, category }, i) => (
                  <div key={`container-${i}`}>
                    <SectionOfQuestions
                      category={category}
                      questions={questions}
                    />
                  </div>
                ))
            }
          </Col>
        </Row>
      </Content>
    </Fragment>
  );
}

export default App;
