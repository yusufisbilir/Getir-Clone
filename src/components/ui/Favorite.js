import { AiOutlinePlus } from "react-icons/ai";
import React from "react";

const Favorite = ({ favorite }) => {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
      <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-200 bg-white rounded-lg text-brand-color shadow-md ">
        <AiOutlinePlus />
      </button>
      <img src={favorite.image} alt={favorite.title} />
      <div className=" text-brand-color">₺{favorite.price}</div>
      <div className=" text-gray-900">{favorite.title}</div>
      <div className="text-gray-500">{favorite.alt}</div>
    </div>
  );
};

export default Favorite;
