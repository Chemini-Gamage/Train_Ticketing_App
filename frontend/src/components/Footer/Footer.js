import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className =".Footer">
        <div className='myfootecss' style={{ marginTop: '100px' }}>
            <div className="">
                <div className="card " >
                    <div className="row mb-4" style={{ marginTop: '50px' }}>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: "#8ca3ba" }}> <img style={{ width: "40px", height: "40px", marginRight: "10px" }}
                                        src="https://th.bing.com/th/id/OIP.NOWcALZnN2qZcGscDHGn6gHaHa?rs=1&pid=ImgDetMain" />
                                        ABC Team</h2>
                                </div>
                                <p className="card-text">
                                    The Train Ticket Management System is a comprehensive web application tailored for efficient management of train schedules, ticketing, and passenger services.
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https:") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("https:_") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("https_") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https:") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Services</h5>
                            <ul>
                                <li>User Management</li>
                                <li onClick={() => { window.location.replace('/') }}>Train Management</li>
                                <li>Train Ticket Booking Management</li>
                                <li>Payment </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Terms Condition</h5>
                            <ul className="card-text">
                                <li>Copy Write</li>
                                <li>Privacy Policy</li>
                                <li>End to End</li>
                                <li>Agreement</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li>Team</li>
                                <li>Colombo</li>
                                <li>Sri Lanka</li>
                                <li>contact number</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4">
                        <div className="row" style={{ fontSize: "10px", textAlign: "center", letterSpacing: '2px' }}>
                            <div>
                                Designed and Developed by ABC <br />
                            </div>
                        </div></div>
                </div>
            </div>
        </div></div>
    );
};

export default Footer;