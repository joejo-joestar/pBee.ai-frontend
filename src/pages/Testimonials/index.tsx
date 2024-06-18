import { SelectedPage } from "@c/shared/types";
import HText from "@c/shared/HText";
import Quotes from "./Quotes";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="Testimonials"
      className="gap-16 bg-gradient-to-b from-[#12131c] to-[#1c2336] py-10"
    >
      <div className="flex flex-col z-10 mt-40 p-5 md:basis-4/5 text-center">
        {/* Heading */}
        <HText>Our customers love Placard</HText>
        <h2 className="text-xl">See what they have to say.</h2>
        {/* Cards */}
      </div>
      {/* <Quotes size={""} quote={""} author={""} profile={""} /> */}
    </section>
  );
};

export default Testimonials;
