import React , {lazy,Suspense} from 'react';
import './App.scss';
////////////////////////////
import {Switch,Route} from 'react-router-dom';
import Spinner from './component/spinner/spinner';
///////////////////////////
const Login = lazy( ()=> import('./component/LoginRegister/Login/Login'));
const Register = lazy( ()=> import('./component/LoginRegister/Register/register'));
////////////////////////////

const App =() => {
  return (
    <div className="App">
       <Switch>
            <Suspense fallback={<Spinner/>}>
                {/* <Route path="/" exact component = {MainPage}/> */}
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                {/* <Route path="/Profile" exact component={Profile}/> */}
                {/* <Route path="/ChangePass" exact component={ChangePass}/> */}
            </Suspense>
        </Switch>
    </div>
  );
}

export default App;
