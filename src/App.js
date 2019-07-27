import React, {Fragment} from 'react';
import {Col, Collapse, Icon, Layout, Row, Typography} from 'antd';
import Panel from './components/panel';
import Header from './components/header/';
import questions from './data/questions';
import styles from './app.module.scss';

const {Content} = Layout;
const {Title} = Typography;

function App() {
  return (
    <Fragment>
      <Header/>
      <Content>
        <Row type='flex' justify='center'>
          <Col xs={22} sm={20} md={20} lg={12}>
            {
              questions
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
