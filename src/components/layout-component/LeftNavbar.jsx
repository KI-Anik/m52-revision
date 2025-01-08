import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [Categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(result => setCategories(result.data.news_category))
    },[])
    return (
        <div>
            <h2 className="font-semibold mb-2">All Categories: ({Categories.length}) </h2>
            <div className="flex flex-col gap-2">
                {
                    Categories.map((category) => <NavLink
                    to={`/category/${category.category_id}`} 
                    className="btn"
                        key={category.category_id}>
                            {category.category_name}
                        </NavLink> )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;