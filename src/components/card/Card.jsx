import { useDarkMode } from "../../contex/Darkmoodcontex";
const Card = ({ movies, title, w, h, date }) => {
  const { darkMode } = useDarkMode(); // Corrected from darkMood to darkMode

  return (
    <>
      <div
        key={movies}
        className="card"
        style={{
          borderColor: darkMode ? "#18191a" : "#fff",
          width: `${w}px`,
          height: `${h}px`,
          borderRadius: "20px",
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          flexShrink: "0",
        }}
      ></div>
      <div className="movie-info ">
        <p
          className="text-start px-3 "
          style={{
            margin: "0",
            fontSize: "14px",
            color: `${darkMode ? "#fff" : "black"}`,
          }}
        >
          {title}
        </p>
      </div>
    </>
  );
};

export default Card;
