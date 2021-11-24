const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
      <div className="bg-white flex flex-col pt-16 pb-10 px-8 text-center">
        <img
          className="h-40"
          src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
          alt=""
        />
        <h1 className="text-brand-color font-semibold text-lg mt-4">
          Her siparişinize bir kampanya
        </h1>
        <p className="text-base mt-2 text-gray-600 font-light">
          Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
        </p>
      </div>
      <div className="bg-white flex flex-col pt-16 pb-10 px-8 text-center">
        <img
          className="h-40"
          src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
          alt=""
        />
        <h1 className="text-brand-color font-semibold text-lg mt-4">
          Dakikalar içinde kapınızda
        </h1>
        <p className="text-base mt-2 text-gray-600 font-light">
          Getir’le siparişiniz dakikalar içinde kapınıza gelir.
        </p>
      </div>
      <div className="bg-white flex flex-col pt-16 pb-10 px-8 text-center">
        <img
          className="h-40"
          src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
          alt=""
        />
        <h1 className="text-brand-color font-semibold text-lg mt-4">
          Binlerce çeşit mutluluk
        </h1>
        <p className="text-base mt-2 text-gray-600 font-light">
          Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default Cards;
