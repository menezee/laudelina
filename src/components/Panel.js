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
        <div>
          {children}
        </div>
        <div {...css(styles.audio)}>
          <audio controls>
            <source src='https://nerdcast-cdn.jovemnerd.com.br/nerdcast_673_odio.mp3' type='audio/mpeg'/>
          </audio>
        </div>
      </div>
    </AntdPanel>
  )
}

export default withStyles(({color}) => ({
  answerContainer: {
    borderTop: '1px solid lightgray',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  audio: {
    paddingTop: '10px',
  },
}))(Panel);
