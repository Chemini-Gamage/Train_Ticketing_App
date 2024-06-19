
import axios from 'axios'
import React, { useEffect, useState } from 'react'
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


    return (
        <div className="displayT" style={{ marginTop: "20px", marginLeft: '50px', marginRight: '50px' }}>
            <h5> Booking list</h5>


            <nav>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchArea} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <Link to="/add" className="btn btn-success" style={{ marginLeft: '1000px', marginTop: "-10px" }}>Add</Link>
            <button className="btnr" onClick={handleDeleteSelected}>Delete Selected</button>
            <hr></hr>
            <table class="table table-bordered" >
                <thead>
                    <tr>

                        <th scope="col">Index</th>
                        <th scope="col">ticket qty</th>
                        {/* assign a letter for the tickets */}
                        <th scope="col">ticket date</th>
                        <th scope="col">ticketclassType</th>
                        <th scope="col">Amount</th>
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
                            {/* 
                            <td>
                                <Link to="/ticket/viewMore" className="btn btn-primary" style={{ marginLeft: '-140px', marginRight: '10px' }}>View</Link>
                                <Link to={`/update/${ticket._id}`} className="btn btn-success" style={{ marginLeft: '0px', marginRight: '10px' }}>Update</Link>
                                <button className="btn btn-danger" style={{ marginLeft: '200px', marginRight: '10px', marginTop: '-70px' }} onClick={() => { handleDelete(ticket._id) }}>Delete</button>
                            </td> */}
                        </tr>
                    ))}

                </tbody>
            </table>





        </div >
    )
}




export default BookingList
