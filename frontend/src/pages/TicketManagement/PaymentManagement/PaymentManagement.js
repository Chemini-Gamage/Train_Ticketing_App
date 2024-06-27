import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
function PaymentManagement() {
    const [year, setYear] = useState([]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearArray = [];
        for (let i = currentYear; i <= currentYear + 10; i++) {
            yearArray.push(i);
        }
        setYear(yearArray);
    }, []);

    const contentToPrint = useRef()
    const handlePrint = useReactToPrint({
       content:()=>contentToPrint.current,
       documentTitle:"pay data"
    })


    return (
        <div>
            <br />
            <div className="card" style={{ width: '580px', marginLeft: '500px' }}>
                <div className="card-body">
                    <h5 className="card-title">Enter the account details</h5>
                    <p className="card-text">Ticket ID:</p>
                    <button className ="btn btn-success" onClick={() => { handlePrint() }}>print</button>
                    <form>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <img
                                src="https://th.bing.com/th/id/R.092bf40ff3efda1cdb846a3a516a0b02?rik=3dbciwLVJefmCA&pid=ImgRaw&r=0"
                                style={{ width: '50px' }}
                                alt="MasterCard"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">MasterCard</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <img
                                src="https://th.bing.com/th/id/OIP.DCgfEJDZZDka6j0wAAPFrAAAAA?rs=1&pid=ImgDetMain"
                                style={{ width: '50px' }}
                                alt="Visa"
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Visa</label>
                            <br />
                        </div>
                        <div ref={contentToPrint}>
                            <div className="form-group row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAccountNumber" style={{ marginLeft: '-80px' }}>Account number</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputAccountNumber" placeholder="123456789" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="expiryMonth" style={{ marginLeft: '-150px' }}>Expiry Month</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" id="expiryMonth" style={{ marginLeft: '-100px' }}>
                                                <option value="" disabled selected>Month</option>
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                        </div>
                                        <label htmlFor="expiryYear" style={{ marginLeft: '20px', marginTop: '-40px' }}>Expiry Year</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" id="expiryYear" style={{ marginLeft: '190px', marginTop: '-38px' }}>
                                                <option value="" disabled selected>Year</option>
                                                {year.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputAccountHolder" style={{ marginLeft: '-80px' }}>Account holder's name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputAccountHolder" placeholder="ex: John" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputContactNumber" style={{ marginLeft: '-140px' }}>Contact number</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputContactNumber" placeholder="132345678" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCVV" style={{ marginLeft: '-200px' }}>CVV</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputCVV" placeholder="CVV" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail" style={{ marginLeft: '-200px' }}>Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail" placeholder="email@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1" style={{ color: 'red', marginLeft: '-300px' }}>Send me an email receipt</label>
                                </div>
                                <button className="btn btn-success">DONE</button>
                                {/* add a download receipt tot he alert that you receive after you  click on done */}
                            </div></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaymentManagement;
