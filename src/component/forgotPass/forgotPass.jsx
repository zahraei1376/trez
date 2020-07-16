import React from 'react';
import './forgot.scss';
import ReCAPTCHA from "react-google-recaptcha";

class ForgotPass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mobileNumber:"",
            status:"",
            message:""
        }
    }

    submitRegister = (e)=>{
        e.preventDefault();  
        console.log("register");
        var data = {
            MobileNumber:this.state.mobileNumber,
            AccessHash :""
        }
        fetch("Https://smscore.trez.ir/api/V1/User/ForgetPasswordWithUserName ", {
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
            this.setState({status:dataRes.resultCode ,message:dataRes.message});
        })
        .catch(
            console.log('err')
        )
    }
    
    handlemobileNumber = (e)=>{
        this.setState({mobileNumber: e.target.value});
    }

    render(){
        return(
            <div className="forgot">
                <div className="forgot__title">بازیابی رمز عبور و نام کاربری</div>
                <h2 className="register__Subtitle margin-top-small">شماره همراه خود را وارد کنید</h2>
                <input type="text" className="register__input margin-top-small" value={this.state.mobileNumber} onChange={this.handlemobileNumber}></input>
                <p className="register__Sub margin-bottom-small">شماره همراه وارد شده باید به صورت 09116665601 باشد</p>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={this.onChange}
                />
                <div className="register__rules margin-top-small">
                    <input type="checkbox" id="rules" name="rules" value="Car" style={{marginLeft:"8px"}}/>
                    <label for="rules"> من شرایط و قوانین را مطالعه کردم</label><br></br>
                </div>
                <div className="register__btns margin-top-small margin-bottom-small">
                    <button className="register__btn green" onClick={this.submitRegister}>ثبت نام</button>
                    <button className="register__btn blue"> انصراف</button>
                </div>
                
            </div>
        )
    }
};

export default ForgotPass;