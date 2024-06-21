import ActionButton from "@c/shared/ActionButton";
import MainHeaderText from "@c/shared/MainHText";
import { SelectedPage } from "@c/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="company"
      className="h-[1080px] place-content-center gap-16 bg-gradient-to-b from-[#12131c] to-[#1c2336] py-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Company)}
        className="flex flex-col items-center justify-center gap-5"
      >
        {/* Heading */}
        <MainHeaderText>About Us</MainHeaderText>
        <p className="text-center text-2xl text-zinc-300">
          Our goal is to make powerful marketing tools accessible and easy to
          use for businesses.
        </p>
        {/* Learn More Button */}
        <ActionButton
          style={"px-10 py-5 text-xl w-[300px]"}
          page={SelectedPage.MoreAboutUs}
        >
          Learn More
        </ActionButton>
      </motion.div>
    </section>
  );
};

export default AboutUs;
