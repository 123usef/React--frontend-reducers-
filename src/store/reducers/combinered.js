import { combineReducers } from "redux";
import langred from "./langred";
import favitems from "./Favourite";
export default combineReducers({
  favourites: favitems,
  language: langred,
});
