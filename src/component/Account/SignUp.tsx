import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { parkingActions } from '../../redux/actions';
import { RootState } from "../../redux/reducers";
import rootReducer from "../../redux/reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider, } from "react-redux";
import thunk from "redux-thunk";

const App = () => {
 return (
  <div>
   <p>ranu  login </p>
   <button >submit</button>
  </div>

 )
}
export default App;