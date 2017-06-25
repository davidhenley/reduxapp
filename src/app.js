import { createStore } from 'redux';

const reducer = (state = {books: []}, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return { books: [ ...state.books, ...action.payload ] };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('Current State:', store.getState());
});

store.dispatch({
  type: 'ADD_BOOK',
  payload: [{
    id: 1,
    title: 'Book One'
  }]
});
store.dispatch({
  type: 'ADD_BOOK',
  payload: [
    {
      id: 2,
      title: 'Book Two'
    },
    {
      id: 3,
      title: 'Book Three'
    }
  ]
});
