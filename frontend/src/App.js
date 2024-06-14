
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddTrain from './pages/TrainManagement/AddTrain/AddTrain';
import AdminTrainList from './pages/TrainManagement/AdminTrainList/AdminTrainList';
import ClientTrainList from './pages/TrainManagement/ClientTrainList/ClientTrainList';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTrain />} />
          <Route path="train/display" element={<AdminTrainList />} />
          <Route path="/client" element={<ClientTrainList />} />

        </Routes>
        <Footer />
      </Router>

    </div >

  );
}

export default App;
