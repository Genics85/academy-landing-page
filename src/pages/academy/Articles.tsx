import bgimg from "../../assets/academy/images/explorebg.png";
import ArticleCard from "./components/ArticleCard";
import download from "../../assets/academy/images/download.png";
import stores from "../../assets/academy/images/appstores.png";

function Articles() {
  return (
    <main className="p-4 pb-0 md:p-20 bg-white gap-y-12 md:gap-y-20 min-h-full flex flex-col justify-start items-start">
      <div id="blog" className="flex flex-col gap-4">
        <p  className="text-textGrey">OUR BLOG</p>
        <h4 className="text-4xl font-bold">Latest Articles</h4>
      </div>
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
            <div className="text-1xl flex justify-center items-center rounded-full h-8 w-fit px-2 bg-academyBg">
              20th Mar,2021
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-4xl text-white">
                Ipsum dolor sit amet
                <br />
                consectetur
              </h3>
              <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
                <p className="text-textGrey">
                  Aliqua na est fugiat quis commodo do nostrud voluptate enim
                  nisi consectetur quis laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="flex w-full justify-center">
        <button className="border-2 hover:bg-academyPrimary hover:text-white border-academyPrimary text-academyPrimary font-bold py-1 px-4 rounded-md">
          ALL BLOG
        </button>
      </div>
      <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row justify-between">
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <p className="text-1xl text-textGrey">DOWNLOAD</p>
          <h3 className="text-4xl font-bold ">
            Download
            <br /> Our App
          </h3>
          <p className="text-1xl md:w-4/5">
            Sunt ad occaecat voluptate quis veniam amet magna reprehenderit aute
            ipsum deserunt culpa. Velit in eiusmod nostrud
          </p>
          <div className=" hover:cursor-pointer hover:text-white">
            <img src={stores} className="w-3/5" alt="" />
          </div>
        </div>
        <div className="rounded-md  md:w-3/5">
          <img src={download} className="w-full" alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 justify-between md:justify-between shadow-md bg-academyPrimary rounded-md p-10 hover:scale-105 transition-transform duration-300">
        <div>
          <h3 className="text-4xl font-bold text-white">Find Your Course</h3>
          <p className="text-white md:w-3/5">
            Knowledge of the world around us and changes it into something
            better
          </p>
        </div>
        <button className="flex items-center justify-center bg-red-400 px-2 rounded-md py-1 text-white shadow hover:border-white hover:border-2 hover:text-white hover:bg-academyPrimary">
          GET STARTED
        </button>
      </div>
    </main>
  );
}

export default Articles;
