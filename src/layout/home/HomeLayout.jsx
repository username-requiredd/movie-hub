import { Outlet } from "react-router-dom";
import { BookmarkProvider } from "../../contex/Bookmarkcontex";
import { DarkModeProvider } from "../../contex/Darkmoodcontex";
const Home = () => {
  return (
    <>
      <BookmarkProvider>
        <Outlet />
      </BookmarkProvider>
    </>
  );
};

export default Home;
