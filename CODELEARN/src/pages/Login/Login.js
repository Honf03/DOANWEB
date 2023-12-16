import React, {useState} from "react";

import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { Image } from "react-bootstrap";

import { login } from "../../actions/auth";

import "./Login.css"
import facebook from "./images/facebook.svg";
import google from "./images/google.svg";
import github from "./images/github.svg";
import line1 from "./images/line-1.svg";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });
    
    const {email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    //If the user authenticated
    //Redirect to the home page

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <div className="auth">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Chào mừng bạn!</div>
                    <div className="frame">
                        <p className="code-lord">
                            <span className="span">Code</span>
                            <span className="text-wrapper-2">Learn</span>
                        </p>
                    </div>
                </div>

            <div className="ellipse" />
                <div className="overlap-group">
                    <div className="ellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Đăng nhập</div>
                                            <div className="text-wrapper-4">Chào mừng bạn đã quay trở lại</div>
                                        </div>
                                    <div className="credentials">
                                        <form onSubmit={e=>onSubmit(e)}>
                                            <div className="form-group email">
                                                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={e=>onChange(e)} required/>
                                            </div>
                                            <div className="form-group passwd">
                                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password" value={password} onChange={e=>onChange(e)} minlength="6" required/>
                                            </div>
                                            <div className="form-group rememberMe mb-3">
                                                <input type="checkbox" id="rememberMe"/>
                                                <label className="text">Nhớ mật khẩu</label>
                                            </div>
                                            <button class="btn auth-bt-fp div-wrapper" type="submit">
                                                <p className="text-wrapper-5">Đăng nhập</p>
                                            </button>
                                        </form>
                                    </div>

                                    <a className="text-wrapper-6" href='/reset_password'> Quên mật khẩu?</a>
                                </div>
                            </div>
                            <div className="other-auths">
                                <div className="or">
                                    <Image className="line" alt="Line" src={line1} />
                                    <div className="text-wrapper-8">Hoặc</div>
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
                        <p className="don-t-have-an">
                            <span className="text-wrapper-9">Don't have an account?</span>
                            <span> 
                                <a className="text-wrapper-10" href="/signup"> Sign up</a>
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

export default connect(mapStateToProps,{ login }) (Login);

