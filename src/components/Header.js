import React from 'react';
import {Col, Layout, Row} from 'antd';
import {css, withStyles} from '../Theme';

const {Header: AntdHeader} = Layout;

function Header({styles}) {
  return (
    <>
      <Row type='flex' justify='center' {...css(styles.topHeader)}>
        <Col xs={22} sm={20} md={20} lg={12}>
        <span {...css(styles.topHeaderTitle)}>
          LAUDELINA
        </span>
        </Col>
      </Row>
      <AntdHeader {...css(styles.bottomHeader)}>
      </AntdHeader>
    </>
  )
}

export default withStyles(({color}) => ({
  topHeader: {
    backgroundColor: '#974602',
  },
  topHeaderTitle: {
    fontFamily: 'Humanst521 BT',
    fontWeight: 'bold',
    color: color.display,
  },
  bottomHeader: {
    backgroundColor: color.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))(Header);
