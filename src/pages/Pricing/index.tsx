import MainHeaderText from "@/components/shared/MainHText";
import Card from "./Card";

type Props = {
  //   setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({}: Props) => {
  return (
    <section
      id="pricing"
      className="h-device place-content-center gap-16 bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <div className="mt-40 flex flex-col p-6 text-center">
        <MainHeaderText>Grow your business today</MainHeaderText>
        <p className="mt-5 text-2xl">Choose a plan that works best for you.</p>

        <div className="mt-10 flex flex-row justify-evenly gap-16">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
