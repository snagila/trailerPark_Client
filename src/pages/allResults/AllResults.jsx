import React, { useEffect, useState } from "react";
import "./allResults.css";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";

const AllResults = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [allSearchedMovies, setAllSearchedMovies] = useState([]);
  const { id } = useParams();

  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`;
  const fetchMovie = async () => {
    const response = await fetch(searchMovieUrl);
    const data = await response.json();
    setAllSearchedMovies(data.results);
  };
  //   const searchedMovie = allSearchedMovies?.map((item) => {
  //     return item;
  //   });

  useEffect(() => {
    fetchMovie();
  }, [id]);
  return (
    <>
      <div className="allresults">
        {allSearchedMovies.length > 1 ? (
          <div className="allresultsTitle">
            <h3 className="p-3 text-white">
              Search Results for "<span style={{ color: "red" }}>{id}</span>"
            </h3>
            <div className="movielist ">
              {allSearchedMovies?.map((item, i) => {
                return <MovieCard movie={item} />;
              })}
            </div>
          </div>
        ) : (
          <h2 className="text-danger p-4"> Sorry!!! NO MOVIES FOUND</h2>
        )}
      </div>
    </>
  );
};

export default AllResults;
