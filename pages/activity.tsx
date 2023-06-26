import { NextPage } from "next";
import React from "react";
import { GoCheckCircleFill, GoPerson } from "react-icons/go";

const Activity: NextPage = () => {
  return (
    <section className="flex-1 h-screen pb-10 overflow-y-scroll">
      <div className="w-5/6 py-10 mx-auto md:w-4/6">
        <h1 className="text-xl font-semibold">All Activity</h1>
        <div className="flex flex-row items-center gap-1 mt-2 mb-5 ml-2 text-sm">
          <GoCheckCircleFill className="text-lime-500" />
          <h1 className="">Complated</h1>
        </div>

        {Array(5)
          .fill(undefined)
          .map((e: any, idx: any) => (
            <div className="" key={idx}>
              <div className="border-b">
                <h1 className="py-2 text-sm font-semibold">
                  24 Jun - Saturday
                </h1>
              </div>
              {Array(3)
                .fill(undefined)
                .map((e: any, idx: any) => (
                  <div
                    className="flex flex-row items-center gap-3 py-2 text-sm border-b w-[90%]"
                    key={idx}
                  >
                    <div className="relative p-3 bg-[#e63946] rounded-full">
                      <GoPerson className="text-xl text-white" />
                      <div className="absolute bottom-0 -right-[0.125rem]">
                        <GoCheckCircleFill className="text-[1rem] bg-white rounded-full text-lime-500" />
                      </div>
                    </div>
                    <div className="">
                      <h1 className="">
                        Task Complated:{" "}
                        <span className="font-semibold">Title Task</span>
                      </h1>
                      <h2 className="text-xs text-[#aeaeae] mt-2">15:39</h2>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Activity;
