import React, { Suspense } from 'react';
import rootReducer from "../src/redux/reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider, } from "react-redux";
import Home from './component/home'
import thunk from "redux-thunk";
import store from '../src/duck';
import { SnackbarProvider } from "notistack";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import indexRoutes from "./routes/indexRoutes";

function App() {
 return (
  <div>
   <>
    <Router basename={""}>
     <Switch>
      {indexRoutes.map((prop: any, key) => (
       <Route path={prop.path} component={prop.component} key={key} />
      ))}
     </Switch>
    </Router>
   </>
  </div>
 );
}

const AppWrapper = () => {
 const store = createStore(rootReducer, applyMiddleware(thunk));
 return (
  <Provider store={store}>
   <SnackbarProvider maxSnack={3}>
    <ToastProvider>
     <Suspense fallback={<Home />}>
      <App />
     </Suspense>
    </ToastProvider>
   </SnackbarProvider>
  </Provider>
 );
};

export default AppWrapper;


