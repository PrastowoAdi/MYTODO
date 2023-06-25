import { NextPage } from "next";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";

const Activity: NextPage = () => {
  return (
    <section className="flex-1 h-screen">
      <div className="w-5/6 h-screen py-10 mx-auto md:w-4/6">
        <h1 className="text-xl font-semibold">All Activity</h1>
        <div className="flex flex-row items-center gap-1 mt-2 ml-2 text-sm">
          <GoCheckCircleFill className="text-lime-500" />
          <h1 className="">Complated</h1>
        </div>
      </div>
    </section>
  );
};

export default Activity;
