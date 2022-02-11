import axios from 'axios';

export const GET_REQUEST_LIST = 'GET_REQUEST_LIST';
export const GET_REQUEST_DETAIL = 'GET_REQUEST_DETAIL';
export const POST_REQUEST_CREATE = 'POST_REQUEST_CREATE';
export const PUT_REQUEST_UPDATE = 'PUT_REQUEST_UPDATE';

export const getRequestList = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3004/request')
      .then(function (response) {
        dispatch({
          type: GET_REQUEST_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_REQUEST_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getRequestDetail = (id) => {
  return (dispatch) => {
    axios
      .get('http://localhost:3004/request/' + id)
      .then(function (response) {
        dispatch({
          type: GET_REQUEST_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_REQUEST_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postRequestCreate = (data) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3004/request', data)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_REQUEST_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_REQUEST_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
    // window.location.href = '/';
  };
};

export const deleteDataRequest = () => {
  return (dispatch) => {
    dispatch({
      type: GET_REQUEST_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_REQUEST_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const putRequestUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put('http://localhost:3004/request/' + id, data)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: PUT_REQUEST_UPDATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_REQUEST_UPDATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
    // window.location.href = '/';
  };
};

export const deleteRequest = (id) => {
  return (dispatch) => {
    axios
      .delete('http://localhost:3004/request/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // window.location.href = '/';
  };
};
