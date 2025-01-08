import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins w-11/12 mx-auto">
            <Header></Header>
            <section className="">
             <LatestNews></LatestNews>
            </section>
            <section className="py-2">
            <Navbar></Navbar>
            </section>
            <main className="grid grid-cols-12 pt-5 gap-3">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <main className="col-span-6">Main</main>
                <aside className="col-span-3">Right</aside>
            </main>
        </div>
    );
};

export default HomeLayout;