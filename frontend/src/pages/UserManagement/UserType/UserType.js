import React, { useState } from 'react'
import './UserType.css'
import axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function UserType() {


    let intiUserDetails = {
        username: "",
        password: ""
    }
    const [user, setUser] = useState(intiUserDetails)
    const [messageData, setMessageData] = useState()
    const showMessageDialog = (name, message, callback) => {
        setMessageData({ show: true, name, message, setMessageData: setMessageData, callback: callback ? callback : null })


    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8070/api/userManagement/login`, user).then((res) => {
            if (res.data.success) {
                console.log(res.data)
                showMessageDialog("Login success")
                localStorage.setItem('token', res.data.accessToken)
                localStorage.setItem('refreshToken', res.data.refreshToken)
                localStorage.setItem('id', res.data.id)

            } else {
                showMessageDialog("error", "login failed", "reload")
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    return (

        <div className="user">
            <div className="card" style={{ width: '380px', marginLeft: '500px', marginTop: '30px' }}>
                <div className="card-body">
                    <h5 className="card-title">Log in as</h5>
                    {/* <p className="card-text">Ticket ID:</p> */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />

                            <label className="form-check-label" htmlFor="inlineCheckbox1">Admin</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option2" />

                            <label className="form-check-label" htmlFor="inlineCheckbox2">Client</label>
                            <br />
                        </div>




                        <div className="form-group row">

                            <div className="form-group row">

                                <label htmlFor="email" style={{ marginLeft: '-120px' }}>E-mail</label>
                                <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                    <MdOutlineEmail style={{ marginRight: '-283px', marginBottom: '-52px' }} />
                                    <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                                </div>



                                <label htmlFor="password" style={{ marginLeft: '-120px', marginTop: '40px' }} onSubmit={handleChange} >Password</label>

                                <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                    <LuEyeOff style={{ marginRight: '-283px', marginBottom: '-52px' }} />
                                    <input type="text" className="form-control" id="password" placeholder="password" />
                                </div>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">Password should be atleast 8 characters long</small>
                            <a href="/register" style={{ color: 'red' }}>No account ?Create one</a>


                            <p>OR</p>
                            <button className="btn btn-primary" style={{ marginBottom: '10px' }}>Login</button>

                            <button className='btn1' style={{ marginBottom: '10px' }}><FaGoogle /> Login with Google</button>




                        </div>


                    </form>
                    
                </div>
                
            </div>
            {/* <MessageDialog{...messageData} /> */}
        </div>

    );
}
export default UserType
