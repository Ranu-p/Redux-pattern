
import parkingreducer from './parkingdetails';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
 Parkingdetails: parkingreducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
