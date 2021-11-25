import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css";
import dp from "../../image/dp.svg";

const Chat = () => {
    return (
        <div>
            <div className="container-fluid chat-page">
                <h1 className="transfer-bw-acct-heading">Transfer Between Accounts</h1>
                <div className="chat-head-section">
                    <i class="fas fa-less-than"></i>
                    <img src={dp} alt="" className="chat-section-dp" />
                    <div className="chat-section-info">
                        <span className="transfer-by-acct-name">Lee Alexender</span>
                        <span className="transfer-by-acct-phone">+234-8936523456</span>
                    </div>
                </div>
                <div className="chat-section ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="payment-to-you-card card">
                                <div className="chat-payment-info">
                                    <span className="to-you-heading">Payment To You</span>
                                    <span className="for-what">Food</span>
                                    <span className="payment-amount">#544</span>
                                </div>
                                <span className="sending-time">Paid. Nov 12</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="payment-by-you-card card">
                                <div className="chat-payment-info">
                                    <span className="to-you-heading">Payment To Lee Alexender</span>
                                    <span className="for-what">Food</span>
                                    <span className="payment-amount">#544</span>
                                </div>
                                <span className="sending-time">Paid. Nov 12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-card card">
                    <button className="btn btn-pay">Pay</button>
                    <button className="btn btn-request">Request</button>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Message.." aria-label="Username" aria-describedby="basic-addon1"/>
                        <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="far fa-paper-plane"></i>    
                        </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
