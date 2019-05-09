import React from 'react';
import {Card, Col, Row} from 'antd';

function Question({message, onClick, children}) {
  return (
    <Card
      hoverable
      style={{marginTop: '5px', marginBottom: '5px', borderRadius: '7px'}}
      onClick={onClick}
    >
      <Row>
        <Col span={4}/>
        <Col span={17}>
          {message}
        </Col>
        <Col span={3}>
          {
            children
          }
        </Col>
      </Row>
    </Card>
  )
}

export default Question;
