import { bindActionCreators } from "redux";

const favouritemovies = {
  favsid: [],
  counter: 0,
};
const initialvalues = {
  lang: "En",
  counter: 0,
};
export default function langred(state = initialvalues, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
// export default function favitems(state= favouritemovies, action) {
//   switch (action.type) {
//     case "AddFavourite":
//       return{
//           ...state,

//     };
//     default:
//       return state;
//   }
// }
