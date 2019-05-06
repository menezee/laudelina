import React, {useState} from 'react';
import {AutoComplete, Col, Layout, Row} from 'antd';

const {Header, Footer, Content} = Layout;

const dataSource = [
  {
    value: '1',
    text: 'Quais são meus direitos?',
    answer: 'Direito 1, Direito 2, e Direito 3',
  },
  {
    value: '2',
    text: 'Qual é o salário mínimo?',
    answer: 'R$1.000,00 (mil)',
  },
  {
    value: '3',
    text: 'Quanto tempo de almoço eu tenho por dia?',
    answer: '1h',
  },
  {
    value: '4',
    text: 'Quantos dias de férias tenho direito?',
    answer: '30 dias por ano',
  },
];

function filterOptionHandler(inputValue, option) {
  return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
}

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState();
  const onSelect = e => {
    setSelectedQuestion(e);
  };

  return (
    <>
      <Header>
        <span style={{color: 'white'}}>
        Laudelina
        </span>
      </Header>
      <Content>
        <Row type='flex' justify='center'>
          <Col span={18}>
            <AutoComplete
              dataSource={dataSource}
              style={{width: '100%'}}
              onSelect={onSelect}
              filterOption={filterOptionHandler}
              placeholder='Pergunta'
            />
          </Col>
        </Row>
        <Row type='flex' justify='center' style={{ paddingTop: '20px' }}>
          <Col span={18}>
            {
              dataSource
                .filter(({value}) => value === selectedQuestion)
                .map(({answer}, i) => (
                  <span key={i}>
                    {answer}
                  </span>
                ))
            }
          </Col>
        </Row>
      </Content>
      <Footer>
        Footer
      </Footer>
    </>
  );
}

export default App;
