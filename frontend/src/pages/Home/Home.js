import React from 'react'
import './Home.css'
import bannerBackground from "../../Assets/bannerBackground.jpg"
import train26 from "../../Assets/train26.jpg"

import train25 from "../../Assets/train25.jpg"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className="home">
                <div className="about-section-container">
                    <div className="about-background-image-container">
                        <img src={train25} style={{ height: '500px', width: '1477px' }} />
                        <Link to="/userType" className="btn btn-success" style={{ marginLeft: '-20px', marginTop: '-250px' }}>get started</Link>
                    </div>
                
                    <div className="home-section-text-container" style={{ marginTop: '-370px' }} >
                        <h1 className="primary-heading" style={{ color: 'white' }}>Welcome to TransitExpress</h1>

                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', textShadow: '2px 2px 1px rgba(0.5,0,0,0.5)', marginBottom: '80px' }}>Welcome aboard!
                            We're thrilled to have you join us on your journey.<br></br> At TransitExpress,<br></br>
                            we're dedicated to providing you with a seamless and enjoyable travel experience,
                            every time you step on board.</p>
                        {/* <Link to="/add" className="btn btn-info">Infor</Link> */}
                        {/* 
                <p className="primary-text">Lorem</p>
                <p className="primary-text">Lorem</p>
                <div className="about-buttons-container">
                    <button>Learn</button>

                </div> */}
                    </div>

                    <br>
                    </br><br></br><br>
                    </br><br></br>
                    <br>
                    </br><br></br>

                    <div class="card2" style={{ width: " 980px", marginLeft: '200px' }}>

                        <div class="card-body">
                            <div className="stat">
                                <h2 class="card-text">50K+</h2>
                                <p>Choose from over 50k+ lisitngs</p></div>
                            <div className="stat2" >
                                <h2 class="card-text">25</h2>
                                <p>Accessible to all areas</p></div>
                        </div>
                    </div></div >
                <br></br>  <br></br>  <br></br>
                <div className="work-section-wrapper">
                    <div className="work-section-top">
                        <h1> OUR SERVICES</h1>
                        {/* <p className="primary-text">
                            Lorem
                        </p> */}
                    </div>
                    <div class="card-deck">
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title">Comprehensive Reach</h5>
                                <p class="card-text">Covers all destinations across Sri Lanka..</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title">Real-time Updates</h5>
                                <p class="card-text">Information on train schedules, delays, and cancellations.</p>

                            </div>
                        </div>
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title">Secure Transactions</h5>
                                <p class="card-text">Ensured safety and security of financial transactions.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <br></br>   <br></br>
                <div className="work-section-wrapper">
                    <div className="work-section-top">
                        <h1>REVIEWS GIVEN</h1>
                        {/* <p className="primary-text">
                            Lorem
                        </p> */}
                    </div>
                    <div class="card-deck">
                        <div class="card3">

                            <div class="card-body">
                                <h4>John</h4>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "50", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                </div>
                                <h5 class="card-title">Smooth Booking Process!</h5>
                                <p class="card-text">I've been using this platform for all my train journeys. Booking is quick and hassle-free. Highly recommended!</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                        <div class="card3">

                            <div class="card-body">
                                <h4>Jehn</h4>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: "20%", ariaValuenow: "5", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                </div>

                                <h5 class="card-title">Great Service, Always On Time!</h5>
                                <p class="card-text">I love how easy it is to find and book my train tickets here. The trains are punctual, and customer service is excellent</p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>    </>
    )
}

export default Home
