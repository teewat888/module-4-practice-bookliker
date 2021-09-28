import React from "react";
import { List } from "semantic-ui-react";
function LikedBy({ users }) {
  //console.log("users--> ", users);
  return (
    <List>
      {users.map((user) => {
        const { id, username } = user;
        return <List.Item icon="user" content={username} key={id} />;
      })}
    </List>
  );
}

export default LikedBy;
