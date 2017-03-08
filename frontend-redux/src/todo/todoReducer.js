const todoReducerInitialState = {
  description: '',
  list: []
}

export const todoReducer = (state = todoReducerInitialState, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHENGED':
      return {...state, description: action.payload}
    case 'TODO_SEARCHED':
      return {...state, list: action.payload.data}
    default:
      return state
  }
}