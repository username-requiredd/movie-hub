import GradeIcon from "@mui/icons-material/Grade";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import "./watch.css";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/fetch/UseFetch";
import WatchSkeleton from "../../components/loader/WatchnowLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FetchTrailer from "../../hooks/UseFetchMovie";
import { useBookmark } from "../../contex/Bookmarkcontex";
import { useDarkMode } from "../../contex/Darkmoodcontex";
const Watch = () => {
  const { darkMode } = useDarkMode();
  const { id } = useParams();
  const { bookm, setBookm } = useBookmark();
  // console.log("bookmark", bookm);
  const API_KEY = "bd6028a3ff6785a5ad7350ab134f1ee7";
  const Trailerurl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  // https://api.themoviedb.org/3/movie/{movie_id}/watch/providers
  const providers = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`;
  const { movies: data, error: err, loading: load } = UseFetch(url);
  const { movies, error, loading } = UseFetch(providers);
  // console.log("provider", movies);
  const bg = data ? data.poster_path : "";
  const releasedYear = data && data.release_date.slice(0, 4);
  const addtoBookmark = () => {
    const search = bookm.find((movie) => movie.id === data.id);
    if (search) {
      toast(
        <div>
          <span style={{ marginRight: "8px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="#FFFFFF"
                d="M9 16.17l-3.5-3.5a.996.996 0 0 1 0-1.41l1.41-1.41a.996.996 0 0 1 1.41 0L9 12.34l4.59-4.59a.996.996 0 0 1 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41L9.41 16.17a.996.996 0 0 1-1.41 0z"
              />
            </svg>
          </span>
          Movie is already Bookmarked
        </div>,

        {
          style: {
            borderRadius: "10px",
            background: "crimson",
            color: "#fff",
          },
          autoClose: 1000,
        }
      );
    } else {
      setBookm((prev) => [
        ...prev,
        {
          title: data.title,
          id: data.id,
          poster_path: data.poster_path,
        },
      ]);
      toast(
        <div>
          <span style={{ marginRight: "8px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                fill="#FFFFFF"
                d="M9 16.17l-3.5-3.5a.996.996 0 0 1 0-1.41l1.41-1.41a.996.996 0 0 1 1.41 0L9 12.34l4.59-4.59a.996.996 0 0 1 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41L9.41 16.17a.996.996 0 0 1-1.41 0z"
              />
            </svg>
          </span>
          Added to Bookmark
        </div>,

        {
          style: {
            borderRadius: "10px",
            background: "#4CAF50",
            color: "#FFFFFF",
          },
          autoClose: 1000,
        }
      );
    }
  };

  const { trailer } = FetchTrailer(Trailerurl);
  console.log(trailer);
  const l = trailer?.results.filter(({ type }) =>
    ["Trailer", "Teaser", "Clip"].includes(type)
  );

  const trailerLink = trailer && l[0].key;
  console.log(trailerLink);
  return (
    <>
      <div className="pb-3">
        <div>
          <ToastContainer
            style={{
              margin: "20px",
              height: "50px",
            }}
          />
        </div>
        {err ? (
          <div className="container" style={{ height: "100vh" }}>
            <p className="pt-3">
              Error getting data. Try checking your connection!
            </p>
          </div>
        ) : load ? (
          <WatchSkeleton />
        ) : (
          data && (
            <div className="container-lg pt-2">
              <div
                className="movie-poster"
                // style={{
                //   backgroundImage:
                //    `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
                // }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div className="movie-info pt-3">
                <div className="mn">
                  <h4 onClick={() => addtoBookmark()}>{data.title}</h4>
                  <p>{data.genres[0].name}</p>
                </div>
                <div className="bk">
                  {" "}
                  <TurnedInOutlinedIcon onClick={() => addtoBookmark()} />
                </div>
              </div>
              <div className="sypnopsis mt-3">
                <p>{data.overview}</p>
              </div>
              <div className="rr">
                <span className={`movie-tags ${darkMode ? "" : "dm"}`}>
                  16+
                </span>
                <span className={`movie-tags ${darkMode ? "" : "dm"}`}>
                  {releasedYear}
                </span>
                <span
                  className={`movie-tags "movie-tags d-flex align-items-center text-center" ${
                    darkMode ? "" : "dm"
                  }`}
                >
                  <GradeIcon style={{ fontSize: "16px", color: "goldenrod" }} />{" "}
                  {data.vote_average}
                </span>
                <span
                  className={` movie-tags d-flex align-items-center movie-tags text-center ${
                    darkMode ? "" : "dm"
                  }`}
                >
                  <WatchLaterIcon
                    style={{ fontSize: "16px", color: "#9b9494" }}
                  />
                  {data.runtime}min
                </span>
              </div>
              <div className="button mt-3  d-flex align-items-center justify-contents-center">
                <a
                  href={`https://www.youtube.com/watch?v=${trailerLink}`}
                  className="watch-btn text-center btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayCircleIcon style={{ fontSize: "30px" }} />
                  Watch now
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Watch;
