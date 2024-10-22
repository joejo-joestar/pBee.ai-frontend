import ActionButton from "@/components/shared/ActionButton";
import MainHeaderText from "@/components/shared/MainHText";
import { SelectedPage } from "@/components/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id="company"
      onViewportEnter={() => setSelectedPage(SelectedPage.Company)}
      className="font-display h-full select-none place-content-center gap-16 bg-aboutUsGradient py-10"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Heading */}
        <MainHeaderText>About Us</MainHeaderText>
        <p className="font-body text-center text-2xl">
          Our goal is to make powerful marketing tools accessible and easy to
          use for businesses.
        </p>
        {/* Learn More Button */}
        <ActionButton
          style={"px-10 py-5 text-xl w-[300px]"}
          page={SelectedPage.Team}
        >
          Learn More
        </ActionButton>
      </div>
    </motion.section>
  );
};

export default AboutUs;
