import React, { useState } from "react";
import "./styles.css";

const movieGenreRecommend = {
  Comedy: [
    { name: "Hera Pheri (2000)", rating: "8.1" },
    { name: "Munna Bhai M.B.B.S. (2003)", rating: "8.1" },
    { name: "Andaz Apna Apna (1994)", rating: "8" },
    { name: "3 Idiots (2009)", rating: "8.4" }
  ],
  Action: [
    { name: "Multiversal Rewind (2017)", rating: "10.0" },
    { name: "Raka (2021)", rating: "10.0" },
    { name: "The Hacker", rating: "10.0" },
    { name: "Isa lang ang dapat mahalin (1997)", rating: "10.0" }
  ],
  Documentary: [
    { name: "Samsara (I) (2011)", rating: "8.4" },
    { name: "Inner Worlds, Outer Worlds (2012)", rating: "8.4" },
    { name: "Owned & Operated (2012)", rating: "7.9" },
    { name: "Neurons to Nirvana (2013)", rating: "7.6" }
  ],
  Thriller: [
    { name: "The Dark Knight (2008)", rating: "9.0" },
    { name: "Inception (2010)", rating: "8.8" },
    { name: "Se7en (1995)", rating: "8.6" },
    { name: "Parasite (2019)", rating: "8.5" }
  ]
};

const movieArr = Object.keys(movieGenreRecommend);

export default function App() {
  const [genre, setGenre] = useState("Comedy");

  function eClickHandler(movie) {
    setGenre(movie);
  }

  return (
    <div className="App">
      <h2 class="heading">Movie Recommend App</h2>

      <div className="emoji_main">
        {movieArr.map((i) => {
          return (
            <span id="em_db" onClick={() => eClickHandler(i)}>
              {i}
            </span>
          );
        })}
      </div>

      <div className="main-content">
        <ul className="non-bullet-list">
          {movieGenreRecommend[genre].map((item) => (
            <li>
              <div className="content">
                {item.name} Rating:{item.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
