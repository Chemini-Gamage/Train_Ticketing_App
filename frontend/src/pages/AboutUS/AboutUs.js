import React from 'react'
import './AboutUs.css'
function AboutUs() {
    return (
        <div className="aboutUs">
            <img class="card-img-top" src="https://th.bing.com/th/id/R.e6d74da7812b10dacb4e4be3265f5bcb?rik=Wn7Ey%2fuq4JrTJw&pid=ImgRaw&r=0" alt="Card image cap" style={{ height: '290px', width: '1420px' }}></img>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Our Story</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Our Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Our Vision and Mission</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <p>
                        At [Your Train Ticketing System Name], we believe in making your travel experience seamless, convenient, and enjoyable. We are dedicated to providing a user-friendly platform for booking train tickets, offering a wide range of features to meet your travel needs.

                        Our Mission
                        Our mission is to revolutionize the way you book train tickets by offering an intuitive, efficient, and secure online booking system. We aim to simplify the process, saving you time and effort while ensuring you have all the necessary information to make informed travel decisions.

                        Who We Are
                        [Your Train Ticketing System Name] is a team of passionate individuals committed to improving your travel experience. With years of experience in the travel and technology industries, our team understands the importance of reliability, convenience, and customer satisfaction. We are here to provide you with a hassle-free ticket booking experience.

                    </p></div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <p>At [Your Company Name], we pride ourselves on offering a comprehensive and seamless train ticketing experience. Our services are designed to ensure your journey is comfortable, convenient, and enjoyable. We provide easy-to-use online booking, real-time seat availability, and multiple payment options to suit your needs. Our customer support team is available around the clock to assist with any inquiries or issues you may encounter. Additionally, we offer a variety of travel classes to cater to different budgets and preferences, ensuring that everyone can enjoy a pleasant trip with us. From booking to boarding, we're here to make your travel experience as smooth as possible.</p></div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><p>To be the leading provider of train ticketing services, recognized for our commitment to innovation, customer satisfaction, and sustainable travel solutions. We envision a future where train travel is the preferred mode of transportation, connecting people and places with ease and efficiency.

                    Mission:
                    Our mission is to revolutionize the train travel experience by providing exceptional service, leveraging cutting-edge technology, and prioritizing the needs of our customers. We strive to make train travel accessible, affordable, and enjoyable for all. Through continuous improvement and a focus on sustainability, we aim to contribute to a greener, more connected world. We are dedicated to fostering a culture of excellence, integrity, and customer-centricity in everything we do.






                </p></div>
            </div>
        </div>
    )
}

export default AboutUs
