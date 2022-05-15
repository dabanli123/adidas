import classNames from "classnames";
import React, { useState } from "react";
import { EnumHelpful, IReview } from "../../interface";
import Star from '../star';
import './index.less';

interface IProps {
  item: IReview;
}

const rantingArray  = new Array(5).fill(1);
/**
 * 右边的review
 */
export default (props: IProps) => {
  const [isShow, setIsShow] = useState<boolean>(false); // 是否显示小字
  const [isReport, setIsReport] = useState<boolean>(false); // Read More的显示判断
  const [isHelpful, setIsHelpful] = useState<EnumHelpful>(EnumHelpful.Default); // 点赞


  return (
    <div className="review-box">
      <strong className="list-title">{props.item.title}</strong>
      <div className="ranting-star">
        {rantingArray.map((item, index) => {
          if(index + 1 > props.item.rating) {
            return <Star size="mini" width={0}/>
          }

          return <Star size="mini" width={100}/>
        })}
      </div>
      <p className="content">{props.item.text}</p>
      <small className={classNames('content-more', {show: isShow})}>
        {props.item.userNickname} | {props.item.formattedDate} | {props.item.badges.join('|')} | Incentivised Review
      </small>
      <div className="exrta">
        <div className="helpful">
          <span className="helpful-smbox">Helpful?</span>
          <button className="vote-button" onClick={() => setIsHelpful(EnumHelpful.Up)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isHelpful === EnumHelpful.Up && (
                <path
                d="M2 16V9.40572H6.79143V10.254C6.79143 10.254 7.94834 9.61701 8.5 9C9.15551 8.26684 9.13417 8.27672 9.66629 6.76801C9.96004 5.93512 10.1454 4.1303 10.1454 4.1303C10.1454 4.1303 11.1213 3.83713 11.5829 4.1303C12.0694 4.43932 12.5411 5.84347 12.5411 6.76801C12.5411 7.69254 12.3375 8.52648 12.3375 8.52648H16.8534C18.77 8.9661 17.8117 12.0434 17.3326 13.8019C16.8534 15.5604 14.9369 15.8697 14.9369 15.8697H9L6.79143 14.7719V16H2Z"
                fill="black"
              />
              )}
              
              <path
                d="M6.79143 10.254V9.40572H2V16H6.79143V14.7719M6.79143 10.254C6.79143 10.254 7.94834 9.61701 8.5 9C9.15551 8.26684 9.13417 8.27672 9.66629 6.76801C9.96004 5.93512 10.1454 4.1303 10.1454 4.1303C10.1454 4.1303 11.1213 3.83713 11.5829 4.1303C12.0694 4.43932 12.5411 5.84347 12.5411 6.76801C12.5411 7.69254 12.3375 8.52648 12.3375 8.52648H16.8534C18.77 8.9661 17.8117 12.0434 17.3326 13.8019C16.8534 15.5604 14.9369 15.8697 14.9369 15.8697H9L6.79143 14.7719M6.79143 10.254V14.7719"
                stroke="black"
                strokeLinejoin="round"
              />
              <path
                d="M7 8V17"
                stroke="white"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="number helpful-smbox">{(isHelpful === EnumHelpful.Up ? 1: 0) + props.item.positiveFeedbackCount}</div>
          <button className="vote-button" onClick={() => setIsHelpful(EnumHelpful.Down)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {
                isHelpful === EnumHelpful.Down && (
                  <path
                    d="M6.79143 9.74598V10.5943H2V4H6.79143V5.22814M6.79143 9.74598C6.79143 9.74598 7.94834 10.383 8.5 11C9.15551 11.7332 9.13417 11.7233 9.66629 13.232C9.96004 14.0649 10.1454 15.8697 10.1454 15.8697C10.1454 15.8697 11.1213 16.1629 11.5829 15.8697C12.0694 15.5607 12.5411 14.1565 12.5411 13.232C12.5411 12.3075 12.3375 11.4735 12.3375 11.4735H16.8534C18.77 11.0339 17.8117 7.95657 17.3326 6.19809C16.8534 4.43962 14.9369 4.1303 14.9369 4.1303H9L6.79143 5.22814M6.79143 9.74598V5.22814"
                    fill="black"
                  />
                )
              }
            
              <path
                d="M6.79143 9.74598V10.5943H2V4H6.79143V5.22814M6.79143 9.74598C6.79143 9.74598 7.94834 10.383 8.5 11C9.15551 11.7332 9.13417 11.7233 9.66629 13.232C9.96004 14.0649 10.1454 15.8697 10.1454 15.8697C10.1454 15.8697 11.1213 16.1629 11.5829 15.8697C12.0694 15.5607 12.5411 14.1565 12.5411 13.232C12.5411 12.3075 12.3375 11.4735 12.3375 11.4735H16.8534C18.77 11.0339 17.8117 7.95657 17.3326 6.19809C16.8534 4.43962 14.9369 4.1303 14.9369 4.1303H9L6.79143 5.22814M6.79143 9.74598V5.22814"
                stroke="black"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="number helpful-smbox">{(isHelpful === EnumHelpful.Down ? 1 : 0) + props.item.negativeFeedbackCount}</div>
        </div>
        {isShow 
        ? <div className={classNames('report-review', {reported: isReport})} onClick={() => setIsReport(true)}>{isReport ? 'Review reported.' : 'Report review'}</div> 
        :<div className="right" onClick={() => setIsShow(true)}>Read More</div>}
      </div>
      <p className={classNames('tankinfo', {show: isHelpful !== EnumHelpful.Default})}>Thank you! You have successfully submitted feedback for this review</p>
    </div>
  );
};
