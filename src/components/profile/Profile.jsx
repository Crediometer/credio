import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import Profile1 from "../../image/Profile.svg";
import ATMcard from "../../image/ATMcard.svg";
import twoATMcard from "../../image/2ATMcard.svg";
import uba from "../../image/uba.svg";


const Profile = () => {
    return (
        <div>
            <div className="container-fluid profile-page">
                <h1 className="profile-heading">Profile</h1>
                <div className="profile-head">
                    <img src={Profile1} alt="" className="profile-img" />
                    <div className="profile-info">
                        <div className="name">Micheal Josh</div>
                        <span className="phone-no">+234-8936523456</span>
                        <div className="profile-balance-card">
                            <span className="your-balance-text">Your Balance</span>
                            <span className="your-balance-amount">#1250.00</span>
                        </div>
                    </div>
                    <div className="credit-score">
                        <span className="credit-score-text">Your Credit Score</span>
                        <span className="credit-amount">745</span>
                        <span className="credit-very-good">Very good</span>
                    </div>
                </div>
                <div className="card-bank">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="your-cards-heading">Your Card</h2>
                            <a className="add-card" href="#">Add card +</a>
                            <img src={ATMcard} alt="" className="profile-atm-card" />
                            <img src={twoATMcard} alt="" className="profile-atm-card2" />
                        </div>
                        <div className="col-md-6 right-side-profile">
                            <h2 className="your-bank-heading">Your Bank</h2>
                            <a className="add-bank" href="#">Add Bank +</a>
                            <div className="your-bank-card card">
                                <img src={uba} alt="" className="uba" />
                                <div className="bank-info">
                                    <span className="bank-name">UBA bank</span>
                                    <span className="account-type">Saving account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-light">Add Another Account</button>
                <button className="btn btn-danger">Delete Account</button>
            </div>
        </div>
    )
}

export default Profile
