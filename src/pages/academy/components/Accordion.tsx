import { InlineIcon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const data = [
  {
    question: "What is our goal??",
    answer:
      "Minim aliqua ea occaecat non veniam. Deserunt nulla incididunt pariatur dolore. Proident Lorem ut incididunt eiusmod minim do laboris irure elit exercitation est ullamco aute voluptate. Irure occaecat pariatur labore excepteur. Sint laborum laborum qui exercitation.",
  },
  {
    question: "Why are our fees so affordable like that?",
    answer:
      "Tempor sunt ad et excepteur sit sint fugiat eu labore consectetur minim anim laboris nulla. Ex minim et proident minim. Voluptate ad commodo ullamco quis amet id velit reprehenderit nisi sit. Magna dolor ipsum sunt cupidatat et do exercitation dolore qui sint magna amet. Nostrud adipisicing Lorem culpa dolor pariatur laborum ipsum do id. Velit minim est enim ad veniam non ad laborum tempor elit consequat consectetur reprehenderit. Adipisicing velit qui aliqua culpa minim incididunt in ea irure.",
  },
  {
    question: "Do you get Certificate after that?",
    answer:
      "Sit eu quis fugiat velit. Sint cupidatat sit commodo tempor ad adipisicing commodo culpa laboris ut ut cupidatat. Non laborum excepteur labore deserunt occaecat veniam et et anim exercitation labore do.",
  },
  {
    question: "How is the market competition like?",
    answer:
      "Culpa culpa enim tempor voluptate occaecat Lorem consectetur est consectetur. Lorem veniam enim dolor sit consequat nisi magna commodo duis excepteur id proident nisi. Adipisicing laboris sunt laborum ullamco sit eiusmod sint id tempor enim voluptate. Ad nisi deserunt cupidatat do sit.",
  },
  {
    question: "Am I going to get employed after this?",
    answer:
      "Minim amet aliqua sint dolore laboris eiusmod labore. Do ullamco sint pariatur occaecat excepteur ipsum pariatur culpa. Aliquip velit labore in voluptate ullamco aute excepteur sunt ipsum labore veniam aute excepteur laborum.",
  },
];
function Accordion() {
  type selectVal = number | null;

  const [selected, setSelected] = useState<selectVal>(null);

  const handleSelect = (i: selectVal) => {
    if (i == selected) {
      setSelected(null);
      return;
    }
    setSelected(i);
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 rounded-md gap-1 p-6 bg-white">
      {data.map((data, i) => (
        <div
          className="w-full flex flex-col gap-3 mb-4 hover:cursor-pointer"
          onClick={() => handleSelect(i)}
        >
          <div className="flex flex-row justify-between ">
            <div className="text font-bold">{data.question}</div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-textGrey">
              <InlineIcon
                className="w-3/5 text-academyPrimary"
                icon={selected == i ? "ep:arrow-up-bold" : "ep:arrow-down-bold"}
              />
            </div>
          </div>
          <p
            className={`transition-all duration-500 ${
              selected == i ? "" : "max-h-0 overflow-hidden"
            } `}
          >
            {data.answer}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Accordion;
