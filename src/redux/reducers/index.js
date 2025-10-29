import { combineReducers } from "redux";
import songReducer from "./song";

const rootReducer = combineReducers({
    library: songReducer
});

export default rootReducer;
