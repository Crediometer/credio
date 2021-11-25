import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import ATMcard from "../../image/ATMcard.svg";
import TransferBwAccount from "../transfer-bw-account/TransferBwAccount";
import TransferByCard from "../transfer-by-card-no/TransferByCard";
import OperationHistory from "../operation-history/OperationHistory";

const Card = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("transfer-bw-acct");
            element.classList.add('transfer-bw-acct-show');
            document.getElementById("transfer-bw-acct").style.display='inline';
            document.getElementById("card-page").style.display='none';
            return a=0;
        }else{
            document.getElementById("transfer-bw-acct").style.display='none';
            return a=1;
        }
    }
    var b;
    const handleClick1 = () => {
        if(b===1){
            var element = document.getElementById("transfer-by-card-no");
            element.classList.add('transfer-by-card-show');
            document.getElementById("transfer-by-card-no").style.display='inline';
            document.getElementById("card-page").style.display='none';
            return b=0;
        }else{
            document.getElementById("transfer-by-card-no").style.display='none';
            return b=1;
        }
    }
    var c;
    const handleClick2 = () => {
        if(c===1){
            var element = document.getElementById("operation-history");
            element.classList.add('operation-history-show');
            document.getElementById("operation-history").style.display='inline';
            document.getElementById("card-page").style.display='none';
            return c=0;
        }else{
            document.getElementById("operation-history").style.display='none';
            return c=1;
        }
    }
    return (
        <div>
            <div id="card-page" className="container-fluid card-page">
                <h1 className="card-page-heading">Cards</h1>
                <h2 className="cards-details-heading">Card details</h2>
                <div className="cards-details-page-balance-show">
                    <span className="your-balance">Your Balance</span>
                    <span className="balance-show">#1.250,69</span>
                </div>
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
                <a className="add-another-card" href="#">+ Add another card</a>
                <h1 className="what-you-look">What are you looking for?</h1>
                <div className="row account-section">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <ul className="account-actions">
                            <h2 className="account-action-heading">Account Actions</h2>
                            <li className="account-action">
                                <div className="account-action-card card">
                                    <div className="card-body">
                                        <div className="pink-card"></div>
                                        <div className="what-you-want">
                                            <span className="what-you-want-to-do">Transfer between accounts</span>
                                            <span className="what-you-do">Transferring between accounts</span>
                                        </div>
                                        <i onClick={handleClick} class="fas fa-greater-than greater-than"></i>
                                    </div>
                                </div>
                            </li>
                            <li className="account-action">
                                <div className="account-action-card card">
                                    <div className="card-body">
                                        <div className="pink-card"></div>
                                        <div className="what-you-want">
                                            <span className="what-you-want-to-do">Transfer by card number</span>
                                            <span className="what-you-do">Transferring by card number</span>
                                        </div>
                                        <i onClick={handleClick1} class="fas fa-greater-than greater-than"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                    <ul className="account-actions">
                            <h2 className="account-action-heading">Account Records</h2>
                            <li className="account-action">
                                <div className="account-action-card card">
                                    <div className="card-body">
                                        <div className="pink-card"></div>
                                        <div className="what-you-want">
                                            <span className="what-you-want-to-do">Operation history</span>
                                            <span className="what-you-do">View all the transactions on this card</span>
                                        </div>
                                        <i onClick={handleClick2} class="fas fa-greater-than greater-than"></i>
                                    </div>
                                </div>
                            </li>
                            <li className="account-action">
                                <div className="account-action-card card">
                                    <div className="card-body">
                                        <div className="pink-card"></div>
                                        <div className="what-you-want">
                                            <span className="what-you-want-to-do">Saved Receipts</span>
                                            <span className="what-you-do">saved recepts from previous payment</span>
                                        </div>
                                        <i class="fas fa-greater-than greater-than"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="transfer-bw-acct" id="transfer-bw-acct">
                <TransferBwAccount/>
            </div>
            <div className="transfer-by-card-no" id="transfer-by-card-no">
                <TransferByCard/>
            </div>
            <div className="operation-history" id="operation-history">
                <OperationHistory/>
            </div>
        </div>
    )
}

export default Card
