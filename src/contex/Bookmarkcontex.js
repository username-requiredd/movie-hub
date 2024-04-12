import { createContext, useState, useContext, useEffect } from "react";

const BookmarkContext = createContext();
export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookm, setBookm] = useState(() => {
    const storedBookMarks = JSON.parse(localStorage.getItem("bookmark"));
    return storedBookMarks || [];
  });
  
  // Load bookmarks from local storage when component mounts
  useEffect(() => {
    const storedBookMarks = JSON.parse(localStorage.getItem("bookmark"));
    if (storedBookMarks) {
      setBookm(storedBookMarks);
    }
  }, []);

  // Save bookmarks to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookm));
  }, [bookm]);

  return (
    <BookmarkContext.Provider value={{ bookm, setBookm }}>
      {children}
    </BookmarkContext.Provider>
  );
};
