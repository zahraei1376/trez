import React from 'react';
import './Login.scss';
// //////////////////
import { Link } from 'react-router-dom';
import PopUp from '../../popUp/popup';
import ReCAPTCHA from "react-google-recaptcha";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.number=""
        this.state={
            message:"",
            token:"",
            status:null,
            username:"",
            password:"",
            Numbers:""
        }
    }

    handleUsername = (e)=>{
        this.setState({username:e.target.value})
    }

    handlePassword = (e)=>{
        this.setState({password:e.target.value})
    }

    handelLogin =(e)=>{
        e.preventDefault();
        console.log("handelLogin")
        if(this.state.Numbers=== this.number){
            var data = {
                UserName : this.state.username,
                PassWord :this.state.password,
                AccessHash :""
            }
            fetch("Https://smscore.trez.ir/api/V1/User/LoginUser", {
                headers: {
                    'Content-Type': 'application/json'
                    },
                method:"POST",
                body: JSON.stringify(data)
            })
            .then((response)=>{ 
                // this.setState({status:response.resultCode})
                return response.json();   
            })
            .then((dataRes)=>{ 
                this.setState({status:dataRes.resultCode ,message:dataRes.message , token:dataRes.result.result});
                
            })
            .catch(
                console.log('err')
            )
        }  
        else{
            return <PopUp status={1} message={"تصویر امنیتی وارد شده مطابقت ندارد"}/>
        }
       
    }

    handeNewRegister =(e)=>{
        
    }

    handleNumbers = (e) =>{
        this.setState({Numbers:e.target.value})
        // console.log("nnew")
        // for (let index = 0; index < 5; index++) {
        //     this.numbers += Math.floor(Math.random()*10)+1;
        // }
        // return this.numbers;
    }

    

    // createNumbers = () =>{
    //     console.log("nnew")
    //     for (let index = 0; index < 5; index++) {
    //         this.number += Math.floor(Math.random()*10)+1;
    //     }
    //     return this.number;
    // }
    onChange(value) {
        console.log("Captcha value:", value);
    }

    render(){
        
        if(this.state.status!=null){
            return <PopUp status={this.state.status} message={this.state.message} />
        }

        return(
            <div className="login">
                <img className="login__img" src="https://smscore.trez.ir/Uploads/WebApp/1/Headers/OutImg.jpg" alt="login" />
                <div className="login__groupsInput">
                    <div className="login__groupInput">
                        <i class='fa fa-user login__groupInput-icon'></i>
                        <input className="login__Input" type="text" name="username" value={this.state.username} placeholder="نام کاربری" onChange={this.handleUsername} />
                    </div>
                    <div className="login__groupInput">
                        <i class='fa fa-lock login__groupInput-icon'></i>
                        <input className="login__Input" type="text" name="password" value={this.state.password} placeholder="پسورد" onChange={this.handlePassword} />
                        
                    </div>
                </div>
                <div className="login__group margin-bottom-small">
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={this.onChange}
                    />
                    {/* <div className="login__group-numbers">
                        <i class='fas fa-sync-alt' onClick={this.createNumbers}></i>{this.number}
                    </div>
                    <input className="login__group-input" type="text" name="numbers" value={this.state.Numbers} onChange={this.handleNumbers} /> */}
                </div>
                <button className="login__btn margin-top-small" onClick={this.handelLogin}>ورود به حساب کاربری</button>
                <button className="login__btn green" onClick={this.handeNewRegister}>حساب کاربری جدید</button>
                <div className="login__links margin-top-small margin-bottom-small">
                    <Link to="" className="login__link">آیا ثبت نام نکرده اید؟</Link>
                    <Link to="" className="login__link">آیا رمزعبور خود را فراموش کرده اید؟</Link>
                </div>
            </div>
        )
    }
};

export default Login;