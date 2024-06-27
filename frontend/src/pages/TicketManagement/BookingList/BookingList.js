import './Booking.css'
import axios from 'axios'
import React, { useEffect, useState, useParams } from 'react'
import { Link } from 'react-router-dom'

function BookingList() {


    const [ticket, setticket] = useState([])


    const [selectedRows, setSelectedRows] = useState([])
    function getticket() {
        axios.get(`http://localhost:8070/ticket/display`).then((resp) => {
            setticket(resp.data)
            console.log(resp)
        }).catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getticket()
    }, []);




    const handleDelete = (id) => {
        axios.delete(`http://localhost:8070/ticket/delete/${id}`).then(() => {
            alert('deleted')
            window.location.reload()
        }).catch((err) => {
            alert(err)
        })
    }



    // am and pm
    function formatTime(time) {
        let [hour, minute] = time.split(':')
        let period = 'AM'

        hour = parseInt(hour, 10);
        if (hour >= 12) {
            period = 'PM'
            if (hour > 12) hour -= 12;
        }
        if (hour == 0) hour = 12;
        return `${hour}:${minute} ${period}`;
    }
    const toggleRowSelection = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id])
        }
    }
    const handleDeleteSelected = () => {
        console.log("deleting", selectedRows)
    }


    //search

    const filterData = (ticket, searchkey) => {
        const result4 = ticket.filter((ticket) =>
            ticket.ticketName.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
        setticket(result4)
    };
    const handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
        axios.get(`http://localhost:8070/ticket/display`, {

        }).then((resp) => {
            filterData(resp.data, searchkey);

        }).catch((err) => {
            console.log(err);

        })
    }

    const handleCheckBoxChange = (e, bookingId) => {
        if (e.target.checked) {
            setSelectedRows([...selectedRows, bookingId]);

        } else {
            setSelectedRows(selectedRows.filter(id => id !== bookingId))
        }
    }

    const handleDeleteSelect = async () => {
        try {
            await Promise.all(selectedRows.map(id => axios.delete(`http://localhost:8070/ticket/delete/${id}`)));
            setSelectedRows([])
            alert("selected deleted")


        } catch (err) {
            alert("Failed to delete")

        }
    }


    return (
        <div className="booking" style={{ marginTop: "20px", marginLeft: '50px', marginRight: '50px' }}>
            <h5> My Booking list</h5>
            <nav>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchArea} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <button className="btnr" onClick={handleDeleteSelect}>Filter by the date</button>


            <hr></hr>


            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Current Booking</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cancelled Bookings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">



                    <table class="table table-bordered" >
                        <thead>
                            <tr>

                                <th scope="col">Index</th>
                                <th scope="col">ticket qty</th>
                                {/* assign a letter for the tickets */}
                                <th scope="col">ticket date</th>
                                <th scope="col">ticketclassType</th>
                                <th scope="col">Amount</th>
                                <th>View More</th>
                            </tr>

                        </thead>
                        <tbody>
                            {ticket.map((ticket, index) => (
                                <tr key={ticket._id} className='col-sm-3 mb-3'>

                                    <td>{index + 1}</td>
                                    <td>{ticket.qty}</td>
                                    <td>{ticket.date}</td>
                                    <td>{ticket.trainClass}</td>
                                    <td>{ticket.calculateTicketFee}</td>
                                    <td>
                                        {/* <Link to={`/view/${ticket._id}`} className="btn btn-success" View more></Link> */}
                                        <Link to={`/rece/${ticket._id}`} className="btn btn-success">View</Link>
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>





        </div >
    )
}




export default BookingList
