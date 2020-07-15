import React from 'react';
import './Register.scss';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    submitRegister = (e)=>{
        e.preventDefault();  
        var data = {
            username: this.state.usernameReg,
            password:this.state.passwordReg,
            confirmPassword:this.state.passwordConfirmReg,
            name:this.state.name,
            mobileNumber:this.state.mobileNumber,
            email:this.state.email
        }
        fetch("http://localhost:7000/register", {
            headers: {
                'Content-Type': 'application/json'
                },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
            this.setState({status:response.status})
            return response.json();   
        })
        .then((dataRes)=>{ 
            console.log(dataRes);
            console.log(dataRes.data)
            this.setState({errors:dataRes.data,message:dataRes.message});
        })
        .catch(
            console.log('err')
        )
    }

    handleUsername = (e)=>{
        this.setState({usernameReg: e.target.value});
    }
    handlePass = (e)=>{
        this.setState({passwordReg: e.target.value});
     }
    handleConfirmPass = (e)=>{
        this.setState({passwordConfirmReg: e.target.value});
    }
    handleName = (e)=>{
        this.setState({name: e.target.value});
    }
    handlemobileNumber = (e)=>{
        this.setState({mobileNumber: e.target.value});
    }
    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }


    render(){
        return(
            <div className="register">

            </div>
        )
    }
};

export default Register;