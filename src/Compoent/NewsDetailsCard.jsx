import React from "react";
import { Link} from "react-router";
import { IoArrowBack } from "react-icons/io5";

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, image_url, details } = news;
  return (
    <div className="space-y-5">
      <h2 className="text-primary text-2xl font-bold">Dragon News</h2>
      <div className="space-y-8 shadow-lg p-6">
        <img
          src={image_url}
          alt=""
          className="w-full object-cover overflow-hidden "
        />
        <h2 className="text-black text-3xl font-bold">{title}</h2>
        <p className="text-base-400">{details}</p>
        <Link
          to={`/category_news/${category_id}`}
          className="btn bg-secondary text-white p-3"
        >
          <IoArrowBack size={24} /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
