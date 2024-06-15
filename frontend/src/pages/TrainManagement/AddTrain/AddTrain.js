import React, { useState } from 'react'
import axios from 'axios'
import './AddTrain.css'
function AddTrain() {
    const [trainCode, setTrainCode] = useState("")
    const [trainName, setTrainName] = useState("")
    const [destination, setDestination] = useState("")
    const [departureLocation, setDepartureLocation] = useState("")
    const [departureTime, setDepartureTime] = useState("")
    const [ticketPrice, setTicketPrice] = useState("")
    const [trainUrl, setTrainUrl] = useState("")
    const [errors, setErrors] = useState({});
    const [availability, setAvailability] = useState("available")
    async function sendData(e) {
        e.preventDefault();


        let validationError = {};
        if (!validateName(trainName)) {
            validationError.trainName = "no characters other than alphabetical leteers are allowed"
        }
        const newTrain = {
            trainCode,
            trainName,
            departureTime,
            departureLocation,
            destination,
            ticketPrice,
            trainUrl,
            availability
        };
        console.log(newTrain);
        axios.post(`http://localhost:8070/train/add`, newTrain).then((resp) => {
            alert(`train added`)
            console.log(resp)
            window.location.replace("/train/display")
        }).catch((err) => {
            alert(err)
        })
    }
    const handleRadioChange = (event) => {
        setAvailability(event.target.value)
    }


    //validations
    const validateName = (name) => /^[A-Za-z\s]+$/.test(name);




    return (
        <div className="add"><br></br>
            <div className="container">
                <div className="modal-overlay">

                    <div className="form-box">
                        <form style={{ marginLeft: '20px' }} onSubmit={sendData}>
                            <div className="title" style={{ marginLeft: '-500px', marginTop: '10px' }}>
                                <button style={{ marginLeft: '-40px', marginTop: '20px' }}>List</button>

                                <h5><b>New train</b></h5>
                            </div>
                            <h5>breadcrumbs here</h5>


                            <div class="row">
                                <div class="form-group col-md-4">
                                    <div className="notched-outline">
                                        <label for="trainCode" style={{ marginLeft: '-120px' }}>Train Code</label>
                                        <input type="text" class="form-control" id="trainCode" placeholder="First name" variant="outlined" onChange={(e) => {
                                            setTrainCode(e.target.value)
                                        }} required />
                                    </div></div>
                                <div class="form-group col-md-4">
                                    <label for="trainName" style={{ marginLeft: '-120px' }}>Train name</label>
                                    <input type="text" class="form-control" id="trainName" placeholder="First name" onChange={(e) => {
                                        setTrainName(e.target.value)
                                    }} required />
                                    {errors.trainName && <div className="text-danger">{errors.trainName}</div>}
                                </div>


                                <div class="form-group col-md-4">
                                    <label for="departureLocation" style={{ marginLeft: '-120px' }}>Departure Location</label>
                                    <input type="text" class="form-control" id="departureLocation" placeholder="Last name" onChange={(e) => {
                                        setDepartureLocation(e.target.value)
                                    }} required />
                                </div>
                            </div>


                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="departureTime" style={{ marginLeft: '-120px' }}>Departure Time</label>
                                    <input type="time" class="form-control" id="departureTime" placeholder="Last name" onChange={(e => {
                                        setDepartureTime(e.target.value)
                                    })} required />
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="ticketPrice" style={{ marginLeft: '-120px' }}>Ticket price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Rs</span>
                                        </div>

                                        <input type="text" class="form-control" id="ticketPrice" placeholder="Last name" onChange={(e) => {
                                            setTicketPrice(e.target.value)
                                        }} required />
                                    </div></div>

                                <div class="form-group col-md-4">
                                    <label for="destination" style={{ marginLeft: '-120px' }}>Destiantion</label>
                                    <input type="text" class="form-control" id="destination" placeholder="Last name" onChange={((e) => {
                                        setDestination(e.target.value)
                                    })} required />
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
                                    <label for="url" style={{ marginLeft: '-120px' }}>URL</label>
                                    <input type="text" class="form-control" id="validationDefault03ur" placeholder="City" onChange={((e) => {
                                        setTrainUrl(e.target.value)
                                    })} required />
                                </div>


                                {/* <div class="form-group col-md-4">
                                    <label for="validationDefault04" style={{ marginLeft: '-120px' }}>Availability</label>
                                    <input type="text" class="form-control" id="validationDefault04" placeholder="State" />
                                </div> */}



                                {/* </div> */}

                                <div className="radOptions" style={{ marginLeft: '450px', marginTop: '-82px' }}>
                                    <label for="radOptions" style={{ marginLeft: '-950px' }}>Available</label>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="available" value="available" checked={availability === 'available'} class="custom-control-input" onChange={handleRadioChange} />
                                        <label class="custom-control-label" for="available" style={{ marginLeft: '-950px' }} >Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="unavailable" value="unavailable" checked={availability === 'unavailable'} onChange={handleRadioChange} name="customRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="unavailable" style={{ marginLeft: '-950px' }}>No</label>
                                    </div>
                                </div>


                            </div >


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

                            <button class="btn btn-primary" style={{ marginRight: '10px', marginBottom: '12px' }} type="submit">Submit form</button>

                            <button class="btn btn-danger" style={{ marginRight: '-400px', marginBottom: '12px' }} type="submit">Reset form</button>
                        </form>
                    </div>   </div></div></div>

    )
}

export default AddTrain
