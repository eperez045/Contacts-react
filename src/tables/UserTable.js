import React from "react";

const UserTable = (props) => (
  <>
    {props.users.length > 0 ? (
      props.users.map((user) => (
        <div key={user.id} className="contact-card">
          <div className="ima-circle">
            <img src={user.img} alt="" />
          </div>
          <div className="text">
            <p className="name">{user.name}</p>
            <p className="direction">{user.direction}</p>
          </div>

          <td>
            <button
              className="button muted-button"
              onClick={() => {
                props.editRow(user);
              }}
            >
              Edit
            </button>
            <button
              className="button muted-button"
              onClick={() => props.deleteUser(user.id)}
            >
              Delete
            </button>
          </td>
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
