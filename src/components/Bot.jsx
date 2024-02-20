import React from "react";
import { FaCommentDots } from "react-icons/fa6";

const Bot = () => {
  return (
    <div className="fixed bottom-5 right-7 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
      <FaCommentDots className="h-5 w-5" />
    </div>
  );
};

export default Bot;
