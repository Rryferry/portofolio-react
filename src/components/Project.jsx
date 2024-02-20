import React from "react";

import Poto1 from "../assets/Project/Screenshot 2024-02-06 112802.png";
import Poto2 from "../assets/Project/Screenshot 2023-11-07 104710.png";
import Poto3 from "../assets/Project/Screenshot 2024-02-18 211538.png";

export const Project = () => {
  const Projek = [
    {
      Gambar: Poto1,
      Title: "Project Coffe",
      Keterangan:
        "A stunning coffee offering, Rry Caffe combines the art of brewing with modern design. This is where coffee meets creativity.",
      Button: "Github",
      Link: "https://github.com/Rryferry/kopiperi.github.io.git",
    },
    {
      Gambar: Poto2,
      Title: "Project Portofolio",
      Keterangan:
        "This portfolio is an embodiment of my creativity in the world of web development, with a strong foundation in HTML, CSS, and JavaScript.",
      Button: "Github",
      Link: "https://github.com/Rryferry/Rryferry.git",
    },
    {
      Gambar: Poto3,
      Title: "Project Eccomers",
      Keterangan:
        "The PAS project brings a diversity of products on one platform, powered by the Bootstrap framework to provide a responsive and attractive interface.",
      Button: "Github",
      Link: "https://github.com/Rryferry/tokoferry.io.git",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works Project</p>
      </div>
      <div className="flex items-center justify-center my-10 mx-auto container">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Projek?.map((projek, i) => (
            <div className="rounded-md shadow-md bg-cyan-800" key={i}>
              <div className="p-5 flex flex-col">
                <div className="rounded-sm overflow-hidden">
                  <img src={projek.Gambar} alt="" />
                </div>
                <div className="title pt-6 ">
                  <h4 className="text-xl md:text-lg font-bold uppercase">
                    {projek.Title}
                  </h4>
                  <p className="text-sm pt-2 text-slate-400">
                    {projek.Keterangan}
                  </p>
                </div>
                <a
                  href={projek.Link}
                  className="text-center bg-slate-500 text-slate-50x py-3 rounded-md font-semibold mt-4 hover:text-cyan-500 hover:bg-slate-300 focus:scale-95 transition-all duration-300 ease-out"
                >
                  {projek.Button}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* last Grid */}
      </div>
    </section>
  );
};
export default Project;
