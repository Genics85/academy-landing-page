import { ReactNode } from "react";

type cardInfo = {
  doc: string;
  title?: ReactNode;
  content: string;
  color?: string;
};

function ServiceCard({ doc, title, content, color }: cardInfo) {
  return (
    <div
      className={`w-full rounded-md shadow p-6 flex flex-col gap-y-6 ${
        color ? color : "bg-white"
      } hover:scale-105 transition-transform duration-300`}
    >
      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white">
        <img src={doc} className="w-1/2 h-1/2 " alt="" />
      </div>
      <h4 className="text-xl font-bold">
        {title ? (
          title
        ) : (
          <>
            Managing
            <br /> Courses
          </>
        )}
      </h4>
      <p className="text-textGrey">{content}</p>
      <p className="font-bold text-textGrey hover:cursor-pointer">Learn More</p>
    </div>
  );
}

export default ServiceCard;
