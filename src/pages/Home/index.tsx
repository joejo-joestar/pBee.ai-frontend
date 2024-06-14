import ActionButton from "@/components/shared/ActionButton";
import { SelectedPage } from "@/components/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "@/assets/tempimg.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1240px)");

  return (
    <section
      id="Placard"
      className="gap-16 bg-bgDark100 py-10 md:h-full md:pb-0"
    >
      <div className="flex flex-col mx-auto w-5/6 items-center justify-center">
        {/* Main Header */}
        <div className="z-10 mt-40 p-5 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-30 text-center ">
            <h1 className="text-7xl font-bold">Marketing, Simplified</h1>
            <p className="text-xl mt-10">
              Build posters in minutes with Placard, the AI driven tool for
              professionals.
            </p>
          </div>
        </div>
        {/* Action */}
        <ActionButton size="px-8 py-6" setSelectedPage={setSelectedPage}>
          Get Started
        </ActionButton>
        {/* Image */}
        <div className="flex basis-3/5 justify-center mt-60 md:z-10">
          <img alt="Placard App" src={Image} />
        </div>
      </div>
    </section>
  );
};

export default Home;
