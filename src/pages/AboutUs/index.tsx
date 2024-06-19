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
      className="gap-16 h-[1080px] bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <div className="flex flex-col m-auto items-center gap-4">
        {/* Heading */}
        <MainHeaderText>About Us</MainHeaderText>
        <p className="text-center text-zinc-300 text-2xl">
          Our goal is to make powerful marketing tools accessible and easy to
          use for businesses.
        </p>
        <ActionButton
          style={"px-10 py-5 text-xl w-[300px]"}
          page={""}
          setSelectedPage={""}
        >
          Learn More
        </ActionButton>
      </div>
      {/* BG Image */}
      {/* <img
        className="size-[812px] opacity-20"
        src="https://via.placeholder.com/812x812"
      />
      <img
        className="size-[1188px] opacity-5"
        src="https://via.placeholder.com/1188x1188"
      /> */}
    </section>
  );
};

export default AboutUs;
