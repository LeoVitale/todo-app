const todoReducerInitialState = {
  description: 'Ler livro',
  list: [
    {
      _id: 1,
      description: 'Pagar fatura do cartão',
      done: true
    }, {
      _id: 2,
      description: 'Reunião com a equipe às 10:00',
      done: false
    }, {
      _id: 3,
      description: 'Consulta Médica na terça',
      done: false
    }
  ]
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