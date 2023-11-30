import React from "react";

const UserList = ({userList}) => {

    return (
        <ul>
            {userList.map((user, index) => (
              <li key={index}>{user['user-name']}, {user['age']}</li>
            ))}
        </ul>
    )
}

export default UserList;                                             