import { SelectedPage } from "@/components/shared/types";
import MainHeader from "@/pages/Home/Hero/MainHeader";
import Image from "@/assets/tempimg.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="placard"
      className="font-display h-full select-none bg-heroGradient py-10"
    >
      <MainHeader setSelectedPage={setSelectedPage} />
      <div className="mx-auto flex w-5/6 flex-col items-center justify-center">
        {/* Image */}
        <div className="mt-40 flex basis-3/5 justify-center">
          <img alt="Placard App" src={Image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
