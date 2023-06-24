import { useMemo } from "react";
import { motion } from "framer-motion";

export function Sidebar() {
  const date = new Date();
  const dateNow = date.getDate();

  const renderMain = useMemo(() => {
    return (
      <>
        <motion.section
          id="sidebar"
          key="sidebar-dekstop"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          className="hidden md:block md:w-1/3 lg:w-1/5 h-screen bg-[#FAFAFA] shadow-md select-none"
        >
          <div className="flex flex-col gap-2 mt-10">
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
              className="flex items-center justify-between bg-[#EEEEEE] w-[90%] mx-auto rounded-md"
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.4,
              duration: 0.3,
            },
          }}
          className="absolute w-full h-screen bg-black/50 md:hidden"
        >
          <motion.div
            key="sidebar-mobile"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="w-1/2 h-screen bg-[#FAFAFA] shadow-md"
          >
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                    duration: 0.3,
                  },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
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
          </motion.div>
        </motion.section>
      </>
    );
  }, []);

  return renderMain;
}

export default Sidebar;
