import { legacy_createStore as createStore, combineReducers } from "redux"
import { rootReducers } from "./reducers"

// Store: attaché à React - accessible depuis tous les composants

export const store = createStore(rootReducers)