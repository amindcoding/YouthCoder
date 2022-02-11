import { GET_REQUEST_LIST, GET_REQUEST_DETAIL, POST_REQUEST_CREATE, PUT_REQUEST_UPDATE } from '../actions/requestAction';

let initialState = {
  getRequestList: false,
  getRequestDetail: false,
  getResponDataRequest: false,
  errorRequestList: false,
  errorRequestDetail: false,
  errorResponDataRequest: false,
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_LIST:
      return {
        ...state,
        getRequestList: action.payload.data,
        errorRequestList: action.payload.errorMessage,
      };

    case GET_REQUEST_DETAIL:
      return {
        ...state,
        getRequestDetail: action.payload.data,
        errorRequestDetail: action.payload.errorMessage,
      };

    case POST_REQUEST_CREATE:
      return {
        ...state,
        getResponDataRequest: action.payload.data,
        errorResponDataRequest: action.payload.errorMessage,
      };

    case PUT_REQUEST_UPDATE:
      return {
        ...state,
        getResponDataRequest: action.payload.data,
        errorResponDataRequest: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default request;
