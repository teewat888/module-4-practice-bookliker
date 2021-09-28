import React, { useState } from "react";
import { Button } from "semantic-ui-react";
function LikeButton({ users, currentUser, onLikeToggle }) {
  let liked;
  const likeNumber = users.length;

  if (users.find((user) => user.id === currentUser.id) !== undefined) {
    liked = true;
  } else {
    liked = false;
  }
  return (
    <>
      <Button
        color="red"
        content="Like"
        icon={liked ? "heart" : "heart outline"}
        label={{
          basic: true,
          color: "red",
          pointing: "left",
          content: likeNumber,
        }}
        onClick={() => onLikeToggle(liked)}
      />
    </>
  );
}

export default LikeButton;
