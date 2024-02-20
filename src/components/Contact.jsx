import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  const contact_info = [
    { logo: <MdOutlineMail />, text: "ferjiansyahferry@gmail.com" },
    { logo: <FaGithub />, text: "github.com/Rryferry" },
    { logo: <FaLocationDot />, text: "Kudus, Central Java, Indonesia" },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className=" text-gray-400 mt-4 text-lg">Get In Touch</p>
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email Address" />
            <textarea placeholder="Your Massage" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Massage</button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-wrap gap-4 w-fit items-center">
                <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full text-3xl">
                  {contact.logo}
                </div>
                <p className="text-base">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
