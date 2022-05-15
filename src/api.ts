import Axios from 'axios';

export const getReviews = (sort?: string) => {
  return Axios({
    url: '/api/models/BTE67/reviews',
    withCredentials: true,
    timeout: 0,
    params: {
      bazaarVoiceLocale: 'en_US',
      limit: 10,
      offset: 0,
      sort: sort || 'newest'
    }
  })
}