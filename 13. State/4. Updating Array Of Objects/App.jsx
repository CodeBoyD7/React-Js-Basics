import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...m, title: "John Wick 4" } : m))
    );
  };

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default App;
