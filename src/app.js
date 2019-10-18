import React, { Fragment, useState } from 'react';
import { Col, Layout, Row, BackTop, Input } from 'antd';
import { Header, SectionOfQuestions } from './components';
import questions from './data/questions';

const { Content } = Layout;
const { Search } = Input;

function App() {
  const [filter, setFilter] = useState('');

  const filterQuestionsThatIncludeFilter = category => ({ question, answer }) => question.includes(filter) || answer.includes(filter) || category.includes(filter);
  const filterCategoriesThatIncludeFilter = ({ questions, category }) => category.includes(filter) || questions.some(filterQuestionsThatIncludeFilter(category));

  return (
    <Fragment>
      <BackTop/>
      <Header/>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={19}>
            <Search placeholder="input search text" onSearch={value => setFilter(value)} enterButton/>
            {
              questions
                .filter(filterCategoriesThatIncludeFilter)
                .map(({ questions, category }, i) => {
                  const filteredQuestions = questions.filter(filterQuestionsThatIncludeFilter(category));

                  return (
                    <div key={`container-${i}`}>
                      <SectionOfQuestions
                        category={category}
                        questions={filteredQuestions}
                      />
                    </div>
                  )
                })
            }
          </Col>
        </Row>
      </Content>
    </Fragment>
  );
}

export default App;
