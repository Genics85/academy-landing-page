import error from "./assets/images/error.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-5 md:p-20 md:pt-10 bg-[#051923] flex flex-col justify-center items-center min-h-screen space-y-12">
      <img src={error} className="md:w-4/5 lg:w-3/5" alt="" />
      <Link to="/">
        <button className="border-2 shadow-md shadow-white rounded-md hover:bg-white hover:text-[#051923] border-white text-white px-3 py-1">
          Go home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
