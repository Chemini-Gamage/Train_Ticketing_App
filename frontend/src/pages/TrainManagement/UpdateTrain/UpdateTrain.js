import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UpdateTrain() {
    const { id } = useParams("")
    const [trainCode, setTrainCode] = useState("")
    const [trainName, setTrainName] = useState("")
    const [destination, setDestination] = useState("")
    const [departureLocation, setDepartureLocation] = useState("")
    const [departureTime, setDepartureTime] = useState("")
    const [ticketPrice, setTicketPrice] = useState("")
    const [trainUrl, setTrainUrl] = useState("")
    const update = (e) => {
        e.preventDefault();
        const updateTrain = {
            trainCode,
            trainName,
            departureTime,
            departureLocation,
            destination,
            ticketPrice,
            trainUrl,
        }
        console.log(updateTrain);
        axios.put(`http://localhost:8070/train/update/${id}`, updateTrain).then((res) => {
            console.log(res);
            alert("updated")
            setTrainCode("");
            setTrainName("");
            setDestination("");
            setDepartureLocation("");
            setDepartureTime("");
            setTicketPrice("");
            setTrainUrl("");
            window.location.replace("/train/display")
        }).catch((err) => {
            alert(err)
        })
    }
    const getTrain = () => {
        axios.get(`http://localhost:8070/train/get/${id}`).then((res) => {
            setTrainCode(res.data.response.trainCode)
            setTrainName(res.data.response.trainName)
            setDestination(res.data.response.destination);
            setDepartureLocation(res.data.response.departureLocation)
            setDepartureTime(res.data.response.departureTime);
            setTicketPrice(res.data.response.ticketPrice);
            setTrainUrl(res.data.response.trainUrl);

        }).catch((err) => {
            alert(err)
        })
    }
    useEffect(() => {
        getTrain();
    }, [id])






    return (
        <div className="update"><br></br>
            <div className="container">
                <div className="modal-overlay">

                    <div className="form-box">
                        <form style={{ marginLeft: '20px' }} onSubmit={update}>
                            <div className="title" style={{ marginLeft: '-500px', marginTop: '10px' }}>
                                <button style={{ marginLeft: '-40px', marginTop: '20px' }}>Update</button>

                                <h5><b>update train</b></h5>
                            </div>
                            <h5>breadcrumbs here</h5>


                            <div class="row">
                                <div class="form-group col-md-4">
                                    <div className="notched-outline">
                                        <label for="trainCode" style={{ marginLeft: '-120px' }}>Train Code</label>
                                        <input type="text" class="form-control" id="trainCode" placeholder="First name" variant="outlined" onChange={(e) => {
                                            setTrainCode(e.target.value)
                                        }} value={trainCode} required />
                                    </div></div>
                                <div class="form-group col-md-4">
                                    <label for="trainName" style={{ marginLeft: '-120px' }}>Train name</label>
                                    <input type="text" class="form-control" id="trainName" placeholder="First name" onChange={(e) => {
                                        setTrainName(e.target.value)
                                    }} value={trainName} required />
                                </div>


                                <div class="form-group col-md-4">
                                    <label for="departureLocation" style={{ marginLeft: '-120px' }}>Departure Location</label>
                                    <input type="text" class="form-control" id="departureLocation" placeholder="Last name" onChange={(e) => {
                                        setDepartureLocation(e.target.value)
                                    }} value={departureLocation} required />
                                </div>
                            </div>


                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="departureTime" style={{ marginLeft: '-120px' }}>Departure Time</label>
                                    <input type="text" class="form-control" id="departureTime" placeholder="Last name" onChange={(e => {
                                        setDepartureTime(e.target.value)
                                    })} value={departureTime} required />
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="ticketPrice" style={{ marginLeft: '-120px' }}>Ticket price</label>
                                    <input type="text" class="form-control" id="ticketPrice" placeholder="Last name" onChange={(e) => {
                                        setTicketPrice(e.target.value)
                                    }} vallue={ticketPrice} required />
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="destination" style={{ marginLeft: '-120px' }}>Destiantion</label>
                                    <input type="text" class="form-control" id="destination" placeholder="Last name" onChange={((e) => {
                                        setDestination(e.target.value)
                                    })} value={destination} required />
                                </div>
                            </div>

                            {/* <div class="form-group col-md-4">
                    <label for="validationDefaultUsername">Destination</label>
                    <div class="input-group">

                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div> */}
                            <div class="row">

                                <div class="form-group col-md-4">
                                    <label for="validationDefault03" style={{ marginLeft: '-120px' }}>URL</label>
                                    <input type="text" class="form-control" id="validationDefault03" placeholder="City" onChange={((e) => {
                                        setTrainUrl(e.target.value)
                                    })} value={trainUrl} required />
                                </div>


                                <div class="form-group col-md-4">
                                    <label for="validationDefault04" style={{ marginLeft: '-120px' }}>Availability</label>
                                    <input type="text" class="form-control" id="validationDefault04" placeholder="State" />
                                </div>


                                <div class="form-group col-md-4">
                                    <label for="validationDefault05" style={{ marginLeft: '-120px' }}>Date</label>
                                    <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" />
                                </div>
                            </div>
                            {/* </div> */}

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                    <label class="form-check-label" for="invalidCheck2">
                                        <b>    I Agree to </b>
                                        terms and conditions
                                    </label>
                                </div>
                            </div>

                            <br></br>

                            <button class="btn btn-primary" style={{ marginRight: '10px' }} type="submit">Update form</button>

                            <button class="btn btn-danger" style={{ marginRight: '-400px' }} type="submit">Reset form</button>
                        </form>
                    </div>   </div></div></div>

    )
}

export default UpdateTrain
