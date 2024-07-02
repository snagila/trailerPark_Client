import React, { useEffect, useState } from "react";
import PlayTrailer from "../../components/playTrailer/PlayTrailer";

const Hero = ({ movieArray }) => {
  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = movieArray[randomNumber]?.id;

  return (
    <>
      <div style={{ background: "black" }}>
        <div style={{ padding: "2rem" }}>
          <PlayTrailer id={randomMovie} sound={1} controls={"0"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
