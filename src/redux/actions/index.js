import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionsType';

// Actions: fonctions qui renvoient un objet aux reducers - { type: MON_ACTION, payload: { DATA } }

// Add_TASK

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
}

// TOGGLE_TASK

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {id},
  };
}

// DELETE_TASK

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {id},
  };
}
