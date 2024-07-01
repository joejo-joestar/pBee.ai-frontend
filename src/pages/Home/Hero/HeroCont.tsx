import MainHeaderText from "@/components/shared/MainHText";

const HeroCont = () => {
  return (
    <section
      id="herocont"
      className="bg-heroContGradient h-full place-content-center py-10"
    >
      <div className="gap-16 py-20 text-center">
        <MainHeaderText>Let us handle it.</MainHeaderText>
        <p className="mt-10 text-xl">
          Placard's AI automates the media side of your company, so you can
          focus on growing your business.
        </p>
      </div>
    </section>
  );
};

export default HeroCont;
