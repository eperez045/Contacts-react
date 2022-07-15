import React from "react";
import { AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"

const UserTable = (props) => (
  <>
    {props.users.length > 0 ? (
      props.users.map((user) => (
        <div key={user.id} className="contact-card">
          <div className="section-image">
            <img src={user.img} alt="" className="image"/>
          </div>
          <div className="text">
            <p className="name">{user.name}</p>
            <p className="direction">{user.direction}</p>
          </div>

          <div className="section-button">
            <button
              className="icon-button"
              onClick={() => {
                props.editRow(user);
              }}
            >
              <AiOutlineEdit className="edit-button"/>
            </button>
            <button
              className="icon-button"
              onClick={() => props.deleteUser(user.id)}
            >
              <AiOutlineDelete className="delete-button"/>
            </button>
          </div>
        </div>
      ))
    ) : (
      <div>
        <p className="name" colSpan={3}>
          No users
        </p>
      </div>
    )}
  </>
);

export default UserTable;
