import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import LaudelinaIcon from '../../images/laudelina.png';
import styles from './header.module.scss';

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

function Header() {
  return (
    <>
      <Row type='flex' justify='center' className={styles.header__background}>
        <Col xs={22} sm={20} md={20} lg={19}>
          <Row type='flex' style={{ paddingTop: '10px' }}>
            <Col span={24} className={styles.flex}>
              <img className={styles.header__icon} src={LaudelinaIcon} alt='laudelina icon'/>
              <Title level={4} className={styles.header__title}>
                Laudelina
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <AntdHeader className={styles['header__bottom']}>
        <Title level={4} className={styles['header__bottom-title']}>
          Dúvidas Frequentes
        </Title>
      </AntdHeader>
    </>
  )
}

export default Header;
