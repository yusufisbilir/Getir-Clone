import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <a
      href="/#"
      className="group flex flex-col gap-y-2 items-center text-center p-4 transition-colors hover:bg-purple-100 hover:rounded"
    >
      <img
        src={image}
        alt="icon"
        className="w-12 h-12 rounded-md border border-gray-200"
      />
      <span className="text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-primary-brand-color">
        {title}
      </span>
    </a>
  );
};

export default Category;
