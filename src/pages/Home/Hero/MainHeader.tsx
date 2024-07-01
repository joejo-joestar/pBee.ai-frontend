import { SelectedPage } from "@/components/shared/types";
import ActionButton from "@/components/shared/ActionButton";
import MainHeaderText from "@/components/shared/MainHText";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage(value: SelectedPage): void;
};

const HeroTop = ({ setSelectedPage }: Props) => {
  return (
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Placard)} className="flex flex-col z-10 mt-40 p-5 md:basis-3/5 items-center">
      <div className="md:-mt-30 text-center ">
        {/* Headings */}
        <MainHeaderText>Marketing, Simplified</MainHeaderText>
        <p className="text-xl my-10">
          Build posters in minutes with Placard, the AI driven tool for
          professionals.
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
