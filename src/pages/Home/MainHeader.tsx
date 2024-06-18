import { SelectedPage } from "@c/shared/types";
import ActionButton from "@c/shared/ActionButton";
import MainHeaderText from "@c/shared/MainHText";

type Props = {
  setSelectedPage(value: SelectedPage): void;
};

const HeroTop = ({ setSelectedPage }: Props) => {
  return (
    <div className="flex flex-col z-10 mt-40 p-5 md:basis-3/5 items-center">
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
        style="px-10 py-5 text-xl w-[300px]"
        setSelectedPage={setSelectedPage}
        page={SelectedPage.Pricing}
      >
        Get Started
      </ActionButton>
    </div>
  );
};

export default HeroTop;
