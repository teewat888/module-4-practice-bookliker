import React from "react";
import { Menu } from "semantic-ui-react";

function BookList({ books, onBookClick }) {
  return (
    <Menu vertical inverted>
      {books.map((book) => {
        const { id, title } = book;
        return (
          <Menu.Item as={"a"} onClick={() => onBookClick(id)} key={id}>
            {title}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default BookList;
