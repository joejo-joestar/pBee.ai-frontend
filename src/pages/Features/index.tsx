import { SelectedPage } from "@c/shared/types";
import Cards from "@p/Features/FeatureCards";
import HText from "@c/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

// TODO: finish
const Features = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="Product"
      className="gap-16 bg-gradient-to-b from-[#12131c] to-[#1c2336] py-10"
    >
      <div className="flex flex-col z-10 mt-40 p-5 md:basis-4/5 text-center">
        {/* Heading */}
        <HText>What can you do with Placard AI?</HText>
      {/* Cards */}
      </div>
      <Cards />
    </section>
  );
};

export default Features;
