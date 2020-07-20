import React , {lazy,Suspense} from 'react';
import './App.scss';
////////////////////////////
import {Switch,Route} from 'react-router-dom';
import Spinner from './component/spinner/spinner';
import Nav from "./component/menu/menu";
///////////////////////////
const HomePage = lazy( ()=> import('./pages/homePage/homePage'));
const Login = lazy( ()=> import('./component/LoginRegister/Login/Login'));
const Register = lazy( ()=> import('./component/LoginRegister/Register/register'));
const ForgotPass = lazy( ()=> import("./component/forgotPass/forgotPass"));
////////////////////////////

const App =() => {
  return (
    <div className="App">
      <Nav/>
       <Switch>
            <Suspense fallback={<Spinner/>}>
                <Route path="/" exact component = {HomePage}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/forgotPass" exact component={ForgotPass}/>
            </Suspense>
        </Switch>
    </div>
  );
}

export default App;
