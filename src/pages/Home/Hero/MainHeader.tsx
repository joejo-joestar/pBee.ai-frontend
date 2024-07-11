import { SelectedPage } from "@/components/shared/types";
import ActionButton from "@/components/shared/ActionButton";
import MainHeaderText from "@/components/shared/MainHText";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage(value: SelectedPage): void;
};

const HeroTop = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Placard)}
      className="z-10 mt-40 flex flex-col items-center p-5 md:basis-3/5"
    >
      <div className="md:-mt-30 text-center">
        {/* Headings */}
        <MainHeaderText>Marketing, Simplified</MainHeaderText>
        <p className="font-body my-10 text-xl">
          Build posters in minutes with Placard, the AI driven tool <br />
          for professionals.
        </p>
      </div>
      {/* Action */}
      <ActionButton
        page={SelectedPage.Pricing}
        style="px-10 py-5 text-xl w-[300px]"
      >
        Get Started
      </ActionButton>
    </motion.div>
  );
};

export default HeroTop;
