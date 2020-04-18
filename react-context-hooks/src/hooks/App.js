import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import SongList from "./components/SongList";
import BookContextProvider from "./contexts/BookContext";
import Numbers from "./components/Numbers";

function App() {
  return (
    <>
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
      <SongList />
      <Numbers />
    </>
  );
}

export default App;
