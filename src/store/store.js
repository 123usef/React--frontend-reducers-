import { createStore } from "redux";
// import reducer from "./reducers/langred";
import { composeWithDevTools } from "redux-devtools-extension";
import  reducer  from "./reducers/combinered";
const store = createStore(reducer, composeWithDevTools());

export default store;
