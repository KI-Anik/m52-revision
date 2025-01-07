import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-3 bg-base-200 p-2">
            <p className="bg-[#D72050] px-3 py-2">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
            <Link> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            <Link> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;