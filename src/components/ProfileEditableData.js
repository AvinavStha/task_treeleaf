import React from "react";

const ProfileEditableData = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <div className="profiles">

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="text"
                        required="required"
                        placeholder="Enter a name..."
                        name="user_name"
                        value={editFormData.user_name}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>
            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="email"
                        required="required"
                        placeholder="Enter an email."
                        name="email"
                        value={editFormData.email}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="text"
                        required="required"
                        placeholder="Enter a phone number."
                        name="phone_number"
                        value={editFormData.phone_number}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="text"
                        required="required"
                        placeholder="Enter your DOB."
                        name="dob"
                        value={editFormData.dob}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="text"
                        required="required"
                        placeholder="Enter a city name."
                        name="city"
                        value={editFormData.city}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="text"
                        required="required"
                        placeholder="Enter a district name."
                        name="district"
                        value={editFormData.district}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="number"
                        required="required"
                        placeholder="Enter a province name."
                        name="province"
                        value={editFormData.province}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div className="userShowBottom">
                <div className="userShowInfoTitle">
                    <input
                        type="text"
                        required="required"
                        name="country"
                        value={editFormData.country}
                        onChange={handleEditFormChange}
                    ></input>
                </div>
            </div>

            <div>
                <button className="userAddButton" type="submit">Save</button>
                <button className="userAddButton" type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </div>
        </div>

    );
};

export default ProfileEditableData;