import React from 'react';
import {Col, Icon, Layout, Row, Typography} from 'antd';
import {css, withStyles} from '../Theme';
import LaudelinaIcon from '../images/laudelina.png';

const {Header: AntdHeader} = Layout;
const {Title} = Typography;

function Header({styles}) {
  return (
    <>
      <Row type='flex' justify='center' {...css(styles.topHeader)}>
        <Col xs={22} sm={20} md={20} lg={12}>
          <Row type='flex' style={{paddingTop: '10px'}}>
            <Col span={6} {...css(styles.flex)}>
              <img {...css(styles.laudelinaIcon)} src={LaudelinaIcon} alt='laudelina icon'/>
              <Title level={4} {...css(styles.topHeaderTitle)}>
                Laudelina
              </Title>
            </Col>
            <Col span={10} offset={8} {...css(styles.flex, styles.duvida)}>
              <a href="mailto:someone@example.com?Subject=Hello%20again" target="_self" rel='noopener noreferrer'>
                <span style={{ color: 'white' }}>Envie sua dúvida</span> <Icon type='mail' {...css(styles.mailIcon)}/>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <AntdHeader {...css(styles.bottomHeader)}>
        <Title level={4} {...css(styles.bottomHeaderTitle)}>
          Dúvidas Frequentes
        </Title>
      </AntdHeader>
    </>
  )
}

export default withStyles(({color}) => ({
  topHeader: {
    backgroundColor: color.bottomHeader,
  },
  topHeaderTitle: {
    fontFamily: 'Humanst521 BT',
    fontWeight: 'bold',
    color: color.display,
    paddingLeft: '10px',
    textTransform: 'uppercase',
  },
  bottomHeader: {
    backgroundColor: color.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '50px',
  },
  bottomHeaderTitle: {
    textTransform: 'uppercase',
    color: color.display,
    fontFamily: 'Humanst521 BT',
  },
  laudelinaIcon: {
    width: '27px',
    height: '27px',
    paddingTop: '3px',
  },
  flex: {
    display: 'flex',
  },
  duvida: {
    color: 'white',
    justifyContent: 'flex-end',
    marginBottom: '0.5em',
  },
  mailIcon: {
    color: 'white',
    paddingLeft: '5px',
    paddingTop: '4px',
    fontFamily: 'Humanst521 BT',
  },
}))(Header);
