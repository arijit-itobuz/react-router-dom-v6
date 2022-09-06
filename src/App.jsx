import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BookList from "./Pages/BookList";
import Book from "./Pages/Book";
import Newbook from "./Pages/NewBook";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-list" element={<BookList />}>
          {/* Absolute route path is not valid here */}
          <Route path="book/:id/:tag" element={<Book />} />
          <Route path="newBook" element={<Newbook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
