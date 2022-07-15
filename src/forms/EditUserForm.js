import React, { useState, useEffect } from "react";
import { MdAddCircleOutline, MdCheckCircleOutline, MdHighlightOff} from "react-icons/md"

const EditUserForm = (props) => {
  const initialFormState = { id: null, name: "", direction: "" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
    
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.direction) return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <div className="form">
        <label>Name</label>
        <input
        className="input"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        />
      </div>
      
      <div className="form">
      <label>Direction</label>
      <input
        className="input"
        type="text"
        name="direction"
        value={user.direction}
        onChange={handleInputChange}
      />
      </div>
      <div className="button-form">
      <button className="icon-button">{props.editing ? <MdCheckCircleOutline className="edit-button"/> : <MdAddCircleOutline className="edit-button"/>}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="icon-button">
          <MdHighlightOff className="delete-button"/>
        </button>
      )}
      </div>
      
    </form>
  );
};

export default EditUserForm;