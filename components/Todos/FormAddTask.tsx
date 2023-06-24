import moment from "moment";
import { useMemo, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { PiSunDuotone } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  setAddTaskForm: () => void;
  setModalClose: () => void;
}

export function FormAddTask(props: IProps) {
  const { setAddTaskForm, setModalClose } = props;
  const date: Date = new Date();

  const [chooseDateContent, setChooseDateContent] = useState<boolean>(false);
  const [taskForDate, setTaskForDate] = useState<string>(
    date.toLocaleDateString()
  );
  const [taskGetDay, setTaskGetDay] = useState<string>("Today");

  const renderSetDateContent = () => {
    if (chooseDateContent) {
      return (
        <AnimatePresence>
          <motion.div
            key="setdatecontent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.7, duration: 0.3 } }}
            className="absolute w-64 mt-1 text-sm bg-white border rounded-md select-none"
          >
            <div
              className="py-2 border-b cursor-pointer"
              onClick={() => setChooseDateContent(!chooseDateContent)}
            >
              <div className="flex flex-row items-center justify-between px-4">
                <h1 className="font-light text-[0.75rem]">
                  {moment(new Date(taskForDate)).format("DD MMM")}
                </h1>
                <IoMdClose className="text-[#B8B8B8]" />
              </div>
            </div>
            <div className="my-1 border-b">
              <div
                className="py-1 hover:bg-[#ececec] cursor-pointer"
                onClick={() => {
                  if (taskGetDay === "Today") {
                    setTaskForDate(
                      `${moment(new Date(taskForDate)).add(1, "days")}`
                    );
                    setTaskGetDay("Tomorrow");
                  } else {
                    setTaskForDate(
                      `${moment(new Date(taskForDate)).add(-1, "days")}`
                    );
                    setTaskGetDay("Today");
                  }
                }}
              >
                <div className="flex items-center justify-between px-4">
                  <div className="flex flex-row items-center gap-1">
                    <div className="">
                      <PiSunDuotone
                        className={`text-lg ${
                          taskGetDay !== "Today"
                            ? "text-[#5D904D]"
                            : "text-yellow-500"
                        }`}
                      />
                    </div>
                    <h1 className="">
                      {taskGetDay === "Today" ? "Tomorrow" : "Today"}
                    </h1>
                  </div>
                  <h1 className="">
                    {moment(new Date(taskForDate)).format("ddd")}
                  </h1>
                </div>
              </div>
            </div>
            <div className="py-4"></div>
          </motion.div>
        </AnimatePresence>
      );
    }
    return null;
  };

  const renderMain = useMemo(() => {
    return (
      <>
        <div className="flex flex-col gap-1 p-2">
          <input
            type="text"
            className="text-sm font-semibold outline-none placeholder:text-black/50"
            placeholder="Task name"
            autoFocus
          />

          <input
            type="text"
            className="text-[0.75rem] outline-none font-light placeholder:text-black/50"
            placeholder="Description"
          />

          <div className="relative">
            <div
              id="datecontent"
              className={`flex flex-row items-center gap-1 px-3 py-1 mt-3 text-sm border rounded-md cursor-pointer hover:bg-[#FAFAFA] ${
                taskGetDay === "Today"
                  ? "text-[#5D904D] w-20"
                  : "text-yellow-500 w-28"
              } font-light select-none`}
              onClick={() => setChooseDateContent(!chooseDateContent)}
            >
              <MdDateRange />
              <h1 className="">{taskGetDay}</h1>
            </div>
            {renderSetDateContent()}
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-end gap-2 px-2 py-2">
          <button
            className="px-3 py-2 bg-[#EEEEEE] text-gray-800 text-sm rounded-md hover:bg-[#d9d9d9]"
            onClick={() => {
              setAddTaskForm();
              setModalClose();
            }}
          >
            Cancel
          </button>
          <button
            className="px-3 py-2 bg-[#e63946] text-white text-sm rounded-md hover:bg-[#d43542]"
            onClick={() => {
              setAddTaskForm();
              setModalClose();
            }}
          >
            Add Task
          </button>
        </div>
      </>
    );
  }, [setAddTaskForm, renderSetDateContent, setModalClose]);

  return renderMain;
}

export default FormAddTask;
