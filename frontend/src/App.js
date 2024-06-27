
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddTrain from './pages/TrainManagement/AddTrain/AddTrain';
import AdminTrainList from './pages/TrainManagement/AdminTrainList/AdminTrainList';
import ClientTrainList from './pages/TrainManagement/ClientTrainList/ClientTrainList';
import AddTrain2 from './pages/TrainManagement/extra';
import UpdateTrain from './pages/TrainManagement/UpdateTrain/UpdateTrain';
import AdminViewMore from './pages/TrainManagement/AdminTrainList/AdminViewMore';
import PaymentManagement from './pages/TicketManagement/PaymentManagement/PaymentManagement';
import AddBooking from './pages/TicketManagement/AddBooking/AddBooking';
import UserType from './pages/UserManagement/UserType/UserType';
import RegisterClient from './pages/UserManagement/UserType/RegisterClient/RegisterClient';
import UserProfile from './pages/UserManagement/UserProfile/UserProfile';
import PaymentSuccess from './pages/TicketManagement/PaymentManagement/PaymentSuccess';
import PaymentCancel from './pages/TicketManagement/PaymentManagement/PaymentCancel';
import BookingList from './pages/TicketManagement/BookingList/BookingList';
import AboutUs from './pages/AboutUS/AboutUs';
import MapClient from './pages/TrainManagement/MapClient/MapClient';
import Receipt from './pages/TicketManagement/Receipt/Receipt';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTrain />} />
          <Route path="train/display" element={<AdminTrainList />} />
          {/* <Route path="/train/viewMore/:id" element={<AdminViewMore />} /> */}
          <Route path="/client" element={<ClientTrainList />} />
          <Route path="/float" element={<AddTrain2 />} />
          <Route path="/update/:id" element={<UpdateTrain />} />
          <Route path="/payment" element={<PaymentManagement />} />
          <Route path="/addBooking/:id" element={<AddBooking />} />
          <Route path="/userType" element={<UserType />} />
          <Route path="/register" element={<RegisterClient />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/paymentCancel" element={<PaymentCancel />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
          <Route path="/bookingList" element={<BookingList />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/map" element={<MapClient />} />
          {/* <Route path="/receipt/:id" element={<Receipt />} /> */}
          <Route path="/rece/:id" element={<Receipt />} />


        </Routes>
        <br></br>
        <Footer />
      </Router>

    </div >

  );
}

export default App;
