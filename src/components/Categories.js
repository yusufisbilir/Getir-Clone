import { useState, useEffect } from "react";
import Category from "./ui/Category";
import Title from "./ui/Title";

const Categories = () => {
  const url = "https://619d3172131c600017088de4.mockapi.io/categories";

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setIsLoading(true);
    let data = await fetch(url);
    data = await data.json();
    setCategories(data);
    setIsLoading(false);
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-10">
          {isLoading && <h1>loading...</h1>}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
