import { SelectedPage } from "@/components/shared/types";
import HText from "@/components/shared/HText";
import Quotes from "./Quotes";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="Testimonials"
      className="h-full select-none place-content-center gap-16 bg-deepPurple py-10 font-display"
    >
      {/* Gradient Fade */}
      <div className="absolute z-10 h-full w-full bg-gradient-to-l from-deepPurple via-[#1c2336]/20 to-deepPurple"></div>
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-deepPurple via-[#1c2336]/20 to-deepPurple"></div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Product)}
        className="z-10 flex flex-col p-10 text-center md:basis-4/5"
      >
        {/* Heading */}
        <HText>Our customers love Placard</HText>
        <h2 className="z-10 text-xl font-body">See what they have to say.</h2>
      </motion.div>
      {/* Cards */}
      <Quotes />
    </section>
  );
};

export default Testimonials;
