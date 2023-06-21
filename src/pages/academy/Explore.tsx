import bgimg from "../../assets/academy/images/explorebg.png";
import avatar from "../../assets/academy/images/avarta.png";
import ExploreCard from "./components/ExploreCard";

function Explore() {
  return (
    <main id="courses" className="p-4 md:p-20 bg-white gap-y-7 min-h-full flex flex-col justify-start items-start">
      <p className="text-1xl text-textGrey">COURSES</p>
      <h3 className="font-bold text-4xl">
        Explore Our <br /> Courses
      </h3>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative md:col-span-2 h-full min-h-  rounded-md flex hover:scale-105 transition-transform duration-300">
          <div className="absolute rounded-md bg-black w-full h-full">
            <img src={bgimg} className="w-full h-full rounded-md" />
          </div>
          <div
            className={`rounded-md  absolute opacity-70 bg-gradient-to-t from-black to-red-400 flex flex-col justify-between p-6 w-full h-full`}
          ></div>
          <div
            className={`rounded-md relative flex flex-col justify-between p-6 w-full h-full`}
          >
            <div className="text-1xl flex justify-center items-center rounded-full h-8 w-16 bg-academyBg">
              Math
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-4xl text-white">
                Ipsum dolor sit amet
                <br />
                consectetur
              </h3>
              <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
                <div className="flex flex-row items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full shadow">
                    <img src={avatar} className="w-full h-full" alt="" />
                  </div>
                  <p className="text-1xl text-textGrey">Donat Twerski</p>
                </div>
                <div className="flex flex-row w-full md:w-auto justify-between gap-x-4">
                  <h3 className="font-bold text-3xl text-white">$24</h3>
                  <button className="rounded-md bg-red-400 text-white text-1xl px-2 py-1 hover:cursor-pointer">
                    START NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </main>
  );
}

export default Explore;
