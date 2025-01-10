import { Link, useLoaderData } from "react-router-dom";
import RightNav from "../layout-component/RightNav";
import Header from "../Header";

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
    return (
        <div className="w-11/12 mx-auto mt-4">
            <Header></Header>
            <main className="w-11/12 mx-auto grid grid-cols-12 mt-5 gap-5 ">
                <div className="col-span-9">
                    <h2 className="font-semibold">Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="photo"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details} </p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id}`} className="btn btn-primary">Bact to category</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <RightNav></RightNav>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;