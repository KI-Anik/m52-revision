import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {

  return (
    <div className="card mb-3 bg-base-100 shadow-xl">
      <figure>
        <img src={news.thumbnail_url} className=" rounded-t-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{news.title}</h2>
        <p className="text-sm text-gray-500">{news.details.slice(0, 100)}...</p>
        <div className="flex items-center mt-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={news.author.img} alt={news.author.name} />
            </div>
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-sm">{news.author.name}</h3>
            <p className="text-xs text-gray-400">{news.author.published_date}</p>
          </div>
        </div>
        <div className="card-actions justify-between items-center mt-5">
          <div className="badge badge-outline">
            <span className="font-medium">{news.rating.badge}</span> ({news.rating.number})
          </div>
          <Link to={`/news/${news._id}`} className="btn btn-sm btn-primary">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
