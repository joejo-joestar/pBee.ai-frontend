import ActionButton from "@c/shared/ActionButton";
import MainHeaderText from "@c/shared/MainHText";
import { SelectedPage } from "@c/shared/types";

type Props = {};

const CTA = ({}: Props) => {
  return (
    <section
      id="cta"
      className="h-full select-none place-content-center gap-16 bg-ctaGradient py-10"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        {/* CTA */}
        <div className="flex flex-col gap-6">
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
