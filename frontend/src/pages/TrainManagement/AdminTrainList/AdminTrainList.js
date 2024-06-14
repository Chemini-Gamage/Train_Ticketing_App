import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminTrainList.css'
function AdminTrainList() {
    const [train, setTrain] = useState([])
    function getTrain() {
        axios.get(`http://localhost:8070/train/display`).then((resp) => {
            setTrain(resp.data)
            console.log(resp)
        }).catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getTrain()
    }, []);




    const handleDelete = (id) => {
        axios.delete(`http://localhost:8070/train/delete/${id}`).then(() => {
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


    return (
        <div className="display" style={{ marginTop: "20px", marginLeft: '50px', marginRight: '50px' }}>
            <h5>Admin list of trains</h5>
            <a href="/add" class="button">Add train</a>
            <hr></hr>
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Train Code</th>
                        {/* assign a letter for the trains */}
                        <th scope="col">Train Name</th>
                        <th scope="col">Train Departure At</th>
                        <th scope="col">Train destination</th>
                        <th scope="col">Train Departure time</th>
                        <th scope="col">Train url</th>
                        <th scope="col">Train avaialbiltiy</th>
                        <th scope="col">Ticket price in RS</th>
                        <th scope="col">Action</th>
                    </tr>

                </thead>
                <tbody>
                    {train.map((train, index) => (
                        <tr key={train._id} className='col-sm-3 mb-3'>

                            <td>{index + 1}</td>
                            <td>{"TR" + train.trainCode}</td>
                            <td>{train.trainName}</td>
                            <td>{train.departureLocation}</td>
                            <td>{train.destination}</td>
                            <td>{formatTime(train.departureTime)}</td>

                            <td>{train.trainUrl}</td>
                            <td>{train.availability}</td>
                            {/* use a checkbox or sth */}
                            <td>{train.ticketPrice}</td>
                            <td>
                                <Link to={`/update/${train._id}`} className="btn btn-success">Update</Link>
                                <button className="btn btn-danger" onClick={() => { handleDelete(train._id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>





        </div >
    )
}

export default AdminTrainList
