import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

//Redux middleware is a way to enhance redux's behavior. to impliment any middleware we need to use Redux's "applyMiddleware"
//reduxImmutableStateInvariant - This will warn us if we accidentally mutate Redux state

//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; AND reduxImmutableStateInvariant()
//are development basisi not need for production
