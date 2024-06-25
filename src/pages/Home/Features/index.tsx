import { SelectedPage } from "@c/shared/types";
import Cards from "@p/Home/Features/FeatureCards";
import HText from "@c/shared/HText";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

// TODO: finish
const Features = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="product"
      className="h-full select-none place-content-center bg-deepPurple py-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Product)}
        className="z-10 flex flex-col p-5 text-center md:basis-4/5"
      >
        {/* Heading */}
        <HText>What can you do with Placard AI?</HText>
        {/* Cards */}
      </motion.div>
      <Cards />
    </section>
  );
};

export default Features;
