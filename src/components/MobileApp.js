const MobileApp = () => {
  return (
    <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app md:rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
        <h3 className="text-white text-2xl font-bold">
          <span className="text-brand-yellow">Getir'i</span> indirin!
        </h3>
        <p className="text-white font-semibold mt-2">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br />
          getirelim.
        </p>
        <nav className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-5 gap-x-2">
          <img
            className="md:h-8 lg:h-auto"
            src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
            alt=""
          />
          <img
            className="md:h-8 lg:h-auto"
            src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            alt=""
          />
          <img
            className="md:h-8 lg:h-auto"
            src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
            alt=""
          />
        </nav>
      </div>
      <picture className="pt-6 hidden md:block md:self-end">
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt=""
        />
      </picture>
    </div>
  );
};

export default MobileApp;
