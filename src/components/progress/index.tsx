import React from 'react';
import './index.less';

interface IProps {
  title: string;
  minText: string;
  maxText: string;
  progress: number;
}

export default (props: IProps) => {
  return (
    <div className="progress-size">
      <div className="panel-title">{props.title}</div>
      <div className="progress">
        <div className="triangle" style={{left: props.progress + '%'}}/>
      </div>
      <div className="title">
        <span>{props.minText}</span>
        <span className="light-text">perfect</span>
        <span>{props.maxText}</span>
      </div>
    </div>
  )
}