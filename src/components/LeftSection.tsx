import React from "react";
import { Calendar, Clock, Globe } from "./icons";

export const LeftSection = () => {
  return (
    <section className=" w-full md:w-5/12 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 p-6 flex flex-col text-gray-500 font-semibold text-sm">
      <p className="">Gaurav Garg</p>
      <h2 className="font-bold text-2xl text-gray-900 mb-4">
        15 Minute Meeting
      </h2>
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5" />
        <p>15 min</p>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="h-5 w-5" />
        <p>9:30am - 9:45am, Friday, September 16, 2022</p>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Globe className="h-5 w-5" />
        <p>India Standard Time</p>
      </div>
    </section>
  );
};
