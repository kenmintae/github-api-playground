import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/";

const loggerMiddleware = createLogger();
const middleWares = applyMiddleware(thunkMiddleware, loggerMiddleware);
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleWares)
  );
}
