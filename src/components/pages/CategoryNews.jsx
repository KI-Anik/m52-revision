import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data} = useLoaderData()
    return (
        <div>
            <h3> 
            {data.length} News found in this category
            </h3>
        </div>
    );
};

export default CategoryNews;