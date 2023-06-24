import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FormAddTask from "../Todos/FormAddTask";

interface IProps {
  setModalClose: () => void;
}
export function ModalAddTodos(props: IProps) {
  const { setModalClose } = props;
  const renderMain = useMemo(() => {
    return (
      <AnimatePresence>
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 1,
          }}
          className="absolute z-50 flex w-full h-screen bg-black/40"
        >
          <motion.div
            key="modal-contentform"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0, transition: { delay: 0.7, duration: 0.3 } }}
            className="flex items-center justify-center w-[90%] p-5 mx-auto md:w-1/2 h-1/2"
          >
            <div className="w-full px-2 py-3 mx-auto bg-white rounded-md md:w-2/3">
              <FormAddTask
                setAddTaskForm={() => {}}
                setModalClose={setModalClose}
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }, [setModalClose]);

  return renderMain;
}

export default ModalAddTodos;
