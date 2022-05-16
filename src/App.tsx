import React, { useLayoutEffect, useState } from "react";
import Star from './components/star'
import Progress from "./components/progress";
import Review from './components/review';
import "./App.less";
import { getReviews } from "./api";
import { EnumFilter, EnumSort, IReview } from "./interface";
import { AxiosResponse } from "axios";
import classNames from "classnames";
import classnames from "classnames";

function App() {
  const [total, setTotal] = useState<number>(0);  // 总计
  const [reviews, setReviews] = useState<IReview[]>([]); // 右边的数据
  const [page, setPage] = useState<number>(0); // 自己给分个页
  const [filtered, setFiltered] = useState<string | undefined>(undefined);
  const [expand, setExpand] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useLayoutEffect(() => {
    getList();
  }, [])

  const getList = (sort?: string) => {
    setTotal(0);
    setReviews([]);
    setPage(0);
    setLoading(true);
    // 拉接口啦
    getReviews(sort).then((res:  AxiosResponse<{reviews: IReview[], totalResults: number}>) => {
      setLoading(false)
      if(!res || !res.data) {
        return;
      }
      
      setTotal(res.data.totalResults);
      setReviews(res.data.reviews);
    })
  }
  // 左边筛选项 
  const handleFileter = (filter: EnumFilter) => {
    setFiltered(filter);
  }
  // 右边的sort by 
  const handleSort = (item: string) => {
    getList(item);
  }
  // 右边是否展开
  const switchExpand = () => {
    setExpand(!expand)
  }
  // 每页三条
  const sliceIndex = 3 * page + 3;

  if(loading) {
    return <div>Loading....</div>
  }


  return (
    <div className="App">
      <h5>RATINGS & REVIEWS</h5>
      <div className="content-wrapper">
        <div className="panel">
          <strong className="total">{total} Reviews</strong>
          <div className="rating-total">
            <div className="rating-star-wrapper">
                <Star width={100}/>
                <Star width={100}/>
                <Star width={100}/>
                <Star width={100}/>
                <Star width={50}/>
            </div>
            <div className="rank">4.5</div>
          </div>
          <div className="category-rating">
            <div className="comfort">
              <div className="star-box">
                <Star width={100} size="small" />
                <span>4.3</span>
              </div>
              <div className="text-content">comfort</div>
            </div>
            <div className="quality">
            <div className="star-box">
                <Star width={100} size="small" />
                <span>4.6</span>
              </div>
              <div className="text-content">quality</div>
            </div>
          </div>
          <div className="border-bottomline" />

          <div className="switch">
            <Progress title="Size" minText="Too small" maxText="Too large" progress={50}/>
            <Progress title="Width" minText="Too narrow" maxText="Too wide" progress={50}/>
          </div>
          <div className="border-bottomline" />
          <div className="filter-wrapper">
            <div className="panel-title">Filter reviews by</div>
            <div className="tab-group">
              <div className={classNames('tab', {'tab-active': filtered === EnumFilter.Color})} onClick={handleFileter.bind(null, EnumFilter.Color)}>
                <span>Color</span>
                <span className="close">X</span>
              </div>
              <div className={classNames('tab', {'tab-active': filtered === EnumFilter.Satisfaction})} onClick={handleFileter.bind(null, EnumFilter.Satisfaction)}>
                <span>Satisfaction</span>
                <span className="close">X</span>
              </div>
              <div className={classNames('tab', {'tab-active': filtered === EnumFilter.Design})} onClick={handleFileter.bind(null, EnumFilter.Design)}>
                <span>Design</span>
                <span className="close">X</span>
              </div>
              <div className={classNames('tab', {'tab-active': filtered === EnumFilter.Comfort})} onClick={handleFileter.bind(null, EnumFilter.Comfort)}>
                <span>Comfort</span>
                <span className="close">X</span>
              </div>
              <div className={classNames('tab', {'tab-active': filtered === EnumFilter.Quality})} onClick={handleFileter.bind(null, EnumFilter.Quality)}>
                <span>Quality</span>
                <span className="close">X</span>
              </div>
            </div>
          </div>
        </div>

        <div className="review-list">
          <div className="sort-btn">
            {/* {!expand && <span>Sort By <img src={require('./arrow-down.png')} /></span>} */}
              <dl className={classnames('sort-list', {show: expand})} onClick={switchExpand}>
                <dt>Sort By <img src={require('./arrow-down.png')} alt="arrow-down" /></dt>
                { expand && Object.values(EnumSort).map((item) => {
                    console.log(item);
                    return <dd key={item} onClick={handleSort.bind(null, item)}>{item}</dd>
                  })
                }
              </dl>
          
            
          </div>
          <div className="list-group">
            {reviews.slice(0, sliceIndex).map(item => {
              return <Review item={item} key={item.id}/>
            })}
          
          </div>
          {sliceIndex < reviews.length && <div className="list-more" onClick={() => setPage(page + 1)}>Read more reviews</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
