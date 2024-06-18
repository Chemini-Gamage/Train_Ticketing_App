import React from 'react'
import './RegisterClient.css'
import { FaGoogle } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
function RegisterClient() {
    return (
        <div className="Register">
            <div className="card" style={{ width: '380px', marginLeft: '500px', marginTop: '30px' }}>
                <div className="card-body">
                    <h5 className="card-title">Create an account</h5>

                    <form>

                        <div className="form-group row">

                            <div className="form-group row">

                                <label htmlFor="inputEmail" style={{ marginLeft: '-120px' }}>E-mail</label>
                                <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                    <MdOutlineEmail style={{ marginRight: '-283px' , marginBottom:'-52px'}} />     <input type="email" className="form-control" id="inputEmail" placeholder="email@example.com" />
                                </div>



                                <label htmlFor="inputPassword" style={{ marginLeft: '-120px', marginTop: '40px' }} >Password</label>

                                <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                <LuEyeOff  style={{ marginRight: '-283px' , marginBottom:'-52px'}} />   
                                    <input type="email" className="form-control" id="inputPassword" placeholder="password" />
                                </div>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">Password should be atleast 8 characters long</small>
                            <a href="/login" style={{ color: 'red' }}>Already have an account ?</a>


                            <p>OR</p>
                            <button className="btn btn-primary" style={{ marginBottom: '10px' }}>Register</button>

                            <button className='btn1' style={{ marginBottom: '10px' }}><FaGoogle /> Login with Google</button>




                        </div>
                    </form>
                </div>
            </div></div>
    )
}

export default RegisterClient
