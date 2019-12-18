const GET_DATA = 'skillcrucial//users/GET_DATA'
const ERROR_HAPPENED = 'skillcrucial//users/ERROR_HAPPENED'

const InitialState = {
  list: []
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export function getData() {
  return (dispatch) => {
    return fetch('/api/users')
      .then(res => res.json())
      .then((json) => {
        dispatch({
          type: GET_DATA,
          list: json
        })
      })
      .catch((err) => {
        dispatch({
          type: ERROR_HAPPENED,
          err
        })
      })
  }
}
