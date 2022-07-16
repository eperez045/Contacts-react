import './App.css';

import React, { useState } from "react";
import UserTable from "../src/tables/UserTable";
import EditUserForm from "../src/forms/EditUserForm";
import avatar1 from "../src/images/avatar1.png";
import avatar2 from "../src/images/avatar2.png";
import avatar3 from "../src/images/avatar3.png";
import avatar4 from "../src/images/avatar4.png";
import avatar5 from "../src/images/avatar5.png";
import avatar6 from "../src/images/avatar6.png";

const App = () => {
  const usersData = [
    {
      id: 1,
      img: avatar1,
      name: "Guy Hawkins",
      direction: "2464 Royal Ln. Mesa, New Jersey 45463"
    },
    {
      id: 2,
      img: avatar2,
      name: "Ronald Richards",
      direction: "4517 Washington Ave. Manchester, Kentucky 39495"
    },
    {
      id: 3,
      img: avatar3,
      name: "Esther Howard",
      direction: "4140 Parker Rd. Allentown, New Mexico 31134"
    },
    {
      id: 4,
      img: avatar4,
      name: "Albert Flores",
      direction: "6391 Elgin St. Celina, Delaware 10299"
    },
    {
      id: 5,
      img: avatar5,
      name: "Arlene McCoy",
      direction: "2118 Thornridge Cir. Syracuse, Connecticut 35624"
    }
  ];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  
  
  
  
  const addUser = (user) => {
    user.id = users.length + 1;
    user.img = avatar6;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">

      <div className="container-cards">
        <h1>Contact List:</h1>

        <div className="edit-section">
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>

        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />

        
      </div>
    </div>
  );
};

export default App;
