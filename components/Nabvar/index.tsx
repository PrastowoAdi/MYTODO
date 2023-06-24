import { useMemo, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { GoHome, GoPlus, GoTasklist, GoPerson } from "react-icons/go";
import ModalAddTodos from "../ModalAddTodos";

interface IProps {
  setOpenSideBar: () => void;
}
export function Navbar(props: IProps) {
  const { setOpenSideBar } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const renderModal = () => {
    if (modalOpen) {
      return <ModalAddTodos setModalClose={() => setModalOpen(!modalOpen)} />;
    }
    return null;
  };
  const renderMain = useMemo(() => {
    return (
      <>
        <nav className="px-7 py-3 bg-[#f1faee]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <HiBars3
                className="text-xl cursor-pointer hover:text-[#e63946]"
                onClick={setOpenSideBar}
              />
              <GoHome className="text-xl cursor-pointer hover:text-[#e63946]" />
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <GoPlus
                className="text-xl cursor-pointer hover:text-[#e63946]"
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              />
              <div className="flex items-center gap-1">
                <GoTasklist className="text-xl cursor-pointer hover:text-[#e63946]" />
                <h1 className="text-xs select-none">2/5</h1>
              </div>
              <div className="p-1 bg-[#e63946] rounded-full">
                <GoPerson className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </nav>
        {renderModal()}
      </>
    );
  }, [setOpenSideBar, renderModal]);

  return renderMain;
}

export default Navbar;
