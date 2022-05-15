import React from 'react';
import './index.less';

interface IProps {
  title: string; // 标题
  minText: string; // 最小值文案
  maxText: string; // 最大值文案
  progress: number; // 进度
}
/**
 * 滑动条
 */
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