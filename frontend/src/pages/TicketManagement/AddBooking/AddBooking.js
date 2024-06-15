
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosWifi } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
import { FaRestroom } from "react-icons/fa";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { Link, useParams } from 'react-router-dom';
function AddBooking() {
    const { id } = useParams("");
    const [train, setTrain] = useState([]);

    function getTrain() {
        axios.get(`http://localhost:8070/train/get/${id}`)
            .then((resp) => {
                console.log(resp.data); // Log the response data
                if (Array.isArray(resp.data?.response)) {
                    setTrain(resp.data.response);
                } else {
                    setTrain([resp.data?.response]);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        getTrain();
    }, []);

    // am and pm
    function formatTime(time) {
        let [hour, minute] = time.split(':');
        let period = 'AM';

        hour = parseInt(hour, 10);
        if (hour >= 12) {
            period = 'PM';
            if (hour > 12) hour -= 12;
        }
        if (hour === 0) hour = 12;
        return `${hour}:${minute} ${period}`;
    }
    return (
        <div>
            {train.length > 0 ? train.map((trainItem) => (
                <div key={trainItem._id}>
                    <div className="card" style={{ width: '18rem', marginLeft: '120px', marginTop: '50px' }}>
                        <img className="card-img-top" src={trainItem.trainUrl} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text"><b>{trainItem.trainName}</b></p>
                        </div>
                    </div>
                    <div className='trainName'>
                        <br />
                        {/* <h4 style={{ marginLeft: '-900px' }}>{trainItem.trainName}</h4> */}
                        <h5 style={{ marginLeft: '-220px', color: 'grey' }}>seat count</h5>
                    </div>
                    <br />

                    <h4 style={{ marginLeft: '-820px' }}>Amenities</h4>
                    <br />

                    <div className="amenties" style={{ marginLeft: '-100px' }} >
                        <p style={{ marginLeft: '-802px' }}> <IoIosWifi /> Wi-Fi</p>
                        <p style={{ marginLeft: '-700px' }}><IoFastFood />   Food and Beverages.</p>
                        <p style={{ marginLeft: '-750px' }}><CiPower /> Power Outlets</p>
                        <p style={{ marginLeft: '-770px' }}><FaRestroom />Restrooms</p>
                        <p style={{ marginLeft: '-750px' }}><TbAirConditioningDisabled />Air Conditioning</p>
                    </div>
                    <div className="card" style={{ width: "60rem", marginLeft: '500px', marginTop: '-600px' }}>
                        <div className="card">
                            <div className="card-header">
                                Rs.{trainItem.ticketPrice} per person
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <form>
                                                    <label for="inputEmail4">Date</label>
                                                    <input type="date" class="form-control" id="inputEmail4" placeholder="Email" />
                                                </form>
                                            </th>
                                            <th>
                                                <form>
                                                    <label for="classType">Class</label>
                                                    <select class="custom-select" required>
                                                        <option value="">Open this select menu</option>
                                                        <option value="1">First</option>
                                                        <option value="2">Second</option>
                                                        <option value="3">Third</option>
                                                    </select>                                                </form>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <form>
                                                    <label for="inputEmail4">Number of tickets</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                                </form>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{ marginLeft: '10px' }} >Ticket_fee = {trainItem.ticketPrice} * guestNum*classType</li>
                            {/* <li className="list-group-item">service charge</li> */}
                            <hr />
                            <li className="list-group-item">Total amount to be paid = ticketfee</li>
                            <Link to={`/payment`} className="btn btn-primary">PAY</Link>
                        </ul>
                    </div>
                </div>
            )) : <p>No train data available.</p>}
        </div>
    );
}

export default AddBooking
