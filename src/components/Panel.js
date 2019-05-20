import React from 'react';
import {Collapse} from 'antd';
import {css, withStyles} from 'react-with-styles';

const {Panel: AntdPanel} = Collapse;

function Panel({children, styles, isActive, ...rest}) {
  return (
    <AntdPanel
      {...rest}
      isActive={isActive}
      className={`question-panel ${isActive ? 'question-panel--selected' : ''}`}
    >
      <div {...css(styles.answerContainer)}>
        {children}
      </div>
    </AntdPanel>
  )
}

export default withStyles(({color}) => ({
  answerContainer: {
    borderTop: '1px solid lightgray',
  },
}))(Panel);
