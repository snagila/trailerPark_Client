import React, { useEffect, useState } from "react";
import "./searchedResultPage.css";
import { useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import PlayTrailer from "../../components/playTrailer/PlayTrailer";
import ScrollableTable from "../../components/scrollableTable/ScrollableTable";
import { useDispatch, useSelector } from "react-redux";
import { clickedMovieOnallResults } from "../../redux/movie/MovieAction";

const SearchResultPage = () => {
  const dispatch = useDispatch();
  const { clickedOnallresults } = useSelector((state) => state.movie);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [searchedMovieArr, setSearchedMovieArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [play, setPlay] = useState(false);
  const { id } = useParams();

  const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`;
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(searchMovieUrl);
      const data = await response.json();
      const singleMovie = data.results[0];
      setSearchedMovieArr(data.results);
      setIsLoading(false);
      dispatch(clickedMovieOnallResults(singleMovie));
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchMovieVideoUrl = async () => {
    const response = await fetch(movieVideoUrl);
    const data = await response.json();
  };
  //   const duplicateMoviesPrevention = allMovies.find(
  //     (item) => item.id === searchedMovie.id
  //   );
  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <>
      <div className="result p-2">
        <Row className="mt-3 text-white">
          <Col md={6}>
            {clickedOnallresults && clickedOnallresults.poster_path ? (
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  clickedOnallresults.poster_path
                }
              />
            ) : (
              <img src="https://moviea.vercel.app/assets/no-poster-af8294eb.png" />
            )}
          </Col>
          <Col>
            <h3>{clickedOnallresults.title}</h3>

            <div className="buttons">
              <Button className="playBtn" onClick={() => setPlay(true)}>
                Play Trailer
              </Button>

              {play && (
                <>
                  <div className="trailervideo w-100 backdrop-blur">
                    <div className="text-end">
                      <Button
                        variant="btn-link text-white"
                        onClick={() => setPlay(false)}
                      >
                        Close
                      </Button>
                    </div>
                    <PlayTrailer id={clickedOnallresults.id} sound={0} />
                  </div>
                </>
              )}

              <Button variant="warning" onClick={() => handleOnClick("comedy")}>
                + Add to WishList
              </Button>
            </div>
            <div className="d-flex align-items-center gap-3 mt-2 ">
              <h4>Year :</h4> {clickedOnallresults.release_date}
            </div>
            <div>
              <h4>Plot : </h4>
              {clickedOnallresults.overview}
            </div>
          </Col>
        </Row>
        <br />
        <Row
          style={{
            color: "whitesmoke",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <ScrollableTable
            title={"Similar Movies"}
            movieArray={searchedMovieArr}
          />
        </Row>
      </div>
    </>
  );
};

export default SearchResultPage;
