import ActionButton from "@c/shared/ActionButton";
import MainHeaderText from "@c/shared/MainHText";
import { SelectedPage } from "@c/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const CTA = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="cta"
      className="gap-16 h-[1080px] place-content-center bg-gradient-to-b from-[#12131c] to-[#1c2336] py-10"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        {/* CTA */}
        <div className="flex-col gap-6 flex">
          <MainHeaderText>Start creating with Placard</MainHeaderText>
          <p className="text-center text-xl text-zinc-300">
            Never think twice about your media.
          </p>
        </div>
        {/* Action */}
        <ActionButton
          page={SelectedPage.Pricing}
          style="px-10 py-5 text-xl w-[300px]"
        >
          Get Started
        </ActionButton>
      </div>
    </section>
  );
};

export default CTA;
