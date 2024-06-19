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
      className="gap-16 bg-gradient-to-b to-[#12131c] from-[#1c2336] py-10"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Product)} className="flex flex-col z-10 mt-40 p-5 md:basis-4/5 text-center">
        {/* Heading */}
        <HText>Our customers love Placard</HText>
        <h2 className="text-xl">See what they have to say.</h2>
        {/* Cards */}
      </motion.div>
      <Quotes />
    </section>
  );
};

export default Testimonials;
