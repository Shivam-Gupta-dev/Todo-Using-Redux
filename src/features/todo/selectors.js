// selectors.js
import { createSelector } from 'reselect';

export const selectUpdatedTodoInfo = createSelector(
  (state) => state.todos,
  (todos) => {
    const updatedTodo = todos.find(todo => todo.update);
    return updatedTodo ? [true, updatedTodo.id] : [false, null];
  }
);
