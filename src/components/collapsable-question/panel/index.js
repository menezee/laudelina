import React from 'react';
import { Collapse } from 'antd';
import styles from './panel.module.scss';

const { Panel: AntdPanel } = Collapse;

function Panel({ children, isActive, collapseQuestion, header, ...rest }) {
  return (
    <AntdPanel
      {...rest}
      header={header}
      isActive={isActive}
      className={`question-panel ${isActive ? 'question-panel--selected' : ''}`}
    >
      <div
        className={styles.container}
        onClick={collapseQuestion}
      >
        <div>
          {children}
        </div>
      </div>
    </AntdPanel>
  )
}

export default Panel;
