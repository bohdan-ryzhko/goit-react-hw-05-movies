import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>
    </div>
  );
};
