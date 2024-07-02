import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import ScrollableTable from "../../components/scrollableTable/ScrollableTable";

const HomePage = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [inCinema, setInCinema] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [trending, setIsTrending] = useState([]);
  const inCinemaUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  const fetchinCinemaMovies = async () => {
    try {
      const response = await fetch(inCinemaUrl);
      const data = await response.json();
      setInCinema(data.results);
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchUpComingMovies = async () => {
    try {
      const response = await fetch(upcomingUrl);
      const data = await response.json();
      setUpComingMovies(data.results);
    } catch (error) {
      alert(error.message);
    }
  };

  const treandinThisWeek = async () => {
    try {
      const response = await fetch(trendingMovieUrl);
      const data = await response.json();
      setIsTrending(data.results);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchinCinemaMovies();
    fetchUpComingMovies();
    treandinThisWeek();
  }, []);

  return (
    <>
      <Hero movieArray={inCinema} />
      <ScrollableTable movieArray={upComingMovies} title={"UpComing Movies"} />
      <ScrollableTable movieArray={inCinema} title={"In Cinemas"} />
      <ScrollableTable movieArray={trending} title={"Trending This Week"} />
    </>
  );
};

export default HomePage;
