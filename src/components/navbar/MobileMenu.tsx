import { SelectedPage } from "@c/shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LoginButtons from "./LoginButtons";
import QuickLinks from "./QuickLinks";

type Props = {
  selectedPage: SelectedPage;
};

const MobileMenu = ({ selectedPage }: Props) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open;
  return (
    <div className="flex justify-center">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
      >
        <a className="relative"> Menu </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 rounded-xl bg-cardColor/40 backdrop-blur"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-md bg-cardColor/40 backdrop-blur" />
              <div className="w-64 rounded-xl bg-cardColor/40 p-6 shadow-xl backdrop-blur">
                <QuickLinks
                  style="flex flex-col justify-left gap-5"
                  selectedPage={selectedPage}
                />
                <LoginButtons
                  style={`flex flex-col mt-5 gap-5`}
                  buttonStyle={`px-6 py-4 basis-3/4`}
                  selectedPage={selectedPage}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenu;
