import { SelectedPage } from "@c/shared/types";
import HText from "@c/shared/HText";
import Quotes from "./Quotes";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="Testimonials"
      className="gap-16 bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Product)}
        className="z-10 mt-40 flex flex-col p-5 text-center md:basis-4/5"
      >
        {/* Heading */}
        <HText>Our customers love Placard</HText>
        <h2 className="text-xl">See what they have to say.</h2>
      </motion.div>
      {/* Cards */}
      <Quotes />
    </section>
  );
};

export default Testimonials;
