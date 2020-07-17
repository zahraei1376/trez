import React from 'react';
import "./forgot.scss";
import ReCAPTCHA from "react-google-recaptcha";

class ForgotPass extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div className="forgot">
                <div className="forgot__title">بازیابی رمز عبور و نام کاربری</div>
                <p className="forgot__Subtitle margin-top-small">لطفا اطلاعات زیر را به دقت وارد کنید و دکمه ارسال را کلیک کنید.در صورت صحت اطلاعات کلمه عبور جدید برای شما پیامک خواهد شد .</p>
                <div className="forgot__forms margin-top-large">
                    <form className="forgot__form"  action="Https://smscore.trez.ir/api/V1/User/ForgetPasswordWithUserName">
                        <div className="forgot__form-title">فراموشی رمز عبور</div>
                        <div className="forgot__groupsInput margin-top-small">
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable">نام کاربری</label>
                                <input className="forgot__Input" type="text" name="UserName" placeholder="Ahmad123" />
                            </div>
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable">شماره موبایل </label>
                                <input className="forgot__Input" type="text" name="MobileNumber" placeholder="شماره همراه" />
                            </div>
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable"> کد ملی</label>
                                <input className="forgot__Input" type="text" name="NationalCode " placeholder="کد ملی" />
                            </div>
                            <div className="forgot__groupInput recaptcha margin-top-large">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={this.onChange}
                                />
                            </div>
                            <input type = "hidden" name = "AccessHash" value = "something" />

                            <button type="submit" class="forgot__btn margin-bottom-large margin-top-small">دریافت رمزعبور</button>
                        </div>
                    </form>
                    <form className="forgot__form"  action="Https://smscore.trez.ir/api/V1/User/ForgetPasswordWithOutUserName">
                        <div className="forgot__form-title">فراموشی نام کاربری و رمز عبور</div>
                        <div className="forgot__groupsInput margin-top-small">
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable">شماره موبایل </label>
                                <input className="forgot__Input" type="text" name="MobileNumber" placeholder="شماره همراه" />
                            </div>
                            <div className="forgot__groupInput margin-top-small">
                                <label className="forgot__lable"> کد ملی</label>
                                <input className="forgot__Input" type="text" name="NationalCode" placeholder="کد ملی" />
                            </div>
                            <div className="forgot__groupInput recaptcha margin-top-large">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={this.onChange}
                                />
                            </div>
                            <input type = "hidden" name = "AccessHash" value = "something" />

                            <button type="submit" class="forgot__btn margin-bottom-large margin-top-small">دریافت رمزعبور</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default ForgotPass;