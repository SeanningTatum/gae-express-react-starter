import {actionTypes} from '../actions/user'

const initalState = {
  id: '',
}

const todos = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return state
    default:
      return state
  }
}

export default todos
