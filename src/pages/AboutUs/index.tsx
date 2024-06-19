import ActionButton from "@/components/shared/ActionButton";
import MainHeaderText from "@/components/shared/MainHText";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="aboutus"
      className="gap-16 h-[1080px] place-content-center bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        {/* Heading */}
        <MainHeaderText>About Us</MainHeaderText>
        <p className="text-center text-zinc-300 text-2xl">
          Our goal is to make powerful marketing tools accessible and easy to
          use for businesses.
        </p>
        {/* Learn More Button */}
        <ActionButton
          style={"px-10 py-5 text-xl w-[300px]"}
          page={""}
          setSelectedPage={""}
        >
          Learn More
        </ActionButton>
      </div>
    </section>
  );
};

export default AboutUs;
