import React from 'react';
import classnames from 'classnames';
import './index.less';


interface IProps {
  width: number,
  size?: 'small' | 'mini' | 'default'
}

export default (props: IProps) => {
  return (
    <div className={classnames('star-rating__item', {small: props.size === 'small', mini: props.size === 'mini'})}>
      <div className="gl-star-rating__mask" style={{ width: props.width + '%' }}>
        <svg
          className="gl-star-rating__star"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="gl-star-rating__fill"
            fill="currentColor"
            stroke="0"
            d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
          />
        </svg>
      </div>
      <svg
        className="gl-star-rating__star"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="gl-star-rating__outline"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
        />
      </svg>
    </div>
  )
}