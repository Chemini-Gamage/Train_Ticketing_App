import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminTrainList.css'
function AdminTrainList() {
    const [train, setTrain] = useState([])

    const [selectedRows, setSelectedRows] = useState([])
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

    const handleCheckBoxChange = (e, trainId) => {
        if (e.target.checked) {
            setSelectedRows([...selectedRows, trainId]);

        } else {
            setSelectedRows(selectedRows.filter(id => id !== trainId))
        }
    }

    const handleDeleteSelect = async () => {
        try {
            await Promise.all(selectedRows.map(id => axios.delete(`http://localhost:8070/train/delete/${id}`)));
            setSelectedRows([])
            alert("selected deleted")


        } catch (err) {
            alert("Failed to delete")

        }
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

    const filterData = (train, searchkey) => {
        const result4 = train.filter((train) =>
            train.trainName.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
        setTrain(result4)
    };
    const handleSearchArea = (e) => {
        const searchkey = e.currentTarget.value;
        axios.get(`http://localhost:8070/train/display`, {

        }).then((resp) => {
            filterData(resp.data, searchkey);

        }).catch((err) => {
            console.log(err);

        })
    }


    return (
        <div className="displayA" style={{ marginTop: "20px", marginLeft: '50px', marginRight: '50px' }}>
            <h5>Admin list of trains</h5>


            <nav>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchArea} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <Link to="/add" className="btn btn-success" style={{ marginLeft: '1000px', marginTop: "-10px" }}>Add</Link>
            <button className="btnr" onClick={handleDeleteSelect}>Delete Selected</button>
            <hr></hr>
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th scope="col">Select</th>
                        <th scope="col">Index</th>
                        <th scope="col">Train Code</th>
                        {/* assign a letter for the trains */}
                        <th scope="col">Train Name</th>
                        <th scope="col">Train Departure At</th>
                        <th scope="col">Train destination</th>
                        <th scope="col">Train Departure time</th>
                        {/* <th scope="col">Train url</th> */}

                        <th scope="col">Train avaialbiltiy</th>
                        <th scope="col">Ticket price in RS</th>

                        <th scope="col">Action</th>
                    </tr>

                </thead>
                <tbody>
                    {train.map((train, index) => (
                        <tr key={train._id} className='col-sm-3 mb-3'>
                            <td><input type="checkbox" onChange={(e) => handleCheckBoxChange(e, train._id)}></input></td>
                            <td>{index + 1}</td>
                            <td>{"TR" + train.trainCode}</td>
                            <td>{train.trainName}</td>
                            <td>{train.departureLocation}</td>
                            <td>{train.destination}</td>
                            <td>{formatTime(train.departureTime)}</td>

                            {/* <td>{train.trainUrl}</td> */}
                            <td>{train.availability}</td>
                            {/* use a checkbox or sth */}
                            <td>{train.ticketPrice}</td>
                            <td>
                                <Link to="/train/viewMore" className="btn btn-primary" style={{ marginLeft: '-140px', marginRight: '10px' }}>View</Link>
                                <Link to={`/update/${train._id}`} className="btn btn-success" style={{ marginLeft: '0px', marginRight: '10px' }}>Update</Link>
                                <button className="btn btn-danger" style={{ marginLeft: '200px', marginRight: '10px', marginTop: '-70px' }} onClick={() => { handleDelete(train._id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>





        </div >
    )
}

export default AdminTrainList
