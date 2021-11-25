import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TransferBwAccount.css";
import dp from "../../image/dp.svg";

const TransferBwAccount = () => {
    return (
        <div>
            <div className="container-fluid transfer-bw-acct-page">
                <h1 className="transfer-bw-acct-heading">Transfer Between Account</h1>
                <div className="sub-heading">
                    <label className="people" for="basic-url">People</label>
                    <div class="input-group input-people mb-3">
                        <input placeholder="search by name or number" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                <ul className="transfer-by-accounts">
                    <li className="transfer-by-account">
                        <div className="card transfer-by-acct-card">
                            <img src={dp} alt="" className="transfer-by-acct-dp" />
                            <div className="transfer-by-acct-info">
                                <span className="transfer-by-acct-name">Lee Alexender</span>
                                <span className="transfer-by-acct-phone">+234-8936523456</span>
                            </div>
                            <span className="transfer-by-acct-transfer">
                                Transfer  <span className="transfer-icon"><i class="fas fa-greater-than transfer-icons"></i></span>
                            </span>
                        </div>
                    </li>
                    <li className="transfer-by-account">
                        <div className="card transfer-by-acct-card">
                            <img src={dp} alt="" className="transfer-by-acct-dp" />
                            <div className="transfer-by-acct-info">
                                <span className="transfer-by-acct-name">Lee Alexender</span>
                                <span className="transfer-by-acct-phone">+234-8936523456</span>
                            </div>
                            <span className="transfer-by-acct-transfer">
                                Transfer  <span className="transfer-icon"><i class="fas fa-greater-than transfer-icons"></i></span>
                            </span>
                        </div>
                    </li>
                    <li className="transfer-by-account">
                        <div className="card transfer-by-acct-card">
                            <img src={dp} alt="" className="transfer-by-acct-dp" />
                            <div className="transfer-by-acct-info">
                                <span className="transfer-by-acct-name">Lee Alexender</span>
                                <span className="transfer-by-acct-phone">+234-8936523456</span>
                            </div>
                            <span className="transfer-by-acct-transfer">
                                Transfer  <span className="transfer-icon"><i class="fas fa-greater-than transfer-icons"></i></span>
                            </span>
                        </div>
                    </li>
                    <li className="transfer-by-account">
                        <div className="card transfer-by-acct-card">
                            <img src={dp} alt="" className="transfer-by-acct-dp" />
                            <div className="transfer-by-acct-info">
                                <span className="transfer-by-acct-name">Lee Alexender</span>
                                <span className="transfer-by-acct-phone">+234-8936523456</span>
                            </div>
                            <span className="transfer-by-acct-transfer">
                                Transfer  <span className="transfer-icon"><i class="fas fa-greater-than transfer-icons"></i></span>
                            </span>
                        </div>
                    </li>
                    <li className="transfer-by-account">
                        <div className="card transfer-by-acct-card">
                            <img src={dp} alt="" className="transfer-by-acct-dp" />
                            <div className="transfer-by-acct-info">
                                <span className="transfer-by-acct-name">Lee Alexender</span>
                                <span className="transfer-by-acct-phone">+234-8936523456</span>
                            </div>
                            <span className="transfer-by-acct-transfer">
                                Transfer  <span className="transfer-icon"><i class="fas fa-greater-than transfer-icons"></i></span>
                            </span>
                        </div>
                    </li>
                    <li className="transfer-by-account">
                        <div className="card transfer-by-acct-card">
                            <img src={dp} alt="" className="transfer-by-acct-dp" />
                            <div className="transfer-by-acct-info">
                                <span className="transfer-by-acct-name">Lee Alexender</span>
                                <span className="transfer-by-acct-phone">+234-8936523456</span>
                            </div>
                            <span className="transfer-by-acct-transfer">
                                Transfer  <span className="transfer-icon"><i class="fas fa-greater-than transfer-icons"></i></span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TransferBwAccount
