import React from "react";
import Header from "./src/Header";
import SideBar from "./src/SideBar";
import MovieList from "./src/cine/MovieList";
import Footer from "./src/Footer";
import { useContext } from "react";
import { ThemeContext } from "./src/context";

function Page() {
  const { darkMode } = useContext(ThemeContext);
  console.log(darkMode);
  return (
    <div
      className={`h-full w-full bg-white ${darkMode ? "dark:bg-[#171923] dark:text-white" : ""}`}
    >
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
