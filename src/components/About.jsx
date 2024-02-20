import React from "react";
import img from "../assets/poto2.png";
const About = () => {
  const info = [
    { text: "learning Cursus", cont: "02" },
    { text: "Complited Project", cont: "05" },
    { text: "E-Certifikation", cont: "03" },
  ];
  return (
    <section id="about" className="py-5 text-whiteh">
      <div className="text-center mt-10">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-500 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello, I'm Ferry Ferjiansyah, a student at SMK NU Maarif Kudus,
                aspiring to be a Full Stack Developer. I've gained skills in
                HTML, CSS, and JavaScript, and worked on projects using React
                and Node.js. I believe in the positive impact of technology and
                am eager to contribute to web development. Open to new
                opportunities and projects. Thank you!
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.cont}
                      <span className="text-cyan-500">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary">Download CV</button>
            </div>
          </div>
          <div className="flex-1 justify-center items-center md:mt-0 mt-6">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm imgabout">
              <img
                src={img}
                alt=""
                className="w-full object-cover bg-cyan-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
