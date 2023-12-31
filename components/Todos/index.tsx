import { useMemo, useState } from "react";
import { GoPlus, GoCheck } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";

import FormAddTask from "./FormAddTask";
import { usetGetTodosList } from "@/hooks";

export function Todos() {
  const date: Date = new Date();
  const dateNow = date.getDate();
  const today = moment().date();

  const useGetTodosList = usetGetTodosList();
  const { data, isLoading } = useGetTodosList;

  const [addTaskForm, setAddTaskForm] = useState<boolean>(false);

  const renderMain = useMemo(() => {
    return (
      <section className="flex-1 h-screen overflow-y-scroll pb-36">
        <div className="w-5/6 mx-auto md:w-4/6">
          <div className="py-2">
            <h1 className="mt-10 text-2xl font-semibold text-[#1d3557]">
              {dateNow === today && "Today"}{" "}
              <span className="ml-1 text-[0.75rem] text-[#B8B8B8] font-light">
                {moment().format("ddd DD MMM")}
              </span>
            </h1>
            {isLoading ? (
              ""
            ) : (
              <>
                {data.data.map((e: any, idx: any) => (
                  <div className="flex flex-col gap-2 mt-3" key={idx}>
                    <div className="flex flex-row items-center gap-2 mb-5">
                      <GoCheck className="text-lg text-white bg-white border border-[#B8B8B8] rounded-full cursor-pointer hover:bg-[#B8B8B8] hover:text-gray-600 p-[0.125rem]" />
                      <div className="flex-1 text-[#888888]">
                        <h1 className="text-base text-[#1d3557]">{e.title}</h1>
                        <p className="text-[0.875rem] font-light">{e.desc}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </>
            )}

            {!addTaskForm && (
              <div
                className="flex flex-row items-center gap-2 mt-3 cursor-pointer group"
                onClick={() => setAddTaskForm(true)}
              >
                <GoPlus className="text-lg text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white group-hover:rounded-full" />
                <h1 className="text-sm text-[#B8B8B8] font-light group-hover:text-[#e63946]">
                  Add Task
                </h1>
              </div>
            )}
            <AnimatePresence>
              {addTaskForm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }}
                  className="border border-[#B8B8B8] rounded-md mt-3"
                >
                  <FormAddTask
                    setAddTaskForm={() => setAddTaskForm(false)}
                    setModalClose={() => {}}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  }, [addTaskForm, isLoading, data]);

  return renderMain;
}

export default Todos;
