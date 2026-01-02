import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  const publishDate = new Date(author.published_date).toDateString();

  return (
    <div className="card bg-base-100 shadow-md hover:scale-105">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">{publishDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body pt-3">
        <p className="text-sm text-gray-600">{details.slice(0, 200)}...</p>

        <span className="text-primary font-semibold cursor-pointer">
          Read More
        </span>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              {rating.number}.0
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
