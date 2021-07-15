import './App.css';
import React from "react";
import  {Redirect,Route, Switch} from "react-router-dom";
import ContentPage from "./components/ContentPage";
import AuthComponent from "./components/AuthComponent";

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <Switch>
              <Route path='/login' component={AuthComponent}/>
              <Route path='/' exact component={ContentPage}/>
              <Route path='*'> <Redirect to="/login"/></Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
