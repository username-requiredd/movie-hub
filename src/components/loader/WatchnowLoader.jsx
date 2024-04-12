import Skeleton from "@mui/material/Skeleton";
import { useDarkMode } from "../../contex/Darkmoodcontex";
const WatchSkeleton = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="container pt-4" style={{ height: "100vh" }}>
      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: darkMode ? "grey.800" : "grey.300",
          width: "100%",
          height: "60vh",
        }}
      />
      <div className="mt-3 py-2">
        <Skeleton
          variant="text"
          sx={{
            fontSize: "16px",
            bgcolor: darkMode ? "grey.800" : "grey.300",
            width: "80%",
          }}
        />
        <Skeleton
          variant="text"
          //   width={}
          sx={{
            fontSize: "10px",
            bgcolor: darkMode ? "grey.800" : "grey.300",
            width: "30%",
          }}
        />
        <div className="mt-3">
          <Skeleton
            variant="text"
            //   width={}
            sx={{
              fontSize: "16px",
              bgcolor: darkMode ? "grey.800" : "grey.300",
              width: "100%",
            }}
          />
          <Skeleton
            variant="text"
            //   width={}
            sx={{
              fontSize: "16px",
              bgcolor: darkMode ? "grey.800" : "grey.300",
              width: "100%",
            }}
          />
          <Skeleton
            variant="text"
            //   width={}
            sx={{
              fontSize: "16px",
              bgcolor: darkMode ? "grey.800" : "grey.300",
              width: "100%",
            }}
          />
          <Skeleton
            variant="text"
            //   width={}
            sx={{
              fontSize: "16px",
              bgcolor: darkMode ? "grey.800" : "grey.300",
              width: "100%",
            }}
          />
          <Skeleton
            variant="text"
            //   width={}
            sx={{
              fontSize: "16px",
              bgcolor: darkMode ? "grey.800" : "grey.300",
              width: "100%",
            }}
          />
          <Skeleton
            variant="text"
            //   width={}
            sx={{
              fontSize: "16px",
              bgcolor: darkMode ? "grey.800" : "grey.300",
              width: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchSkeleton;
