import Nav from "../../components/Nav/Nav";
import UseFetch from "../../hooks/fetch/UseFetch";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contex/Darkmoodcontex";
import SkeletonLoader from "../../components/loader/Loader";
import { useEffect, useState } from "react";
const List = () => {
  const [search, setSearch] = useState("");
  const API_KEY = "bd6028a3ff6785a5ad7350ab134f1ee7";
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  );
  useEffect(() => {
    const searchEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
    setUrl(search !== "" ? searchEndpoint : url);
  }, [url, search]);
  const { darkMode } = useDarkMode();
  const { movies: discover, error, loading } = UseFetch(url);
  console.log(search, discover);
  return (
    <>
      <div style={{ paddingBottom: "100px" }}>
        <p className="p-2"></p>
        <div className="container wrapper">
          <div className="search">
            <input
              onSubmit={(e) => e.preventDefault()}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
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
        </div>
        <p className="p-2">{search ? "Search results" : "Discover Movies"}</p>
        <p
          className={`${
            discover && discover.results.length === 0 ? "p-2" : ""
          }`}
        >
          {discover && discover.results.length === 0
            ? "That movie got lost in the bermuda triangle :)"
            : ""}
        </p>

        <div
          className="container-lg"
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          {error ? (
            <div className="container" style={{ height: "100vh" }}>
              <p className="pt-3">
                Error getting data. Try checking your connection
              </p>
            </div>
          ) : loading ? (
            <div
              className="mb-2"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              <SkeletonLoader w={140} h={210} t={100} />
            </div>
          ) : (
            discover &&
            discover.results.map((movie) => (
              <div
                className=" mx-auto"
                style={{ width: "140px" }}
                key={movie.id}
              >
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
          <Nav />
        </div>
      </div>
    </>
  );
};

export default List;
