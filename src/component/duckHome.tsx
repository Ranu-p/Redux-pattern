

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Xyz } from '../duck';



const App = () => {
 const dispatch = useDispatch();
 const parkingState1 = useSelector((state: Xyz) => state.task);

 console.log("parkingState4545454545454", parkingState1);

 return (
  <div>
   <p>duckpattern </p>
  </div>

 )
}
export default App;



