import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Booklist() {
  return (
    <>
      <h2>Booklist</h2>
      <ul>
        <li>
          <Link to="/book-list/book/1/fiction">Book 1</Link>
        </li>
        <li>
          <Link to="/book-list/book/2/sci-fi">Book 2</Link>
        </li>
        <li>
          <Link to="/book-list/newBook">NewBook</Link>
        </li>
      </ul>
      <Outlet context={{hello: 'world'}}/>
    </>
  );
}
