import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import { isObjEmpty } from "./utils";
import LikeButton from "./LikeButton";
import LikedBy from "./LikedBy";

function Book({ book, currentUser, onLikeToggle }) {
  if (isObjEmpty(book)) {
    return <Container text></Container>;
  } else {
    const { id, title, description, img_url, users } = book;
    console.log("book --> ", title);
    return (
      <Container text>
        <Header>{title}</Header>
        <Image src={img_url} size="small" />
        <p>{description}</p>
        <LikeButton
          bookId={id}
          users={users}
          currentUser={currentUser}
          onLikeToggle={onLikeToggle}
        />
        <Header>Liked by</Header>
        <LikedBy users={users} />
      </Container>
    );
  }
}

export default Book;
