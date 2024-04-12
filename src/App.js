import "./App.css";
import {
  CreateRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Hero from "./pages/hero/hero";
import Watch from "./pages/watch/MovieDetails";
// layout
import Home from "./layout/home/HomeLayout"
import Tv from "./pages/watch/TvshowDetails"
import Profile from "./pages/userprofile/Userprofile"
import MoviesList from "./pages/movielist/MovieList"
import { useDarkMode } from "./contex/Darkmoodcontex";
import Bookmark from "./pages/bookmarks/BookMark";
function App() {
  const {darkMode, setDarkMode} = useDarkMode()
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route index element={<Hero />} />
        <Route path="watch/:id" element={<Watch />} />
        <Route path="tv/:series" element={<Tv />} />
        <Route path="profile" element={<Profile />} />
        <Route path="list" element={<MoviesList />} />
        <Route path="bookmarks" element={<Bookmark />} />

      </Route>
    )
  );
  return (
    <div className={`${darkMode ?  "dark":"light"}`}>
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
