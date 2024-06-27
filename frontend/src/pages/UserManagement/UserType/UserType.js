import React, { useState } from 'react';
import './UserType.css';
import axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import MessageDialog from '../../../components/MessageDialog/MessageDialog';

function UserType() {
    let intiUserDetails = {
        username: "testemail@gmail.com",
        password: "testpassword"
    };
    const [user, setUser] = useState(intiUserDetails);
    const [messageData, setMessageData] = useState({ show: false, name: '', message: '', callback: null });

    const showMessageDialog = (name, message, callback) => {
        setMessageData({ show: true, name, message, callback: callback ? callback : null });
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8070/api/userManagement/login`, user)
            .then((res) => {
                if (res.data.success) {
                    showMessageDialog("Login success", "Logged in successfully");
                    localStorage.setItem('token', res.data.accessToken);
                    localStorage.setItem('refreshToken', res.data.refreshToken);
                    localStorage.setItem('id', res.data.id);
                } else {
                    showMessageDialog("Error", "Login failed", "reload");
                }
            })
            .catch((err) => {
                console.log(err);
                showMessageDialog("Error", "An error occurred", "reload");
            });
    };

    return (
        <div className="user">
            <div className="card" style={{ width: '380px', marginLeft: '500px', marginTop: '30px' }}>
                <div className="card-body">
                    <h5 className="card-title">Log in as</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Admin</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Client</label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" style={{ marginLeft: '-120px' }}>E-mail</label>
                            <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                <MdOutlineEmail style={{ marginRight: '-283px', marginBottom: '-52px' }} />
                                <input type="email" className="form-control" id="username" placeholder="email@example.com" value={user.username} onChange={handleChange} />
                            </div>
                            <label htmlFor="password" style={{ marginLeft: '-120px', marginTop: '40px' }}>Password</label>
                            <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                <LuEyeOff style={{ marginRight: '-283px', marginBottom: '-52px' }} />
                                <input type="password" className="form-control" id="password" placeholder="password" value={user.password} onChange={handleChange} />
                            </div>
                            <small id="emailHelp" className="form-text text-muted">Password should be at least 8 characters long</small>
                            <a href="/register" style={{ color: 'red' }}>No account? Create one</a>
                            <p>OR</p>
                            <button className="btn btn-primary" style={{ marginBottom: '10px' }}>Login</button>
                            <button className='btn1' style={{ marginBottom: '10px' }}><FaGoogle /> Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>
            <MessageDialog {...messageData} setMessage={() => setMessageData({ ...messageData, show: false })} />
        </div>
    );
}

export default UserType;
