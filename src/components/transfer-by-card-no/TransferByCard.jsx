import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TransferByCard.css";
import ATMcard from "../../image/ATMcard.svg";
import ATMcardLogo from "../../image/ATMcardLogo.svg";

const TransferByCard = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("payment-successful");
            element.classList.add('show-confirmation');
            document.getElementById("payment-successful").style.display="inline"
            document.getElementById("transfer-by-card").style.display="none";
            return a=0;
        }else{
            document.getElementById("payment-successful").style.display="none"
            return a=1;
        }
    }
    return (
        <div>
            <div className="container-fluid transfer-by-card-page">
                <h1 className="card-page-heading">Transferring by Card Number</h1>
                <h2 className="cards-details-heading">Your Card details</h2>
                <div className="cards-details-card card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <ul className="card-details-informations">
                                        <li className="card-details-information">
                                            <span className="information-heading">Name on Card</span>
                                            <span className="information">Micheal</span>
                                        </li>
                                        <li className="card-details-information">
                                            <span className="information-heading">Date of Issue</span>
                                            <span className="information">21-11-2021</span>
                                        </li>
                                        <li className="card-details-information">
                                            <span className="information-heading">Expiry Date</span>
                                            <span className="information">21-11-2023</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <img src={ATMcard} alt="" className="card-details-atm-card" />
                                </div>
                            </div>
                        </div>
                </div>
                <div id="transfer-by-card" className="transfer-by-card card">
                    <label className="transfer-to" for="basic-url">Transfer to</label>
                    <input
                        type="text" 
                        placeholder="To"
                        className="transfer-to-whom"
                        required="true"
                    />
                    <input
                        type="text" 
                        required="false"
                        placeholder="Comment(optional)"
                        className="transfer-to-comment"
                    />
                    <button onClick={handleClick} className="btn btn-proceed">Proceed</button>
                </div>
                <div id="payment-successful" className="payment-successful">
                    <h2 className="payment-successful-heading">Payment Successful</h2>
                    <div className="card payment-successful-card">
                        <div className="row">
                            <div className="col-md-6 left-side-success">
                                <h4 className="details-heading">Details</h4>
                                <div className="success-from">
                                    <span className="from">From</span>
                                    <span className="from-name">Micheal</span>
                                </div>
                                <div className="card-logo">
                                    <img src={ATMcardLogo} alt="" className="atm-card-logo" />
                                    <span className="card-number">**** 5333</span>
                                </div>
                                <div className="payment-amount">
                                    <span className="success-amount-heading">Amount</span>
                                    <span className="success-amount">#1200</span>
                                </div>
                            </div>
                            <div className="col-md-6 right-side">
                                <div className="success-from">
                                    <span className="from">To</span>
                                    <span className="from-name">Tony T Electrical</span>
                                </div>
                                <div className="card-logo">
                                    <img src={ATMcardLogo} alt="" className="atm-card-logo" />
                                    <span className="card-number">**** 2333</span>
                                </div>
                                <div className="payment-amount">
                                    <span className="success-amount-heading">Commission</span>
                                    <span className="success-amount">#1200</span>
                                </div>
                            </div>
                            <button className="btn btn-success">Payment Successful</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferByCard
