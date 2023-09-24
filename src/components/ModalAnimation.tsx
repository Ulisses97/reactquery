import { motion, AnimatePresence } from "framer-motion";

interface IModalAnimationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalAnimation({
  open = false,
  setOpen,
}: IModalAnimationProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={() => alert("teste")}
            style={{ pointerEvents: "auto" }}
            className="pointer-events-auto fixed z-[2] h-screen w-full top-0 left-0 bg-[rgba(0,0,0,0.83)]"
          ></motion.div>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            className="pointer-events-auto flex z-20 fixed top-0 left-0 right-0 bottom-0"
          >
            <motion.div className=" w-[300px] h-[300px] bg-white m-[auto] ">
              <motion.h1
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.3,
                  },
                }}
                className="text-black"
              >
                Teste
              </motion.h1>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
