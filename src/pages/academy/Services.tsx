import stat3 from "../../assets/academy/images/stat3.png";
import ServiceCard from "./components/ServiceCard";
import learning from "../../assets/academy/images/learning.png";
import schedule from "../../assets/academy/images/schedules.png";
import community from "../../assets/academy/images/community.png";
import event1 from "../../assets/academy/images/event1.png";
import event2 from "../../assets/academy/images/event3.png";
import event3 from "../../assets/academy/images/event2.png";
import EventCard from "./components/EventCard";

function Services() {
  return (
    <main id="services" className="p-4 relative md:p-20 bg-white gap-y-12 md:gap-y-20 min-h-full flex flex-col justify-start items-start">
      <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row-reverse justify-between">
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <p className="text-1xl text-textGrey">SERVICE</p>
          <h3 className="text-4xl font-bold ">
            Successful
            <br />
            Experience
          </h3>
          <p className="text-1xl md:w-3/5">
            Sunt ad occaecat voluptate quis veniam amet magna reprehenderit aute
            ipsum deserunt culpa. Velit in eiusmod nostrud mollit eu deserunt
            cupidatat quis anim enim excepteur nisi officia. A
          </p>
          <div className="border-academyPrimary rounded-md border-2 py-1 px-2 text-academyPrimary hover:bg-academyPrimary hover:cursor-pointer hover:text-white">
            ALL SERVICE
          </div>
        </div>
        <div className="rounded-md md:w-2/5">
          <img src={stat3} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <ServiceCard
          doc={learning}
          title="Learning"
          color="bg-red-100"
          content="something"
        />
        <ServiceCard
          doc={schedule}
          title="Schedule"
          color="bg-blue-100"
          content="something"
        />
        <ServiceCard
          doc={community}
          title="Communities"
          color="bg-green-100"
          content="something"
        />
      </div>
      <div className="w-full bg-dark flex justify-center">
        <div className="border-academyPrimary rounded-md border-2 py-1 px-2 text-academyPrimary hover:bg-academyPrimary hover:cursor-pointer hover:text-white">
          ALL SERVICE
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 justify-between md:justify-between shadow bg-academyPrimary rounded-md p-10 hover:scale-105 transition-transform duration-300">
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

      <div className="flex flex-col w-full items-center gap-6 justify-center">
        <p className="text-textGrey">EVENTS</p>
        <h4 className="text-4xl font-bold text-center">
          Outstanding
          <br />
          Events
        </h4>
        <div className="flex flex-col w-full gap-5">
          <EventCard topic="Math" image={event1} title="Occaecat Cupidatat" />
          <EventCard topic="Physics" image={event2} title="Non  Proident" />
          <EventCard topic="Informatics" image={event3} title="Sunt in Culpa" />
        </div>
      </div>
    </main>
  );
}

export default Services;
