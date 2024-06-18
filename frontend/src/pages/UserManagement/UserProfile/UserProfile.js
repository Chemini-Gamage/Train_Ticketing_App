import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
function UserProfile() {
    return (
        <div className="userProfile">
            <div className="card" style={{ width: '380px', marginLeft: '500px', marginTop: '30px' }}>
                <div className="card-body">
                    <h5 className="card-title">Hi name</h5>
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <form>

                        <div className="form-group row">

                            <div className="form-group row">

                                <label htmlFor="inputEmail" style={{ marginLeft: '-120px' }}>E-mail</label>
                                <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                    <MdOutlineEmail style={{ marginRight: '-283px', marginBottom: '-52px' }} />     <input type="email" className="form-control" id="inputEmail" placeholder="email@example.com" />
                                </div>



                                <label htmlFor="inputPassword" style={{ marginLeft: '-120px', marginTop: '40px' }} >Password</label>

                                <div className="col-sm-12" style={{ marginLeft: '10px' }}>
                                    <LuEyeOff style={{ marginRight: '-283px', marginBottom: '-52px' }} />
                                    <input type="email" className="form-control" id="inputPassword" placeholder="password" />
                                </div>
                            </div>
                            <Link to="/display/train">BAck</Link>
                        </div>
                    </form>
                </div>
            </div></div>
    )
}

export default UserProfile
