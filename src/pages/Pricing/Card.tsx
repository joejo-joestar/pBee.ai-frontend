import ActionButton from "@/components/shared/ActionButton";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  pricingType: string;
  price?: string;
  isCustomPrice: boolean;
  features: string;
};

const Card = ({ pricingType, price, isCustomPrice, features }: Props) => {
  return (
    <div className="flex w-1/4 flex-col rounded-xl border border-cardColor bg-cardGradient p-8 text-left backdrop-blur-md">
      <h1 className="font-display text-3xl font-semibold">{pricingType}</h1>
      <div className="my-5 flex flex-row">
        {isCustomPrice ? (
          <h2 className="font-display text-6xl font-semibold">Custom</h2>
        ) : (
          <div className="flex flex-row">
            {/* Price */}
            <h2 className="font-display text-6xl font-semibold">${price}</h2>
            {/* per month */}
            <p className="ml-3 font-display text-2xl"> / month</p>
          </div>
        )}
      </div>

      {/* Select Plan Button */}
      <ActionButton style={"px-6 py-3 text-2xl"} page={SelectedPage.Register}>
        Select Plan
      </ActionButton>

      {/* Divider */}
      <div className="my-8 h-0 w-auto border border-solid border-cardColor" />

      {/* TODO: Get Features and split in file with keys */}
      {/* Features */}
      <div className="ml-5 flex flex-col gap-4 font-body">
        <p>{features}</p>
        <p>{features}</p>
        <p>{features}</p>
        <p>{features}</p>
        <p>{features}</p>
        <p>{features}</p>
      </div>
    </div>
  );
};

export default Card;
