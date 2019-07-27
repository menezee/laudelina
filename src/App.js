import React, {Fragment, useState} from 'react';
import {Col, Collapse, Icon, Layout, Row, Typography} from 'antd';
import {Input} from 'antd';
import Panel from './components/panel';
import Header from './components/header/';
import questions from './data/questions';
import styles from './app.module.scss';

const {Search} = Input;
  const {Content} = Layout;
const {Title} = Typography;

function App() {
  const [filterText, setFilterText] = useState('');

  return (
    <Fragment>
      <Header/>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={12}>
            <Search placeholder="input search text" onSearch={value => setFilterText(value)} enterButton/>
            {
              questions
                .filter(({questions}) => (
                  questions.some(({question, answer}) =>
                    question.includes(filterText) || answer.includes(filterText))
                ))
                .map(({questions, category}, i) => (
                  <div key={`container-${i}`}>
                    <Title key={`title-${i}`} level={3} className={styles.category}>{category}</Title>
                    {

                      questions.map(({question, answer}, j) => (
                        <Collapse
                          bordered={false}
                          expandIcon={() => <Icon className={styles['expand-icon']} type='plus-circle'/>}
                          expandIconPosition='right'
                          accordion
                          key={`collapsable-${j}`}
                          className={styles.question}
                        >
                          <Panel
                            children={answer}
                            header={question}
                            key={`panel-${j}`}
                          />
                        </Collapse>
                      ))
                    }
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
