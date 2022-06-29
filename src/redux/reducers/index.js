import { combineReducers } from "redux"
import { taskList } from "./tasksList"

export const rootReducers = combineReducers({
    taskList,
  })