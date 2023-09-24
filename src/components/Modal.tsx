import { useRef } from "react";

interface IModalAnimationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Modal({ open = false, setOpen }: IModalAnimationProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleActionModal = (event: any) => {
    if (modalRef.current) {
      console.log(modalRef.current.id);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        onClick={handleActionModal}
        id="container-modal"
        className="pointer-events-auto fixed z-[2] h-screen w-full top-0 left-0 bg-[rgba(0,0,0,0.83)]"
      >
        <div
          ref={modalRef}
          id="content-modal"
          className="pointer-events-auto flex z-20 fixed top-0 left-0 right-0 bottom-0"
        >
          <div className=" w-[300px] h-[300px] bg-white m-[auto] ">
            <h1 className="text-black">asdasdas</h1>
          </div>
        </div>
      </div>
    </>
  );
}
