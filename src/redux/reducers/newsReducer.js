import constants from '../../constants';

export const InitialState = {
  newsList: [],
}

export default newsListReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case constants.SET_NEWS_LIST:
      return { ...state, newsList: payload, isSuccess: true, reloadNews: true }
    default:
      return state
  }
}