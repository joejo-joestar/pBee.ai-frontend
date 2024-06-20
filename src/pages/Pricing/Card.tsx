import ActionButton from "@/components/shared/ActionButton";
import { SelectedPage } from "@/components/shared/types";

type Props = {};

const Card = ({}: Props) => {
  return (
    <div className="flex w-1/5 flex-col rounded-xl border border-violet-100 bg-gradient-to-b from-slate-600/60 to-slate-400/60 p-10 text-left backdrop-blur-md">
      <h1 className="text-3xl font-semibold">Starter</h1>
      <div className="my-5 flex flex-row">
        {/* Price */}
        <h2 className="text-6xl font-semibold">$5</h2>
        {/* per month */}
        <div className="ml-2 flex flex-col">
          <p>/</p>
          <p className="font-norma text-2xl"> month</p>
        </div>
      </div>

      {/* Select Plan Button */}
      <ActionButton style={"px-6 py-3 text-2xl"} page={SelectedPage.SignUp}>
        Select Plan
      </ActionButton>

      {/* Divider */}
      <div className="mt-5 h-0 w-auto border-[1px] border-solid border-bgDark50/70" />

      {/* Features */}
      <div className="mt-5 flex flex-col gap-4">
        <p className="">placeholder</p>
        <p className="">placeholder</p>
        <p className="">placeholder</p>
        <p className="">placeholder</p>
        <p className="">placeholder</p>
      </div>
    </div>
  );
};

export default Card;
