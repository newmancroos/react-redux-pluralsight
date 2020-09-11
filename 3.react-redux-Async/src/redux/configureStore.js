import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
export default function configureStore(initialState) {
  const composeEnahncers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnahncers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}

//Redux middleware is a way to enhance redux's behavior. to impliment any middleware we need to use Redux's "applyMiddleware"
//reduxImmutableStateInvariant - This will warn us if we accidentally mutate Redux state
