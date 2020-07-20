import React from 'react';
import './Register.scss';
import PopUp from '../../popUp/popup';
import ReCAPTCHA from "react-google-recaptcha";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mobileNumber:"",
            status:"",
            message:"",
            errors:"",
            showPopup:false,
            check:false
        }
    }

    submitRegister = (e)=>{
        e.preventDefault(); 
        if (this.state.check && this.state.value){
            console.log("register");
            var data = {
                MobileNumber:this.state.mobileNumber,
                AccessHash :"9e1770e4-2c27-4e48-b72d-f1b9e3b519ab"
            }
            fetch("Https://smscore.trez.ir/api/V1/User/RegisterUserMobile", {
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
                this.setState({status:dataRes.resultCode , message:dataRes.message , showPopup:true , errors:dataRes.errors});
            })
            .catch(
                console.log('err')
            )
        } else {
            this.setState({status:400,message:"موارد خواسته شده اعم از پذیرش قوانین  و تایید هویت را انجام دهید!!"})
            this.togglePopup();
        } 
    }
    
    handlemobileNumber = (e)=>{
        this.setState({mobileNumber: e.target.value});
    }

    togglePopup = () =>{
        this.setState({showPopup: !this.state.showPopup});
    }

    onChangechech = () =>{
        this.setState({check: !this.state.check});
    }

    onChange = (value) => {
        console.log("Captcha value:", value);
        this.setState({ value });
    }

    render(){
        return(
            <div className="register">
                <h2 className="register__title margin-top-small">عضویت</h2>
                <h2 className="register__Subtitle margin-top-small">شماره همراه خود را وارد کنید</h2>
                <input type="text" className="register__input margin-top-small" value={this.state.mobileNumber} onChange={this.handlemobileNumber}></input>
                <p className="register__Sub margin-bottom-small">شماره همراه وارد شده باید به صورت 09116665601 باشد</p>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={this.onChange}
                />
                <div className="register__rules margin-top-small">
                    <input type="checkbox" id="rules" name="rules" value="Car" style={{marginLeft:"8px"}} onChange={this.onChangechech} />
                    <label for="rules" style={{fontSize:".8rem"}}> من شرایط و قوانین را مطالعه کردم</label><br></br>
                </div>
                <div className="register__btns margin-top-small margin-bottom-small">
                    <button className="register__btn green" onClick={this.submitRegister}>ثبت نام</button>
                    <button className="register__btn blue"> انصراف</button>
                </div>
                {this.state.showPopup &&  this.state.message ? <PopUp  message = {this.state.message} status={this.state.status} closePopup={this.togglePopup} /> : null}
                {this.state.showPopup &&  this.state.errors ? <PopUp  message = {this.state.errors.MobileNumber[0]} status={this.state.status} closePopup={this.togglePopup} /> : null}
            </div>
        )
    }
};

export default Register;