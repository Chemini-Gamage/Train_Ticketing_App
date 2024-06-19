import './ClientTrainList.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function ClientTrainList({ departureLocation, destination }) {

  const [trainList, setTrainList] = useState([])
  function getTrain() {
    axios.get(`http://localhost:8070/train/display`).then((resp) => {
      setTrainList(resp.data)
    }).catch((err) => {
      alert(err)
    })
  }
  useEffect(() => {
    getTrain()
  }, []);




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

  const filterData = (trainList, searchkey) => {
    const result4 = trainList.filter((trainList) =>
      trainList.destination.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
    setTrainList(result4)
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

    <div className="display">
      {/* <h5> list of trains</h5> */}
      {/* highligh the menu icon */}
      <form class="form-inline my-2 my-lg-4" style={{ marginLeft: '250px' }}>
        <input class="form-control mr-sm-2" type="search" onChange={handleSearchArea} placeholder="Search by destination" style={{ width: '900px' }} aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>


      </form>
      <hr></hr>


      <div className="row" style={{ marginLeft: '40px', marginRight: '140px', marginTop: '50px' }}>

        {trainList.map((trainList) => (
          <div key={trainList._id} className="col-md-4 mb-4" >
            <div class="card-group" style={{ width: '350px', marginBottom: '20px' }} >
              <div class="card">
                <img class="card-img-top" src={trainList.trainUrl} style={{ height: '120px' }} />
                <div class={`availability ${trainList.availability === `available` ? `bg-success` : 'bg-danger'}`}>
                  {trainList.availability}</div>

                <Link to={`/addBooking/${trainList._id}`} className="btn btn-primary" style={{ marginLeft: '0px', marginRight: '10px', marginTop: '12px' }}>book ticket</Link>

                {/* <p class="card-text"></p> */}

                <div class="container mt-5" >
                  <div class style={{ marginTop: '-42px' }}>

                    <div class="card-body">
                      <p style={{ marginLeft: '-212px' }}>{trainList.trainName}</p>
                      <p style={{ marginLeft: '200px', marginTop: '-40px' }}>{trainList.departureTime}</p>
                      <div className="depFrom">
                        <p style={{ marginLeft: '-12px' }}>FROM:{trainList.departureLocation}</p>
                      </div>
                      <div className="dep">
                        <p style={{ marginLeft: '-12px' }}>TO:{trainList.destination}</p>
                      </div>
                      <p style={{ marginLeft: '-212px', marginTop: '10px' }}>Rs.{trainList.ticketPrice}.00</p>
                      <button>check route</button>
                    </div>

                  </div>
                </div >
              </div >


            </div >


          </div >
        ))}
      </div >
      <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>    <br></br>
    </div >

  )
}














export default ClientTrainList
