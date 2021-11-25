import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Transaction.css";
import dp from "../../image/dp.svg";

const Transaction = () => {
    return (
        <div>
            <div className="container-fluid transaction-page">
                <h1 className="transaction-heading">Transactions</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search by name or date" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">search</button>
                    </div>
                </div>
                <ul className="transaction-page-cards">
                    <span className="current-transaction-page-date">Today|21 Nov 2021</span>
                    <li className="transaction-page-card">
                        <div className="transaction-single-card card">
                            <img src={dp} alt="" className="chat-dp" />
                            <div className="chat-information">
                                <span className="sender-name">
                                    Lee Alexneder
                                </span>
                                <span className="last-msg">
                                    10:00am
                                </span>
                            </div>
                            <div className="transaction-information">
                                <span className="transaction-amount">#100</span>
                                <span style={{marginTop: "-0.7rem"}} className="transaction-reason">Online Food Order</span>
                            </div>
                        </div>
                    </li>
                    <li className="transaction-page-card">
                        <div className="transaction-single-card card">
                            <img src={dp} alt="" className="chat-dp" />
                            <div className="chat-information">
                                <span className="sender-name">
                                    Lee Alexneder
                                </span>
                                <span className="last-msg">
                                    10:00am
                                </span>
                            </div>
                            <div className="transaction-information">
                                <span className="transaction-amount">#100</span>
                                <span style={{marginTop: "-0.7rem"}} className="transaction-reason">Online Food Order</span>
                            </div>
                        </div>
                    </li>
                    <li className="transaction-page-card">
                        <div className="transaction-single-card card">
                            <img src={dp} alt="" className="chat-dp" />
                            <div className="chat-information">
                                <span className="sender-name">
                                    Lee Alexneder
                                </span>
                                <span className="last-msg">
                                    10:00am
                                </span>
                            </div>
                            <div className="transaction-information">
                                <span className="transaction-amount">#100</span>
                                <span style={{marginTop: "-0.7rem"}} className="transaction-reason">Online Food Order</span>
                            </div>
                        </div>
                    </li>
                    <span className="current-transaction-page-date">Yesterday|20 Nov 2021</span>
                    <li className="transaction-page-card">
                        <div className="transaction-single-card card">
                            <img src={dp} alt="" className="chat-dp" />
                            <div className="chat-information">
                                <span className="sender-name">
                                    Lee Alexneder
                                </span>
                                <span className="last-msg">
                                    10:00am
                                </span>
                            </div>
                            <div className="transaction-information">
                                <span className="transaction-amount">#100</span>
                                <span style={{marginTop: "-0.7rem"}} className="transaction-reason">Online Food Order</span>
                            </div>
                        </div>
                    </li>
                    <li className="transaction-page-card">
                        <div className="transaction-single-card card">
                            <img src={dp} alt="" className="chat-dp" />
                            <div className="chat-information">
                                <span className="sender-name">
                                    Lee Alexneder
                                </span>
                                <span className="last-msg">
                                    10:00am
                                </span>
                            </div>
                            <div className="transaction-information">
                                <span className="transaction-amount">#100</span>
                                <span style={{marginTop: "-0.7rem"}} className="transaction-reason">Online Food Order</span>
                            </div>
                        </div>
                    </li>
                    <li className="transaction-page-card">
                        <div className="transaction-single-card card">
                            <img src={dp} alt="" className="chat-dp" />
                            <div className="chat-information">
                                <span className="sender-name">
                                    Lee Alexneder
                                </span>
                                <span className="last-msg">
                                    10:00am
                                </span>
                            </div>
                            <div className="transaction-information">
                                <span className="transaction-amount">#100</span>
                                <span style={{marginTop: "-0.7rem"}} className="transaction-reason">Online Food Order</span>
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Transaction
