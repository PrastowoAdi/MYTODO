import { useMemo } from "react";
import { motion } from "framer-motion";

export function Sidebar() {
  const date = new Date();
  const dateNow = date.getDate();

  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.3,
            },
          }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-between bg-[#EEEEEE] w-[90%] mx-auto rounded-md mt-10"
        >
          <div className="flex flex-row items-center gap-2 px-3 py-2">
            <div className="p-1 text-xs text-[#5D904D] border rounded-md border-[#5D904D]">
              <hr className="bg-[#5D904D] py-[0.5px]" />
              <h1 className="text-[0.0.75rem]">{dateNow}</h1>
            </div>
            <h1 className="text-[0.875rem] text-[#202020]">Today</h1>
          </div>
          <div className="px-5">
            <h1 className="text-[#AAAAAA] text-sm">1</h1>
          </div>
        </motion.div>
      </div>
    );
  }, []);

  return renderMain;
}

export default Sidebar;
