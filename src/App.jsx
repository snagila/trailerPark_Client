import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import AllResults from "./pages/allResults/AllResults";
import SearchedResultPage from "./pages/searchResult/SearchedResultPage";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allresults/:id" element={<AllResults />} />
        <Route
          path="/searchedresultmovie/:id"
          element={<SearchedResultPage />}
        />
      </Routes>
    </>
  );
}

export default App;
