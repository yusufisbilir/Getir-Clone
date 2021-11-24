const MobileApp = () => {
  return (
    <div className="bg-primary-brand-color  bg-mobile-app rounded-xl flex items-center justify-between mt-6">
      <div className="p-10">
        <h3 className="text-white text-2xl font-bold">
          <span className="text-brand-yellow">Getir'i</span> indirin!
        </h3>
        <p className="text-white font-semibold mt-2">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br />
          getirelim.
        </p>
        <nav className="flex mt-5 gap-x-2">
          <img
            src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
            alt=""
          />
          <img
            src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
            alt=""
          />
          <img
            src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
            alt=""
          />
        </nav>
      </div>
      <picture className="pt-7">
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt=""
        />
      </picture>
    </div>
  );
};

export default MobileApp;
