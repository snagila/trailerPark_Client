import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import AllResults from "./pages/allResults/AllResults";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allresults/:id" element={<AllResults />} />
      </Routes>
    </>
  );
}

export default App;
