import { InlineIcon } from "@iconify/react/dist/iconify.js";
import teacher1 from "../../assets/academy/images/teacher1.png";
import teacher2 from "../../assets/academy/images/teacher2.png";
import teacher3 from "../../assets/academy/images/teacher3.png";
import teacher4 from "../../assets/academy/images/teacher4.png";
import TeacherCard from "./components/TeacherCard";
import { useRef } from "react";
import Accordion from "./components/Accordion";
import TestimonialCard from "./components/TestimonialCard";

function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

    const testScrollRight = ()=>{
        if(testRef.current) testRef.current.scrollLeft +=40
    }
    const testScrollLeft = ()=>{
        if(testRef.current) testRef.current.scrollLeft -=40
    }

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 40;
  };

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 40;
  };
  return (
    <main className="p-4 md:p-20 bg-academyBg gap-y-12 md:gap-y-20 min-h-full flex flex-col justify-start items-start">
      <div className="flex flex-col gap-4 w-full">
        <p className="text-textGrey">OUR TEAM</p>
        <h3 className="font-bold text-4xl">Best Teachers</h3>
        <div
          ref={containerRef}
          className="flex gap-4 w-full overflow-x-auto no-scrollbar"
        >
          <TeacherCard img={teacher1} name="Jafari Long" subject="Math" />
          <TeacherCard img={teacher2} name="Nerte Gronw" subject="Physics" />
          <TeacherCard
            img={teacher3}
            name="Bernarr Dominik"
            subject="Chemistry"
          />
          <TeacherCard
            img={teacher4}
            name="Karlien Nijhuis"
            subject="Informatics"
          />
          <TeacherCard img={teacher2} name="Nerte Gronw" subject="Physics" />
          <TeacherCard
            img={teacher3}
            name="Bernarr Dominik"
            subject="Chemistry"
          />
          <TeacherCard
            img={teacher4}
            name="Karlien Nijhuis"
            subject="Informatics"
          />
        </div>
        <div className="flex gap-4 w-full items-center justify-center ">
          <div
            onClick={scrollLeft}
            className="w-8 h-8 rounded-full shadow border-2 border-academyBg hover:cursor-pointer"
          >
            <InlineIcon
              className="w-full h-full text-academyPrimary"
              icon="ic:round-less-than"
            />
          </div>
          <div
            onClick={scrollRight}
            className="w-8 h-8 rounded-full shadow border-2 border-academyBg hover:cursor-pointer"
          >
            <InlineIcon
              className="w-full h-full text-academyPrimary"
              icon="ic:round-greater-than"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-textGrey">TESTIMONIALS</p>
        <h3 className="font-bold text-3xl">Students Say</h3>
        <div ref={testRef} className="flex gap-4 overflow-auto no-scrollbar">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="flex gap-4 w-full items-center justify-center ">
                <div onClick={testScrollLeft} className="w-8 h-8 rounded-full shadow border-2 border-academyBg hover:cursor-pointer"><InlineIcon className="w-full h-full text-academyPrimary" icon="ic:round-less-than"/></div>
                <div onClick={testScrollRight} className="w-8 h-8 rounded-full shadow border-2 border-academyBg hover:cursor-pointer"><InlineIcon className="w-full h-full text-academyPrimary" icon="ic:round-greater-than"/></div>
            </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <p className="text-textGrey">FAQ</p>
        <h3 className="font-bold text-4xl text-center mb-8">
          Frequently Asked <br /> Questions
        </h3>
        <Accordion />
      </div>
   
    </main>
  );
}

export default Team;
