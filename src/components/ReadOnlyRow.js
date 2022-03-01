import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.user_name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
      <td>{contact.dob}</td>
      <td>{contact.city}</td>
      <td>{contact.district}</td>
      <td>{contact.province}</td>
      <td>{contact.country}</td>

      <td>
        <button
          type="button"
          className="EdiDelButton"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className="EdiDelButton" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;