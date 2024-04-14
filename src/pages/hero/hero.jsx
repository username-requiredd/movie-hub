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
  const [search, setSearch] = useState("");
  const API_KEY = "bd6028a3ff6785a5ad7350ab134f1ee7";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=7`;
  const trendingMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`;
  const popular = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=8`;
  const searchEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
  const { movies, error, loading } = UseFetch(
    search === "" ? popular : searchEndpoint
  );
  const { movies: discover, error: errr, loading: load } = UseFetch(url);
  const {
    movies: trending,
    error: err,
    loading: ld,
  } = UseFetch(trendingMovies);
  const { darkMode } = useDarkMode();
  // console.log(search, movies);
  return (
    <>
      <Heading />
      <div className="container-lg wrapper">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
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
        <div className={`${search === "" ? "" : "d-none"}`}>
          <p className="px-2 font-weight-bold">Trending Movies </p>
          <div className="scroll-container">
            {err ? (
              <div className="container">
                <p className="pt-3">
                  Error getting data. Try checking your connection
                </p>
              </div>
            ) : ld ? (
              <SkeletonLoader w={250} h={220} t={180} />
            ) : (
              trending &&
              trending.results.map((movie) => (
                <Link
                  to={`/watch/${movie.id}`}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <Card
                    key={movie.id}
                    movies={movie.poster_path}
                    title={movie.original_title}
                    date={movie.release_date}
                    w={240}
                    h={210}
                  />
                </Link>
              ))
            )}
          </div>
          <div className="mt-3">
            <p className="px-2 font-weight-bold">Popular Movies</p>

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
                movies &&
                movies.results.map((movie) => (
                  <Link
                    to={`/watch/${movie.id}`}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    <Card
                      key={movie.id}
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
          <div>
            <p className="px-2 font-weight-bold">You may also like</p>
            <div
              className="scroll-container"
              style={{ paddingBottom: "100px" }}
            >
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
                  <Link
                    to={`/watch/${movie.id}`}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  >
                    <Card
                      key={movie.id}
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
        </div>

        <div
          className={`container-lg ${search === "" ? "d-none" : "d-flex"}`}
          style={{
            // display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "100px",
          }}
        >
          <p
            className={`${
              movies && movies.results.length === 0 ? "d-block" : "d-none"
            }`}
          >
            {" "}
            That movie got lost in the bermuda triangle
          </p>
          {error ? (
            <div className="container" style={{ height: "100vh" }}>
              <p className="pt-3">
                Error getting data. Try checking your connection
              </p>
            </div>
          ) : loading ? (
            <div
              className="mb-2 container mx-auto"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <SkeletonLoader w={140} h={210} t={100} />
            </div>
          ) : (
            movies &&
            movies.results.map((movie) => (
              <div className="" style={{ width: "160px" }} key={movie.id}>
                <Link to={`/watch/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <p style={{ color: `${darkMode ? "white" : "black"}` }}>
                    {movie.title}
                  </p>
                </Link>
              </div>
            ))
          )}
        </div>

        <Nav />
      </div>
    </>
  );
};

export default Hero;
