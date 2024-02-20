import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <FaReact />,
      lavel: "Beginner",
      cont: "50",
    },
    {
      logo: <FaHtml5 />,
      lavel: "Expect",
      cont: "90",
    },
    {
      logo: <FaPhp />,
      lavel: "Beginner",
      cont: "50",
    },
    {
      logo: <SiTailwindcss />,
      lavel: "Beginner",
      cont: "70",
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-cyan-500 text-4xl font-semibold">
          My <span className="text-gray-100">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowlage</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skills, i) => (
            <div
              key={i}
              className="border-2 border-cyan-900 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgba(8,145,170) ${skills.cont}%, #ddd ${skills.cont}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center  hover:text-cyan-600">
                  {skills.logo}
                </div>
              </div>
              <p className="text-xl mt-2">{skills.lavel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
