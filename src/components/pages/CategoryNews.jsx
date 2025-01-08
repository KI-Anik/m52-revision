import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    console.log(news)
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="font-semibold">  Dragon News Home</h2>
            <p className="text-gray-400"> {news.length} News found in this category </p>
            <div>
                {
                    news.map(singleCard =>
                         <NewsCard key={singleCard._id} news={singleCard}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;