import { useEffect, useState } from "react";
import Slider from "react-slick";
import Title from "./ui/Title";

const Campaigns = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    setIsLoading(true);
    let data = await fetch(
      "https://619d3172131c600017088de4.mockapi.io/banners"
    );
    data = await data.json();
    setBanners(data);
    setIsLoading(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      {isLoading && <h1>Loading...</h1>}
      <Slider {...settings} className="-mx-2">
        {banners.map((banner) => (
          <div key={banner.id}>
            <picture className=" block px-2">
              <img
                className="w-full object-cover rounded-lg"
                src={banner.image}
              />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
