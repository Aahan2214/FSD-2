import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Button label="Home Button" />
            </Home>
          }
        />

        <Route
          path="/about"
          element={
            <About>
              <TextField label="Name" />
              <br /><br />
              <Select />
              <br /><br />
              <Rating />
            </About>
          }
        />

        <Route
          path="/contact"
          element={
            <Contact>
              <Checkbox />
            </Contact>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
