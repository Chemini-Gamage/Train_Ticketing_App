import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosWifi } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
import { FaRestroom } from "react-icons/fa";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { Link, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import BookingList from '../BookingList/BookingList';

function AddBooking() {
    const { id } = useParams();
    const [train, setTrain] = useState([]);
    const [date, setDate] = useState("");
    const [trainClass, setTrainClass] = useState("");
    const [qty, setQty] = useState("");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        getTrain();
    }, []);

    function getTrain() {
        axios.get(`http://localhost:8070/train/get/${id}`)
            .then((resp) => {
                if (resp.data?.response) {
                    setTrain([resp.data.response]);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }

    async function sendData(e) {
        e.preventDefault();
        const newTicket = {
            date,
            trainClass,
            qty,
            totalAmount: calculateTicketFee()
        };
        try {
            await axios.post(`http://localhost:8070/ticket/add`, newTicket);
            alert("Ticket added");
        } catch (err) {
            alert("Failed to add ticket: " + err.message);
        }
    }

    useEffect(() => {
        setFormValid(date && trainClass && qty);
    }, [date, trainClass, qty]);

    const calculateTicketFee = () => {
        const priceMap = {
            First: 100,
            Second: 200,
            Third: 300
        };
        const selectedPrice = priceMap[trainClass];
        return selectedPrice ? selectedPrice * parseInt(qty, 10) : 0;
    }

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51PTJYbEoLKljEZUpnKRwFddTeKEv28OYjbikkOXCR5O0MWUs5SDeFxusAbh43AruSNFs03F3JN0jurQBqdv0aF6i00oLPAZghh");
        const body = {
            tickets: [{
                trainClass,
                qty,
                totalAmount: calculateTicketFee(),
                image: train[0]?.trainUrl // Assuming the train image URL is used
            }]
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const apiUrl = "http://localhost:8070/ticket";

        const response = await fetch(`${apiUrl}/create-checkout-session`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        const session = await response.json();
        stripe.redirectToCheckout({ sessionId: session.id });
    }

    return (
        <div>
            {train.length > 0 ? train.map((train) => (
                <div key={train._id}>
                    <div className="card" style={{ width: '18rem', marginLeft: '120px', marginTop: '50px' }}>
                        <img className="card-img-top" src={train.trainUrl} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text"><b>{train.trainName}</b></p>
                        </div>
                    </div>
                    <div className='trainName'>
                        <h5 style={{ marginLeft: '-220px', color: 'grey' }}>Seat count</h5>
                    </div>
                    <h4 style={{ marginLeft: '-820px' }}>Amenities</h4>
                    <div className="amenties" style={{ marginLeft: '-100px' }}>
                        <p style={{ marginLeft: '-802px' }}> <IoIosWifi /> Wi-Fi</p>
                        <p style={{ marginLeft: '-700px' }}><IoFastFood /> Food and Beverages.</p>
                        <p style={{ marginLeft: '-750px' }}><CiPower /> Power Outlets</p>
                        <p style={{ marginLeft: '-770px' }}><FaRestroom /> Restrooms</p>
                        <p style={{ marginLeft: '-750px' }}><TbAirConditioningDisabled /> Air Conditioning</p>
                    </div>
                    <div className="card" style={{ width: "60rem", marginLeft: '500px', marginTop: '-600px' }}>
                        <div className="card-header">
                            Rs.{train.ticketPrice} per person
                        </div>
                        <div className="card-body">
                            <form onSubmit={sendData}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label htmlFor="date">Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    placeholder="Date to be booked"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </th>
                                            <th>
                                                <label htmlFor="trainClass">Class</label>
                                                <select
                                                    className="custom-select"
                                                    id="trainClass"
                                                    required
                                                    value={trainClass}
                                                    onChange={(e) => setTrainClass(e.target.value)}
                                                >
                                                    <option value="">Open this select menu</option>
                                                    <option value="First">First</option>
                                                    <option value="Second">Second</option>
                                                    <option value="Third">Third</option>
                                                </select>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <label htmlFor="qty">Number of tickets</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="qty"
                                                    placeholder="Qty"
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}
                                                    required />
                                                <label htmlFor="departureAt">From</label>
                                                <h4>{train.departureAt}</h4>
                                                <input type="text" className="form-control" id="departureAt" value={train.departureLocation} readOnly />
                                                <label htmlFor="destination">To</label>
                                                <input type="text" className="form-control" id="destination" value={train.destination} readOnly />
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{ marginLeft: '10px' }}>
                                            Ticket fee = {calculateTicketFee()}
                                        </li>
                                        <hr />
                                        <li className="list-group-item">Total amount to be paid = Rs. {calculateTicketFee()}</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary" disabled={!formValid} onClick={makePayment}>PAY</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )) : <p>No train data available.</p>}
        </div>
    );
}

export default AddBooking;
