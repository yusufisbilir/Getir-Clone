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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto md:py-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      {isLoading && <h1>Loading...</h1>}
      <Slider {...settings} className="md:-mx-2">
        {banners.map((banner) => (
          <div key={banner.id}>
            <picture className=" block md:px-2">
              <img
                className="w-full object-cover md:rounded-lg"
                src={banner.image}
                alt="banner"
              />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
