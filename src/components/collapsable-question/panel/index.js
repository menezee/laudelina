import React from 'react';
import { Collapse } from 'antd';
import styles from './panel.module.scss';

const { Panel: AntdPanel } = Collapse;

function Panel({ children, isActive, ...rest }) {
  return (
    <AntdPanel
      {...rest}
      isActive={isActive}
      className={`question-panel ${isActive ? 'question-panel--selected' : ''}`}
    >
      <div className={styles.container}>
        <div>
          {children}
        </div>
      </div>
    </AntdPanel>
  )
}

export default Panel;
