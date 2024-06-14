
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


  return (

    <div className="display">
      <h5> list of trains</h5>
      <hr></hr>


      <div className="row">

        {train.map((train) => (
          <div key={train._id} className="col-sm-3 mb-2" >
            <div class="card-group" style={{ height: '12px' }} >
              <div class="card">
                <img class="card-img-top" src={train.trainUrl} style={{ height: '150px' }} />

                <div class="card-body">
                  <h5 class="card-title">{train.trainName}</h5>
                  <button>BOok</button>
                  {/* <p class="card-text"></p> */}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Destination: {train.destination}</li>

                  <li class="list-group-item">Departure Location: {train.departureLocation}</li>
                  <li class="list-group-item">Time of Departure:{formatTime(train.departureTime)}</li>
                </ul>
                {/* <div class="card-body">
                  <button>BOok</button>

                </div> */}
              </div>




            </div></div>))}</div>


    </div>
  )
}














export default ClientTrainList
