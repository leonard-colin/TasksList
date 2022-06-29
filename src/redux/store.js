import { legacy_createStore as createStore, combineReducers } from "redux"
import TasksScreen from "../screens/Tasks"

// Selectors: sélectionner une partie de notre store
export const getTasks = store => store.taskList
export const getCompletedTasks = store => store.taskList.filter(tast => taskList.completed)

// Actions: fonctions aui renvoient un objet aux reducers - { type: MON_ACTION, payload: { DATA } }

// Add_TASK
const ADD_TASK = "ADD_TASK"

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title
    }
  }
}

// TOGGLE_TASK
const TOGGLE_TASK = "TOGGLE_TASK"

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {id}
  }
}

// DELETE_TASK
const DELETE_TASK = "DELETE_TASk"

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {id}
  }
}

// Reducers: fonctions retournent un nouveau state
const initialState = []  // [{id:1, title: "Init task", isCompleted: false}]

const taskList = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return [...state, {
        id: new Date().getTime(),
        title: action.payload.title,
        isCompleted: false
      }]

    case TOGGLE_TASK:
      let newState = []
      state.forEach(task => {
        if (task.id === action.payload.id) {
          newState.push({
            ...task, 
            isCompleted: !task.isCompleted,
          })
          return
        }
        newState.push(task)
      })
      return newState
    
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id)

      // SAME AS:
      // let newStateAfterDelete = []
      // state.forEach(task => {
      //   if (task.id !== action.payload.id) {
      //     newStateAfterDelete.push(task)
      //   }
      // })
      // return newStateAfterDelete

    default:
      return state
  }
}

const rootReducers = combineReducers({
  taskList,
})

// Store: attaché à React - accessible depuis tous les composants

export const store = createStore(rootReducers)