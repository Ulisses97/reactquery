interface IModalOverlayProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function ModalOverlay({
  isOpen,
  setIsOpen,
  children,
}: IModalOverlayProps) {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="z-10 w-screen h-screen top-0 left-0 right-0 bottom-0 fixed flex items-center justify-center">
          <div
            onClick={toggleModal}
            className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(0,0,0,0.83)]"
          ></div>
          <div className="z-20 absolute bg-[#885FE1] rounded-lg py-4 px-7 w-[90%] sm:w-[500px] ">
            {/* <div className="z-20 absolute bg-white rounded-lg py-4 px-7 max-w-[500px] min-w-[300px] "> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
}
