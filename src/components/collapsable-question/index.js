import React, { useState } from 'react';
import { Collapse, Icon } from "antd";
import styles from "../section-of-questions/section-of-questions.module.scss";
import Panel from "./panel";

const expandIconStyles = {
  fontSize: '24px',
  color: 'rgba(237, 109, 2, 1)',
};

const collapseIconStyles = {
  fontSize: '24px',
  color: 'red',
  transform: 'rotate(45deg) translate(-34%, -40%)',
};

export const CollapsableQuestion = ({ question, answer }) => {
  const [active, setActive] = useState([]);
  const iconStyle = active.length ? collapseIconStyles : expandIconStyles;

  return (
    <Collapse
      activeKey={active}
      bordered={false}
      expandIcon={() => <Icon style={iconStyle} type='plus-circle'/>}
      expandIconPosition='right'
      className={styles.question}
      onChange={setActive}
    >
      <Panel
        children={answer}
        header={question}
      />
    </Collapse>
  );
};
