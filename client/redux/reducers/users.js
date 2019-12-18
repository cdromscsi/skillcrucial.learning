const GET_DATA = 'skillcrucial//users/GET_DATA'

const InitialState = {
  list: [{ name: 'test' }]
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        list: state.list.concat(action.list)
      }
    default:
      return state
  }
}

export function getData () {
  return (dispatch) => {
    dispatch({
      type: GET_DATA,
      list: [{ name: +(new Date()) }]
    })
  }
}
