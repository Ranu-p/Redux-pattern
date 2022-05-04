
import React from "react";
import { Switch, Route } from "react-router-dom";
import homeRoutes from "../routes/homeRoutes";


export default function HomeLayoutFunction() {

 return (
  <div>
   <Switch>
    {homeRoutes.map((prop, key) => {
     return (
      <Route
       component={prop.component}
       key={key}
       path={prop.path}
      />
     );
    })}
   </Switch>
  </div>
 );
}
