import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleOnClick = (title, id) => {
    navigate(`/searchedresultmovie/${title}`);
  };
  return (
    <>
      <Card
        className="custom-color w-100 text-white "
        onClick={() => handleOnClick(movie.title, movie.id)}
      >
        {movie && movie.poster_path ? (
          <Card.Img
            key={movie.id}
            style={{ height: "350px" }}
            variant="top"
            className="rounded-3"
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            alt=""
          />
        ) : (
          <Card.Img
            style={{ height: "350px" }}
            variant="top"
            className="rounded-3"
            src="https://moviea.vercel.app/assets/no-poster-af8294eb.png"
            alt=""
          />
        )}
      </Card>
    </>
  );
};

export default MovieCard;
