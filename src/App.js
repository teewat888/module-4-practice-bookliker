import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import BookList from "./BookList";
import Book from "./Book";

function App() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({});
  const [currentUser, setCurrentUser] = useState({ id: 1, username: "pouros" });

  console.log("current book ", currentBook);
  const url = "http://localhost:3000/books";

  const fetchBooks = () => {
    return fetch(url).then((resp) => resp.json());
  };
  useEffect(() => {
    fetchBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const onBookClick = (id) => {
    const selectedBook = books.filter((book) => book.id === id);
    console.log("selected book  ", ...selectedBook);
    setCurrentBook(...selectedBook);
  };

  const onLikeToggle = (liked) => {
    let newUsers = [];
    if (!liked) {
      newUsers = [...currentBook.users, currentUser];
    } else {
      newUsers = currentBook.users.filter((user) => user.id !== currentUser.id);
    }
    const confObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: '{ "users":' + JSON.stringify(newUsers) + "}",
    };
    //console.log("confObj  ", confObj);
    const newUrl = url + "/" + currentBook.id;
    console.log("new url -->   ", newUrl);
    fetch(newUrl, confObj)
      .then((resp) => resp.json())
      .then((data) => {
        setCurrentBook({
          ...currentBook,
          users: newUsers,
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Bookliker</Menu.Item>
      </Menu>
      <main>
        <BookList books={books} onBookClick={onBookClick} />
        <Book
          book={currentBook}
          currentUser={currentUser}
          onLikeToggle={onLikeToggle}
        />
      </main>
    </div>
  );
}

export default App;
