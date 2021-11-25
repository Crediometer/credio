import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pay.css";
import dp from "../../image/dp.svg";
import uba from "../../image/uba.svg";


const Pay = () => {
    return (
        <div>
            <div className="container-fluid pay-page">
                <h1 className="transfer-bw-acct-heading">Transfer Between Accounts</h1>
                <div className="pay-card card">
                    <div className="pay-head-section">
                        <i class="fas fa-less-than"></i>
                        <img src={dp} alt="" className="chat-section-dp" />
                        <div className="chat-section-info">
                            <span className="transfer-by-acct-name">Lee Alexender</span>
                            <span className="transfer-by-acct-phone">+234-8936523456</span>
                        </div>
                    </div>
                    <div className="middle-section">
                        <input type="text" className="pay-amount" placeholder="Amount"/>
                        <input type="text" className="add-note" placeholder="Add note" />
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="choose-bank">
                                <h4 className="choose-heading">Choose to pay with</h4>
                                <div className="bank-icon">
                                    <img src={uba} alt="" className="uba-bank-choose" />
                                    <div className="bank-name-choose">
                                        <span className="bank-name">UBA Bank</span>
                                        <span className="acct-type">saving account</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="arrow">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay
