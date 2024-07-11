import MainHeaderText from "@/components/shared/MainHText";

const HeroCont = () => {
  return (
    <section
      id="herocont"
      className="font-display h-full select-none place-content-center bg-heroContGradient py-10"
    >
      <div className="gap-16 py-20 text-center">
        <MainHeaderText>Let us handle it.</MainHeaderText>
        <p className="font-body mt-10 text-xl">
          Placard's AI automates the media side of your <br /> company, so you
          can focus on growing <br /> your business.
        </p>
      </div>
    </section>
  );
};

export default HeroCont;
