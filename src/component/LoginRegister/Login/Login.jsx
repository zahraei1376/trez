import React from 'react';
import './Login.scss';
// //////////////////
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'
/////////////////////
import PopUp from '../../popUp/popup';
import { setCurrentUser } from '../../../redux/user/user.actions';
import Spinner from '../../spinner/spinner';
////////////////////////

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:"",
            status:null,
            username:"",
            password:"",
            Numbers:"",
            value:"",
            isloading:false,
            showPopup:false,
            randomNumber:""
        }
    }

    handleUsername = (e)=>{
        this.setState({username:e.target.value})
    }

    handlePassword = (e)=>{
        this.setState({password:e.target.value})
    }

    handleNumbers = (e) =>{
        this.setState({Numbers:e.target.value})
    }

    handeNewRegister = () =>{
        this.props.history.push(`/register`)
    }

    onChange = (value) => {
        this.setState({ value });
    }

    togglePopup = () =>{
        this.setState({showPopup: !this.state.showPopup});
    }

    createNumbers = () =>{
        var num = "";
        for (let index = 0; index < 6; index++) {
            num += (Math.floor(Math.random() * 10));
        }
        this.setState({randomNumber:num});
        console.log(this.randomNumber)
    }

    refreshNumber = () =>{
        console.log("refresh");
        this.createNumbers();
    }

    handelLogin =(e)=>{
        e.preventDefault();
        if(!(this.state.username && this.state.password)){
            this.setState({status:1,message:"اطلاعات صحیح را وارد کنید!!"});
            this.togglePopup();
        }
        else if (this.state.Numbers !== this.state.randomNumber){
            this.setState({status:1,message:"تصویر امنیتی وارد شده مطابقت ندارد!!"});
            this.togglePopup();
        }
        else{
            this.setState({isloading:true});
            var data = {
                UserName : this.state.username,
                PassWord :this.state.password,
                AccessHash :"9e1770e4-2c27-4e48-b72d-f1b9e3b519ab"
            }
            fetch("Https://smscore.trez.ir/api/V1/User/LoginUser", {
                headers: {
                    'Content-Type': 'application/json'
                    },
                method:"POST",
                body: JSON.stringify(data)
            })
            .then((response)=>{ 
                return response.json();   
            })
            .then((dataRes)=>{ 
                this.setState({status:dataRes.resultCode , message:dataRes.message , showPopup:true });
                this.setState({isloading:false});
                if(dataRes.resultCode === 0){
                    // this.setState({isloading:false});
                    this.props.setCurrentUser(dataRes.result.result);
                    return <Redirect to="/" />
                }
                
            })
            .catch(
                console.log('err')
            )
        }
    }

    render(){
        // this.createNumbers();
        return(
            <div className="login">
                {this.state.isloading ? <Spinner/> : null}
                <img className="login__img margin-top-small" src="https://smscore.trez.ir/Uploads/WebApp/1/Headers/OutImg.jpg" alt="login" />
                <div className="login__groupsInput">
                    <div className="login__groupInput">
                        <i class='fa fa-user login__groupInput-icon'></i>
                        <input className="login__Input" type="text" name="username" value={this.state.username} placeholder="نام کاربری" onChange={this.handleUsername} />
                    </div>
                    <div className="login__groupInput">
                        <i class='fa fa-lock login__groupInput-icon'></i>
                        <input className="login__Input" type="password" name="password" value={this.state.password} placeholder="پسورد" onChange={this.handlePassword} />
                    </div>
                </div>
                <div className="login__group margin-bottom-small numbers">
                    <div>
                        {this.state.randomNumber}<i className="fa fa-refresh numbers__icon" onClick={this.refreshNumber}></i>
                    </div>
                    <input type="text" value={this.state.Numbers} onChange={this.handleNumbers} />
                </div>
                <button className="login__btn margin-top-small" onClick={this.handelLogin}>ورود به حساب کاربری</button>
                <button className="login__btn green" onClick={this.handeNewRegister}>حساب کاربری جدید</button>
                <div className="login__links margin-top-small margin-bottom-small">
                    <Link to="/register" className="login__link">آیا ثبت نام نکرده اید؟</Link>
                    <Link to="/forgotPass" className="login__link">آیا رمزعبور خود را فراموش کرده اید؟</Link>
                </div>
                
                {this.state.showPopup &&  this.state.message ? <PopUp  message = {this.state.message} status={this.state.status} closePopup={this.togglePopup} /> : null}
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (data) => dispatch(setCurrentUser(data))
});

export default connect(null , mapDispatchToProps)(Login);