import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./app.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import ProfileReadOnlyData from "./components/ProfileReadOnlyData";
import EditableRow from "./components/EditableRow";
import ProfileEditableData from "./components/ProfileEditableData";
import api from "./api/Contacts";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal"
  });

  const [editFormData, setEditFormData] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    dob: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal"
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      user_name: addFormData.user_name,
      email: addFormData.email,
      phone_number: addFormData.phone_number,
      dob: addFormData.dob,
      city: addFormData.city,
      district: addFormData.district,
      province: addFormData.province,
      country: addFormData.country
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      user_name: editFormData.user_name,
      email: editFormData.email,
      phone_number: editFormData.phone_number,
      dob: editFormData.dob,
      city: editFormData.city,
      district: editFormData.district,
      province: editFormData.province,
      country: editFormData.country
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      user_name: contact.user_name,
      email: contact.email,
      phone_number: contact.phone_number,
      dob: contact.dob,
      city: contact.city,
      district: contact.district,
      province: contact.province,
      country: contact.country
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  //Sorting Algorithm
  // const [order, setOrder] = useState("ASC");
  // const sorting = (col) => {
  //   if (order === "ASC") {
  //     const sorted = [...contacts].sorted((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setContacts(sorted);
  //     setOrder("DSC");
  //   }
  //   if (order === "DSC") {
  //     const sorted = [...contacts].sorted((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     );
  //     setContacts(sorted);
  //     setOrder("ASC");
  //   }
  // };

  return (
    <div>
      <div className="app-container">
        <div className="table-header">
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th >Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>DOB</th>
                  <th>City</th>
                  <th>District</th>
                  <th>Province</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>

            </table>
          </form>
        </div>
        <div className="form-header">
          <h1>Form Registration</h1>
          <form onSubmit={handleAddFormSubmit} autoComplete="off">
            <label>Name
              <span class="required">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              required="required"
              placeholder="Enter a name."
              hasFeedback
              onChange={handleAddFormChange}
            />
            <label>
              Email
              <span class="required">*</span>
            </label>
            <input
              name="email"
              required="required"
              placeholder="Enter an email..."
              hasFeedback
              onChange={handleAddFormChange}
            />
            <label>
              Phone No.
              <span class="required">*</span>
            </label>

            <input
              type="text"
              name="phone_number"
              required="required"
              placeholder="Enter your number."
              pattern="^[0-9]{7,10}$"
              hasFeedback
              onChange={handleAddFormChange}
            />
            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              hasFeedback
              placeholder="Enter a your D.O.B"
              onChange={handleAddFormChange}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              hasFeedback
              placeholder="Enter a your city"
              onChange={handleAddFormChange}
            />
            <label>District</label>
            <input
              type="text"
              name="district"
              hasFeedback
              placeholder="Enter a your district"
              onChange={handleAddFormChange}
            />
            <label>Province</label>
            <select placeholder="Enter your Province no." name="province" onChange={handleAddFormChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value="Nepal"
              hasFeedback
              onChange={handleAddFormChange}
            />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <div className="profile">
        <div className="userContainer">
          <div className="userShow">
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <ProfileEditableData
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ProfileReadOnlyData
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;