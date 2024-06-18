import Card from "@/pages/Features/Card";
import img1 from "@a/img1.png";
import img2 from "@a/img2.png";

type Props = {};

const FeatureCards = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row gap-5 mt-5 mx-auto w-2/3 items-center justify-center">
        <Card
          size="basis-3/5"
          img={img1}
          title={"Text to poster"}
          subtitle={
            "The power of AI at your fingertips to create any poster you need."
          }
        />
        <Card
          size="basis-2/5"
          img={img2}
          title={"Customizable"}
          subtitle={"Save your poster the way you want it."}
        />
      </div>
      <div className="flex flex-row gap-5 mt-5 mx-auto w-2/3 items-center justify-center">
        <Card
          size="basis-2/5"
          img={img2}
          title={"Imaginative"}
          subtitle={"Trained on data that gives results."}
        />
        <Card
          size="basis-3/5"
          img={img1}
          title={"Enterprise Solution"}
          subtitle={"Our tool propels and expands your business forward."}
        />
      </div>
    </div>
  );
};

export default FeatureCards;
