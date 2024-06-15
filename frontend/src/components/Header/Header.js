import React, { useEffect, useState } from 'react'
import './Heade.css'
import { CgProfile } from "react-icons/cg";
function Header() {


    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    const formatDateTime = (date) => {
        const option = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        return date.toLocaleDateString(undefined, option)
    }
    return (
        // <nav class="navbar" style={{backgroundColor: `#e3f2fd`}}>
        //     <nav class="navbar navbar-light">
        //         <form class="container-fluid justify-content-start">
        //             <a href="#" className="logo">
        //                 <img src="https://th.bing.com/th/id/OIP.NOWcALZnN2qZcGscDHGn6gHaHa?rs=1&pid=ImgDetMain" style={{ width: "52px" }} />
        //             </a>
        //             <div className="headerContainer" style={{ marginLeft: '220px', marginTop:'12px' }}>
        //             <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        //   <a class="nav-item nav-link" href="#">Features</a>
        //   <a class="nav-item nav-link" href="#">Pricing</a>
        //                 </div>
        //                 <div className="currentDT" style={{ marginLeft: '1000px' }}>
        //                     {formatDateTime(currentDateTime)}
        //                 </div>

        //         </form>
        //     </nav>




        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" className="logo">
                <img src="https://th.bing.com/th/id/OIP.NOWcALZnN2qZcGscDHGn6gHaHa?rs=1&pid=ImgDetMain" style={{ width: "52px" }} />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" style={{ marginLeft: '50px', marginRight: '-50px' }} href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#" style={{ marginLeft: '70px', marginRight: '-50px' }}>Train list</a>
                    <a class="nav-item nav-link" href="#" style={{ marginLeft: '50px', marginRight: '-50px' }}>Booking List</a>
                </div>
                <div className="currentDT" style={{ marginLeft: '600px' }}>
                    {formatDateTime(currentDateTime)}
                </div>
                <a className="nav-item nav-link" href="#" style={{ marginLeft: '90px', fontSize: '42px' }}>
    <CgProfile />
</a>

            </div>
        </nav>
    )
}

export default Header
