import axios from 'axios';
const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHENGED',
  payload: event.target.value
});

export const search = () => {
  console.log('search');
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}


export const add = (description) => {
  const request = axios.post(URL, {description});
  return {
    type: 'TODO_ADDED',
    payload: request
  }
}