import React from 'react';
import "./forgot.scss";
import ReCAPTCHA from "react-google-recaptcha";
import PopUp from '../popUp/popup';

class ForgotPass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserName:"",
            MobileNumber:"",
            NationalCode:"",
            valuePass:"",
            valueUser:"",
            isloading:false,
            showPopup:false
        }
        // this.state = { name: '' };
    }

    togglePopup = () =>{
        this.setState({showPopup: !this.state.showPopup});
    }

    onChangeforgotPass = (value) => {
        this.setState({ valuePass:value });
    }

    onChangeforgotUser = (value) => {
        this.setState({ valueUser:value });
    }

    handleChangeForgotPass = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmitPass = (event) => {
        console.log(this.state.UserName, this.state.MobileNumber , this.state.NationalCode);
        event.preventDefault();
        if(!(this.state.UserName && this.state.MobileNumber && this.state.NationalCode)){
            this.setState({status:1,message:"اطلاعات صحیح را وارد کنید!!"});
            this.togglePopup();
        }
        else if (!this.state.valuePass){
            this.setState({status:1,message:"تایید هویت را انجام دهید"});
            this.togglePopup();
        }
        else{
            this.setState({isloading:true});
            var data = {
                UserName : this.state.UserName,
                MobileNumber :this.state.MobileNumber,
                NationalCode:this.state.NationalCode,
                AccessHash :"9e1770e4-2c27-4e48-b72d-f1b9e3b519ab"
            }
            fetch("Https://smscore.trez.ir/api/V1/User/ForgetPasswordWithUserName", {
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
                console.log(dataRes);
                this.setState({status:dataRes.resultCode , message:dataRes.message , showPopup:true });
                this.setState({isloading:false});
                // if(dataRes.resultCode === 0){
                //     // this.setState({isloading:false});
                //     this.props.setCurrentUser(dataRes.result.result);
                //     return <Redirect to="/" />
                // }
                
            })
            .catch(
                console.log('err')
            )
        }

        // fetch('Https://smscore.trez.ir/api/V1/User/ForgetPasswordWithUserName', {
        //     method: 'POST',
        //     // We convert the React state to JSON and send it as the POST body
        //     body: JSON.stringify(this.state)
        //     }).then(function(response) {
        //     console.log(response)
        //     return response.json();
        //     });

        // event.preventDefault();
    }

    handleChangeUser = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmitUser = (event) => {
        console.log(this.state.UserName, this.state.MobileNumber , this.state.NationalCode);
        event.preventDefault();
        if(!(this.state.MobileNumber && this.state.NationalCode)){
            this.setState({status:1,message:"اطلاعات صحیح را وارد کنید!!"});
            this.togglePopup();
        }
        else if (!this.state.valueUser){
            this.setState({status:1,message:"تایید هویت را انجام دهید"});
            this.togglePopup();
        }
        else{
            this.setState({isloading:true});
            var data = {
                MobileNumber :this.state.MobileNumber,
                NationalCode:this.state.NationalCode,
                AccessHash :"9e1770e4-2c27-4e48-b72d-f1b9e3b519ab"
            }
            fetch("Https://smscore.trez.ir/api/V1/User/ForgetPasswordWithOutUserName", {
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
                console.log(dataRes);
                this.setState({status:dataRes.resultCode , message:dataRes.message , showPopup:true });
                this.setState({isloading:false});
            })
            .catch(
                console.log('err')
            )
        }
    }

    render(){
        return(
            <div className="forgot">
                <div className="forgot__title">بازیابی رمز عبور و نام کاربری</div>
                <p className="forgot__Subtitle margin-top-small">لطفا اطلاعات زیر را به دقت وارد کنید و دکمه ارسال را کلیک کنید.در صورت صحت اطلاعات کلمه عبور جدید برای شما پیامک خواهد شد .</p>
                <div className="forgot__forms margin-top-large margin-bottom-small">
                
                    <form className="forgot__form" onSubmit={this.handleSubmitPass}>
                        <div className="forgot__form-title">فراموشی رمز عبور</div>
                        {this.state.showPopup &&  this.state.message ? <PopUp  message = {this.state.message} status={this.state.status} closePopup={this.togglePopup} /> : null}
                        <div className="forgot__groupsInput margin-top-small">
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable">نام کاربری</label>
                                <input className="forgot__Input" type="text" name="UserName" placeholder="Ahmad123" onChange={this.handleChangeForgotPass} />
                            </div>
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable">شماره موبایل </label>
                                <input className="forgot__Input" type="text" name="MobileNumber" placeholder="شماره همراه" onChange={this.handleChangeForgotPass} />
                            </div>
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable"> کد ملی</label>
                                <input className="forgot__Input" type="text" name="NationalCode" placeholder="کد ملی" onChange={this.handleChangeForgotPass} />
                            </div>
                            <div className="forgot__groupInput recaptcha margin-top-large">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={this.onChangeforgotPass}
                                />
                            </div>
                            {/* <input type = "hidden" name = "AccessHash" value = "9e1770e4-2c27-4e48-b72d-f1b9e3b519ab" onChange={this.handleChangePass} /> */}

                            <input type="submit" class="forgot__btn margin-bottom-large margin-top-small" value="دریافت رمزعبور" />
                        </div>
                    </form>
                    <form className="forgot__form" onSubmit={this.handleSubmitUser}>
                        <div className="forgot__form-title">فراموشی نام کاربری و رمز عبور</div>
                        {this.state.showPopup &&  this.state.message ? <PopUp  message = {this.state.message} status={this.state.status} closePopup={this.togglePopup} /> : null}
                        <div className="forgot__groupsInput margin-top-small">
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable">شماره موبایل </label>
                                <input className="forgot__Input" type="text" name="MobileNumber" placeholder="شماره همراه" onChange={this.handleChangeUser} />
                            </div>
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable"> کد ملی</label>
                                <input className="forgot__Input" type="text" name="NationalCode" placeholder="کد ملی" onChange={this.handleChangeUser} />
                            </div>
                            <div className="forgot__groupInput recaptcha margin-top-large">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={this.onChangeforgotUser}
                                />
                            </div>
                            {/* <input type = "hidden" name = "AccessHash" value = "9e1770e4-2c27-4e48-b72d-f1b9e3b519ab" onChange={this.handleChangeUser} /> */}

                            <input type="submit" class="forgot__btn margin-bottom-large margin-top-small" value="دریافت رمزعبور" />
                        </div>
                    </form>
                </div>
                {this.state.showPopup &&  this.state.message ? <PopUp  message = {this.state.message} status={this.state.status} closePopup={this.togglePopup} /> : null}
            </div>
        )
    }
};

export default ForgotPass;