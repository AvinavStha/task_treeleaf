import React from "react";

const ProfileReadOnlyData = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (

       



            <div className="profiles">
                <div className="userShowBottom">
                    <span className="userShowTitle">Name</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.user_name}</span>
                    </div>
                    <span className="userShowTitle">Email</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.email}</span>
                    </div>
                    <span className="userShowTitle">Phone No.</span>
                    <div className="userShowInfo">
                        <span className="userShowTitle">{contact.phone_number}</span>
                    </div>
                    <span className="userShowTitle">Date of Birth</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.dob}</span>
                    </div>
                    <span className="userShowTitle">City</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.city}</span>
                    </div>
                    <span className="userShowTitle">District</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.district}</span>
                    </div>
                    <span className="userShowTitle">Province</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.province}</span>
                    </div>
                    <span className="userShowTitle">Country</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">{contact.country}</span>
                    </div>
                    <div className="Button">
                        <button
                            type="button"
                            className="userAddButton"
                            onClick={(event) => handleEditClick(event, contact)}
                        >
                            Edit
                        </button>
                        <button className="userAddButton" type="button" onClick={() => handleDeleteClick(contact.id)}>
                            Delete
                        </button>
                    </div>
                </div>

            </div>
    );
};

export default ProfileReadOnlyData;