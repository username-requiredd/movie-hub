import Nav from "../../components/Nav/Nav";
import UseFetch from "../../hooks/fetch/UseFetch";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../components/loader/Loader";
import { useBookmark } from "../../contex/Bookmarkcontex";
import { useDarkMode } from "../../contex/Darkmoodcontex";
const Bookmark = () => {
  const { darkMode } = useDarkMode();
  const { bookm, setBookm } = useBookmark();
  const removeBookmark = (id) => {
    const movieID = parseInt(id);
    console.log(movieID);
    const removed = bookm.filter((movie) => movie.id !== movieID);
    setBookm(removed);
    console.log(removed);
  };
  console.log(bookm);
  return (
    <>
      <p className="p-2">
        Your Bookmarks <TurnedInOutlinedIcon style={{ color: "red" }} />
      </p>
      <div
        className="container-lg"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          paddingBottom: "100px",
          height: "100%",
        }}
      >
        {bookm.length === 0 ? (
          <div style={{ height: "100vh" }}>
            <p>You have no Bookmark.</p>
          </div>
        ) : (
          bookm &&
          bookm.map((movie) => (
            <div className=" mb-2" style={{ width: "140px" }}>
              <Link
                to={`/watch/${movie.id}`}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                <div className="div">
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
              {/* <br /> */}
              <TurnedInOutlinedIcon
                style={{ color: "red" }}
                onClick={() => removeBookmark(movie.id)}
              />
            </div>
          ))
        )}
        <Nav />
      </div>
    </>
  );
};

export default Bookmark;
