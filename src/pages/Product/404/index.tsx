import ActionButton from "@/components/shared/ActionButton";

type Props = {};

const NoPage = ({}: Props) => {
  return (
    <section
      id="NoPage"
      className="h-full select-none place-content-center gap-16 bg-ctaGradient p-10"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        {/* CTA */}
        <h1 className="select-none text-center font-display text-9xl font-black opacity-75">
          404
        </h1>
        <span className="text-center font-body text-3xl">
          Something's missing.
        </span>
        <p className="opacity-50">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        {/* Action */}
        <ActionButton page={"/product"} style="p-5 text-xl ">
          Return Home
        </ActionButton>
      </div>
    </section>
  );
};

export default NoPage;
