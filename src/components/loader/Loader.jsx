import Skeleton from "@mui/material/Skeleton";
import { useDarkMode } from "../../contex/Darkmoodcontex";

const SkeletonLoader = ({ w, h, t }) => {
  const { darkMode } = useDarkMode();
  console.log(darkMode);
  const skeletons = [];

  for (let i = 0; i < 8; i++) {
    skeletons.push(
      <div key={i} className="div">
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: darkMode ? "grey.800" : "grey.300" }}
          width={w}
          height={h}
          style={{ borderRadius: "15px", minWidth: "100px" }}
        />

        <Skeleton
          variant="text"
          width={t}
          sx={{
            fontSize: "1rem",
            bgcolor: darkMode ? "grey.800" : "grey.300",
            marginLeft: "15px",
          }}
        />
      </div>
    );
  }

  return <>{skeletons}</>;
};

export default SkeletonLoader;
