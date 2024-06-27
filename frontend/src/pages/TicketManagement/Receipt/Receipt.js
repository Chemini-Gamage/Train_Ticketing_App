
import axios from 'axios'
import './Receipt.css'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
function Receipt() {

    const { id } = useParams();
    const contentToPrint = useRef()
    const handlePrint = useReactToPrint({
        content: () => contentToPrint.current,
        documentTitle: "receipt"
    })

    const [ticket, setTicket] = useState({})
    const [train, setTrain] = useState({})


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8070/ticket/get/${id}`).then((response) => {
                setTicket(response.data.response || {});
                console.log(response)
            }).catch((err) => {
                alert(err)
            })
            axios.get(`http://localhost:8070/train/${id}`).then((res) => {
                setTrain(res?.data.response || {});
            }).catch((err) => {
                console.log(err)
                alert(err)
            })



        }
    }, [id, ticket.trainId]);



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
        <div className="rec">


            <div ref={contentToPrint} className="printContainer">
                <div class="card" style={{ marginLeft: '502px', marginTop: '52px', width: "408px" }}>

                    <div class="card-body" key={ticket._id}>
                        <h5 class="card-title">Receipt</h5>
                        <p class="card-text">

                            <img class="card-img-top" src="https://th.bing.com/th/id/OIP.NOWcALZnN2qZcGscDHGn6gHaHa?rs=1&pid=ImgDetMain" style={{ width: '120px', height: '92px', marginTop: '-50px', marginLeft: '-210px' }} alt="Card image cap" />


                            <form>
                                <label for="inputEmail4">Booked BY:</label>
                                <div class="form-row">
                                    <div class="col">
                                        <label for="trainName">Train name</label>
                                        <input type="text" id="trainName" class="form-control" value={train.trainName || ``} />
                                    </div>
                                    <div class="col">
                                        <label for="departureTime" >Time</label>
                                        <input type="text" class="form-control" id="departureTime" value={train.departureTime || ``} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label for="destination">destination</label>
                                        <input type="text" id="destination" class="form-control" value={train.destination || ``} />
                                    </div>
                                    <div class="col">
                                        <label for="departureLocation">departure at</label>
                                        <input type="text" id="departureLocation" class="form-control" value={train.departure || ``} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label for="qty">No of seats booked</label>
                                        <input type="text" id="qty" class="form-control" value={ticket.qty} />
                                    </div>
                                    <div class="col">
                                        <label for="inputEmail4">payed</label>
                                        <input type="text" class="form-control" value={ticket.calculateFee} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label for="trainClass">Class</label>
                                        <input type="text" id="trainClass" class="form-control" value={train.trainClass || ``} />
                                    </div>
                                    <div class="col">
                                        <label for="inputEmail4">contact number</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                            </form>

                        </p>  </div>  </div>  </div>
            <a href="#" class="btn btn-primary" onClick={() => { handlePrint() }}>Download</a>


        </div>
    )
}

export default Receipt
