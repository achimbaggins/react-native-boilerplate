import axios from 'axios'
import configs from '../../configs'
import constants from '../../constants'

export const get_news = (cat) => (
    dispatch => {
      return (
        axios.get(`${configs.NEWS}/posts?categories=1`,{
          headers:{
            'Content-Type': 'application/json',
          }
        })
        .then((res) => {
          let {data, headers} = res
          if(Array.isArray(data)) dispatch( { type: constants.SET_NEWS_LIST, payload:{ newsList: data } } )
        })
        .catch(err => {
          if(!err.response){
          }else{
          }
        })
      )
    }
  )

export function get_news_detail(){

}