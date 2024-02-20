import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import hero from "../assets/poto1.png";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-screen object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center ">
          <h1 className=" md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold my-4">
            <span className="text-cyan-600 md:text-6xl text-5xl ">
              HII ! <br />
            </span>
            <span> My Name is Ferry Ferjiansyah</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-semibold text-gray-600">
            <Typewriter
              words={[
                "FullStack Developer",
                "UI/UX Desain",
                "Digital Marketing",
              ]}
              loop={true}
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h4>
          <div className="pt-6">
            <button className="btn-primary mx-8">Contact Me</button>
          </div>
          <div className="flex mt-8 text-2xl items-center text-gray-600 md:justify-start justify-center gap-5">
            <a href="https://wa.me/082137719796" className=" hover:text-white ">
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/ferry_jiansyah?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              className=" hover:text-white "
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Yt_rry"
              className=" hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@yth.rry?_t=8jPcXb6RIu2&_r=1"
              className=" hover:text-white"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
