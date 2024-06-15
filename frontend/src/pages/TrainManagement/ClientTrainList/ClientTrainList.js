import './ClientTrainList.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function ClientTrainList() {

  const [train, setTrain] = useState([])
  function getTrain() {
    axios.get(`http://localhost:8070/train/display`).then((resp) => {
      setTrain(resp.data)
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

  const filterData = (train, searchkey) => {
    const result4 = train.filter((train) =>
      train.destination.toLowerCase().slice(0, 4).includes(searchkey.toLowerCase()));
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

    <div className="display">
      {/* <h5> list of trains</h5> */}
      {/* highligh the menu icon */}
      <form class="form-inline my-2 my-lg-4" style={{ marginLeft: '250px' }}>
        <input class="form-control mr-sm-2" type="search" onChange={handleSearchArea} placeholder="Search by destination" style={{ width: '900px' }} aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>


      </form>
      <hr></hr>


      <div className="row" style={{ marginLeft: '80px', marginRight: '-80px', marginTop: '50px' }}>

        {train.map((train) => (
          <div key={train._id} className="col-sm-3 mb-3" >
            <div class="card-group" style={{ height: '2px' }} >
              <div class="card">
                <img class="card-img-top" src={train.trainUrl} style={{ height: '140px' }} />
                <div class="availabilty" style={{ marginTop: '-40px', backgroundColor: 'green' }}   >{train.availability}</div>

                <button>Book ticket</button>
                {/* <p class="card-text"></p> */}

                <div class="container mt-5" >
                  <div class style={{ marginTop: '-42px' }}>

                    <div class="card-body">
                      <p style={{ marginLeft: '-212px' }}>{train.trainName}</p>
                      <p style={{ marginLeft: '200px', marginTop: '-40px' }}>{train.departureTime}</p>
                      <div className="dep">
                        <p style={{ marginLeft: '-12px' }}>{train.destination}</p>
                      </div>
                      <p style={{ marginLeft: '-212px', marginTop: '10px' }}>Rs.{train.ticketPrice}.00</p>
                      <button>check route</button>
                    </div>

                  </div>
                </div >
              </div >


            </div >


          </div >
        ))}
      </div >

    </div >
  )
}














export default ClientTrainList
