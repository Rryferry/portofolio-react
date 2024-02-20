import React from "react";
import Sertifikat from "../assets/E-sertifikation/sertifikat 1.png";
import Sertifikat1 from "../assets/E-sertifikation/sertifikat 2.png";
import Sertifikat2 from "../assets/E-sertifikation/Sertifikat3.png";

const Sertifikation = () => {
  return (
    <section className="py-12 px-3 text-white">
      <div className=" container text-left sm:mx-7">
        <h3 className="text-4xl font-semibold text-gray-300">Sertifikation</h3>
        <p className="text-slate-400 mt-4">My Sertifikasion Cursus</p>
      </div>
      <div className="items-center justify-center col-span-10 gap-7 max-w-screen-xl lg:flex w-auto md:w-11/12 md:mx-auto">
        <div className="bg-cyan-800 relative px-4 rounded-2xl shadow-md lg:max-w-4xl mx-auto min-h-20 mt-5 flex gap-6 lg:flex-row flex-row-reverse items-center sm:col-auto">
          <div>
            <img src={Sertifikat1} alt="" />
          </div>
        </div>
        <div className="bg-cyan-800 relative px-4 rounded-2xl shadow-md lg:max-w-4xl mx-auto min-h-20 mt-5 flex gap-6 lg:flex-row flex-row-reverse items-center sm:col-auto">
          <div>
            <img src={Sertifikat} alt="" />
          </div>
        </div>
        <div className="bg-cyan-800 relative px-4 rounded-2xl shadow-md lg:max-w-4xl mx-auto min-h-20 mt-5 flex gap-6 lg:flex-row flex-row-reverse items-center sm:col-auto">
          <div>
            <img src={Sertifikat2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sertifikation;
