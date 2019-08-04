import React, {Fragment} from 'react';
import {Col, Layout, Row} from 'antd';
import Header from './components/header';
import SectionOfQuestions from './components/section-of-questions';
import questions from './data/questions';

const {Content} = Layout;

function App() {
  return (
    <Fragment>
      <Header/>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={19}>
            {
              questions
                .map(({questions, category}, i) => (
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
