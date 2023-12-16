import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { Image } from "react-bootstrap";

import { signup } from "../../actions/auth";

import facebook from "../../pages/Login/images/facebook.svg";
import google from "../../pages/Login/images/google.svg";
import github from "../../pages/Login/images/github.svg";
import line1 from "../../pages/Login/images/line-1.svg";
import "./Register.css"


const Register = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: '' 
    });
    
    const {name, email, password, re_password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password === re_password) {
            signup(name, email, password, re_password);
            setAccountCreated(true);
        }    
    };



    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    if (accountCreated){
        return <Navigate to="/login" />
    }

    return (
        <div className="auth">
            <div className="div">
                <div className="signupoverlap">
                    <div className="signuptext-wrapper">Đăng ký</div>
                    <div className="frame">
                        <p className="code-lord">
                            <span className="span">Code</span>
                            <span className="text-wrapper-2">Learn</span>
                        </p>
                    </div>
                </div>
            <div className="resellipse" />
                <div className="overlap-group">
                    <div className="resellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Đăng ký</div>
                                            <div className="text-wrapper-4">Hãy cung cấp cho chúng tôi một vài thông tin nhé</div>
                                        </div>
                                    <div className="credentials">
                                        <form onSubmit={e=>onSubmit(e)}>
                                            <div className="form-group name">
                                                <input type="name" className="form-control" placeholder="Tên của bạn là gì?" name="name" value={name} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group emailres">
                                                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group passwdres">
                                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password" value={password} onChange={e=>onChange(e)} minlength="6" required/>
                                            </div>
                                            <div className="form-group repasswdres">
                                                <input type="password" className="form-control" placeholder="Nhập mật khẩu" name="re_password" value={re_password} onChange={e=>onChange(e)} minlength="6" required/>
                                            </div>
                                            <button class="btn auth-bt-fp resdiv-wrapper" type="submit">
                                                <p className="text-wrapper-5">Đăng ký</p>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="other-auths">
                                <div className="or">
                                    <Image className="line" alt="Line" src={line1} />
                                    <div className="text-wrapper-8">Or</div>
                                    <Image className="line" alt="Line" src={line1} />
                                </div>
                                <div className="social">
                                    <a href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                                    <Image className="frame-4" alt="google" src={google} href ="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"/>
                                    </a>
                                    <a href = "https://www.facebook.com/">
                                    <Image className="frame-4" alt="facebook" src={facebook} />
                                    </a>
                                    <a href = "https://github.com/">
                                    <Image className="frame-4" alt="github" src={github} />
                                    </a>
                                </div>
                            
                            </div>
                        </div>
                    <div className="frame-5">
                        <p className="resdon-t-have-an">
                            <span className="text-wrapper-9">Đã có tài khoản? </span>
                            <span> 
                                <a className="text-wrapper-10" href="/login"> Đăng nhập</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ signup }) (Register);
