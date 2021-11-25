import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./OperationHistory.css";
import dp from "../../image/dp.svg";

const OperationHistory = () => {
    return (
        <div>
            <div className="container-fluid operation-history-page">
                <h1 className="transfer-bw-acct-heading">Operation History</h1>
                <div style={{marginTop: "-2rem"}} className="sub-heading">
                    <div class="input-group input-people mb-3">
                        <input placeholder="search by name or number" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                <div className="operation-history">
                    <ul className="operation-historys">
                        <div className="current-date">TODAY|21 NOV 2021</div>
                        <li className="operation-histories">
                            <div className="operation-history-card card">
                                <img src={dp} alt="" className="transfer-by-acct-dp" />
                                <div className="transfer-by-acct-info">
                                    <span className="transfer-by-acct-name">Lee Alexender</span>
                                    <span className="transfer-by-acct-phone">#267.0 incoming transaction</span>
                                </div>
                            </div>
                        </li>
                        <li className="operation-histories">
                            <div className="operation-history-card card">
                                <img src={dp} alt="" className="transfer-by-acct-dp" />
                                <div className="transfer-by-acct-info">
                                    <span className="transfer-by-acct-name">Lee Alexender</span>
                                    <span className="transfer-by-acct-phone">#267.0 incoming transaction</span>
                                </div>
                            </div>
                        </li>
                        <li className="operation-histories">
                            <div className="operation-history-card card">
                                <img src={dp} alt="" className="transfer-by-acct-dp" />
                                <div className="transfer-by-acct-info">
                                    <span className="transfer-by-acct-name">Lee Alexender</span>
                                    <span className="transfer-by-acct-phone">#267.0 incoming transaction</span>
                                </div>
                            </div>
                        </li>
                        <div className="current-date">YESTERDAY|21 NOV 2021</div>
                        <li className="operation-histories">
                            <div className="operation-history-card card">
                                <img src={dp} alt="" className="transfer-by-acct-dp" />
                                <div className="transfer-by-acct-info">
                                    <span className="transfer-by-acct-name">Lee Alexender</span>
                                    <span className="transfer-by-acct-phone">#267.0 incoming transaction</span>
                                </div>
                            </div>
                        </li>
                        <li className="operation-histories">
                            <div className="operation-history-card card">
                                <img src={dp} alt="" className="transfer-by-acct-dp" />
                                <div className="transfer-by-acct-info">
                                    <span className="transfer-by-acct-name">Lee Alexender</span>
                                    <span className="transfer-by-acct-phone">#267.0 incoming transaction</span>
                                </div>
                            </div>
                        </li>
                        <li className="operation-histories">
                            <div className="operation-history-card card">
                                <img src={dp} alt="" className="transfer-by-acct-dp" />
                                <div className="transfer-by-acct-info">
                                    <span className="transfer-by-acct-name">Lee Alexender</span>
                                    <span className="transfer-by-acct-phone">#267.0 incoming transaction</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OperationHistory;
