import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Graph from "../../image/Graph.svg";
import ATMcard from "../../image/ATMcard.svg";
import twoATMcard from "../../image/2ATMcard.svg";
import dp from "../../image/dp.svg";


const Home = () => {
    return (
        <div>
            <div className="container-fluid home-page">
                <h1 className="heading">Your Finance Overview, Micheal!</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="card finance-card">
                            <div className="card-body">
                                <h5 className="card-title">Finance Report</h5>
                                <span className="sort-by">sort by</span>
                                <img src={Graph} alt="" className="finance-graph" />
                            </div>
                        </div>
                        <div className="card recent-transactions-card">
                            <div className="card-body">
                                <h5 className="card-title">Recent Transactions</h5>
                                <span className="sort-by">sort by</span>
                                <ul className="recent-transactions">
                                    <div className="current-transaction-date">Today | 21 Nov 2021</div>
                                    <li className="recent-transaction">
                                        <div className="transaction-card"></div>
                                        <div className="transaction-to-from">
                                            <span className="transfer-whom">Transfer to Mickey</span>
                                            <span className="transfer-time">10:28am</span>
                                        </div>
                                        <div className="transaction-amount">
                                            <span className="amount">#100</span>
                                            <span className="transaction-reason">Online food order</span>
                                        </div>
                                    </li>
                                    <li className="recent-transaction">
                                        <div className="transaction-card"></div>
                                        <div className="transaction-to-from">
                                            <span className="transfer-whom">Transfer from Andrew</span>
                                            <span className="transfer-time">10:28am</span>
                                        </div>
                                        <div className="transaction-amount">
                                            <span className="amount">#10500</span>
                                            <span className="transaction-reason">November Salary</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="recent-transactions">
                                    <div className="current-transaction-date">Yesterday | 20 Nov 2021</div>
                                    <li className="recent-transaction">
                                        <div className="transaction-card"></div>
                                        <div className="transaction-to-from">
                                            <span className="transfer-whom">Transfer to Mickey</span>
                                            <span className="transfer-time">10:28am</span>
                                        </div>
                                        <div className="transaction-amount">
                                            <span className="amount">#100</span>
                                            <span className="transaction-reason">Online food order</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <h3 className="your-card-heading">Your card</h3>
                        <div className="home-page-atm-card">
                            <div className="first-atm-card">
                                <img src={ATMcard} alt="" className="first-atm-card-img" />
                            </div>
                            <div className="second-atm-card">
                                <img src={twoATMcard} alt="" className="first-atm-card-img" />
                            </div>
                        </div>
                        <h3 className="your-chat-heading">Your chats</h3>
                        <div className="home-chat-section">
                            <ul className="chat-boxes">
                                <li className="chat-box">
                                    <div className="card chat-box-card">
                                        <img src={dp} alt="" className="chat-dp" />
                                        <div className="chat-information">
                                            <span className="sender-name">
                                                Lee Alexneder
                                            </span>
                                            <span className="last-msg">
                                                #267.0 incoming transaction
                                            </span>
                                        </div>
                                        <span className="msg-time">10:20am</span>
                                    </div>
                                </li>
                                <li className="chat-box">
                                    <div className="card chat-box-card">
                                        <img src={dp} alt="" className="chat-dp" />
                                        <div className="chat-information">
                                            <span className="sender-name">
                                                Lee Alexneder
                                            </span>
                                            <span className="last-msg">
                                                #267.0 incoming transaction
                                            </span>
                                        </div>
                                        <span className="msg-time">10:20am</span>
                                    </div>
                                </li>
                                <li className="chat-box">
                                    <div className="card chat-box-card">
                                        <img src={dp} alt="" className="chat-dp" />
                                        <div className="chat-information">
                                            <span className="sender-name">
                                                Lee Alexneder
                                            </span>
                                            <span className="last-msg">
                                                #267.0 incoming transaction
                                            </span>
                                        </div>
                                        <span className="msg-time">10:20am</span>
                                    </div>
                                </li>
                                <li className="chat-box">
                                    <div className="card chat-box-card">
                                        <img src={dp} alt="" className="chat-dp" />
                                        <div className="chat-information">
                                            <span className="sender-name">
                                                Lee Alexneder
                                            </span>
                                            <span className="last-msg">
                                                #267.0 incoming transaction
                                            </span>
                                        </div>
                                        <span className="msg-time">10:20am</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
