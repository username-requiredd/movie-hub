import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import { useDarkMode } from "../../contex/Darkmoodcontex";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Heading from "../../components/header/Header";
import UseFetch from "../../hooks/fetch/UseFetch";
import Card from "../../components/card/Card";
import Nav from "../../components/Nav/Nav";
import SkeletonLoader from "../../components/loader/Loader";
const Hero = () => {
  const API_KEY = "bd6028a3ff6785a5ad7350ab134f1ee7";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const tv = `
  https://api.themoviedb.org/3/movie/693134/videos?api_key=${API_KEY}`;
  const trendingMovies = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
  const { movie: show, error, loading } = UseFetch(tv);
  const { movies: discover, error: errr, loading: load } = UseFetch(url);
  const {
    movies: trending,
    error: err,
    loading: ld,
  } = UseFetch(trendingMovies);
  console.log("tv shows: ", show);
  // console.log("tv shows: ", discover.results[0].id);
  // console.log(trending, show, discover);
  const { darkMode } = useDarkMode();
  console.log("darkmood", darkMode);
  async function fetchData() {
    const url = "https://api.themoviedb.org/3/movie/693134/videos?";
    const apiKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjEzOGYwZTdlYzg3NTMwMzE3NTI5MDZkMTU0NmJmMiIsInN1YiI6IjY2MTg1YWVjMGYwZGE1MDE3Y2RlYTcyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WnRTvQbUgOWMCbSK0ckZnkptQt1ny51LaHvuVU5RPbA";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Call the function to fetch data
  fetchData();

  return (
    <>
      <Heading />
      <div className="container-lg wrapper">
        <div className="search">
          <input
            type="text"
            // className={`${darkMood ? "cc" : ""}`}
            placeholder="Search movie..."
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "13px",
              background: `${darkMode ? "#242526" : "#fff"}`,
              border: "1px solid #18191a",
              outline: "#fff",
              color: `${darkMode ? "white" : "black"}`,
            }}
          />
        </div>
        <p className="px-2 font-weight-bold">Trending Movies </p>
        <div className="scroll-container">
          {err ? (
            <div className="container">
              <p className="pt-3">
                Error getting data. Try checking your connection
              </p>
            </div>
          ) : ld ? (
            <SkeletonLoader w={250} h={170} t={180} />
          ) : (
            trending &&
            trending.results.map((movie) => (
              <Link to={`/watch/${movie.id}`}>
                <Card
                  key={movie.id}
                  movies={movie.backdrop_path}
                  title={movie.original_title || movie.name}
                  date={movie.release_date}
                  w={250}
                  h={170}
                />
              </Link>
            ))
          )}
        </div>
        <div className=" mt-2">
          <p className="px-2 font-weight-bold">Popular TV Shows</p>

          <div className="scroll-container">
            {errr ? (
              <div className="container">
                <p className="pt-3">
                  Error getting data. Try checking your connection
                </p>
              </div>
            ) : load ? (
              <SkeletonLoader w={180} h={200} t={100} />
            ) : (
              discover &&
              discover.results.map((movie) => (
                <Link to={`/tv/${movie.id}`}>
                  <Card
                    movies={movie.backdrop_path}
                    title={movie.original_title || movie.name}
                    date={movie.release_date}
                    w={180}
                    h={200}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
        <div>
          <p className="px-2 font-weight-bold">You may also like</p>
          <div className="scroll-container" style={{ paddingBottom: "100px" }}>
            {error ? (
              <div className="container" style={{ height: "200px" }}>
                <p className="pt-3">
                  Error getting data. Try checking your connection
                </p>
              </div>
            ) : loading ? (
              <SkeletonLoader w={180} h={200} t={100} />
            ) : (
              discover &&
              discover.results.map((movie) => (
                <Link to={`/watch/${movie.id}`}>
                  <Card
                    movies={movie.poster_path}
                    title={movie.original_title}
                    date={movie.release_date}
                    w={180}
                    h={200}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
        <Nav />
      </div>
    </>
  );
};

export default Hero;
