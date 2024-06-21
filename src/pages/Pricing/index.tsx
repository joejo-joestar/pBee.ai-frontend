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
        {/* Header */}
        <MainHeaderText>Grow your business today</MainHeaderText>
        <p className="mt-5 text-2xl">Choose a plan that works best for you.</p>
        {/* Cards */}
        <div className="mt-10 flex flex-row justify-center gap-16">
          <Card
            pricingType={"Starter"}
            price={"5"}
            features={"placeholder"}
            isCustomPrice={false}
          />
          <Card
            pricingType={"Pro"}
            price={"50"}
            features={"placeholder"}
            isCustomPrice={false}
          />
          <Card
            pricingType={"Enterprise"}
            features={"placeholder"}
            isCustomPrice={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
