import { useState, useEffect } from "react";
import Title from "./ui/Title";
import Favorite from "./ui/Favorite";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    fetch("https://619d3172131c600017088de4.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((err) => setError(true));
  };

  return (
    <div>
      <Title>Favoriler</Title>
      {error && <h1>Fetch error</h1>}

      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {favorites.length &&
          favorites.map((favorite) => (
            <Favorite key={favorite.id} favorite={favorite} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
