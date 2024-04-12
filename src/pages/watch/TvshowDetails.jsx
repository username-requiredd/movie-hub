import GradeIcon from "@mui/icons-material/Grade";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import "./watch.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/fetch/UseFetch";
import WatchSkeleton from "../../components/loader/WatchnowLoader";
const Tv = () => {
  const { series } = useParams();
  const API_KEY = "bd6028a3ff6785a5ad7350ab134f1ee7";
  const url = `https://api.themoviedb.org/3/tv/${series}?api_key=${API_KEY}`;
  // https://api.themoviedb.org/3/movie/{movie_id}/watch/providers
  const providers = `https://api.themoviedb.org/3/tv/${series}/watch/providers?api_key=${API_KEY}`;
  const { movies: data, error: err, loading: load } = UseFetch(url);
  const { movies, error, loading } = UseFetch(providers);
  console.log("provider", movies);
  const bg = data ? data.poster_path : "";
  const releasedYear = data && data.first_air_date.slice(0, 4);
  const addtoBookmark = () => {
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
          // width: "80%",
          borderRadius: "10px",
          background: "#4CAF50",
          color: "#FFFFFF",
        },
        autoClose: 1000,
      }
    );
  };

  return (
    <>
      {err ? (
        <div className="container" style={{ height: "100vh" }}>
          <p className="pt-3">
            Error getting data. Try checking your connection
          </p>
        </div>
      ) : load ? (
        <WatchSkeleton />
      ) : (
        data && (
          <div className="container-lg">
            <div
              className="movie-poster"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
              }}
            ></div>
            <div className="movie-info pt-3">
              <div className="mn">
                <h4>{data.name}</h4>
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
              <span className="movie-tags">16+</span>
              <span className="movie-tags">{releasedYear}</span>
              <span className="movie-tags d-flex align-items-center">
                <GradeIcon style={{ fontSize: "16px", color: "goldenrod" }} />{" "}
                {data.vote_average}
              </span>
              {/* <span className="movie-tags d-flex align-items-center">
              <WatchLaterIcon style={{ fontSize: "16px", color: "#9b9494" }} />
              {data.runtime}min
            </span> */}
            </div>
            <div className="button mt-3 d-flex align-items-center ">
              <button className="watch-btn text-center btn">
                {" "}
                <PlayCircleIcon style={{ fontSize: "30px" }} />
                Watch now
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Tv;
