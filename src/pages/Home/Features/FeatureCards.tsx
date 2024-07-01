import Card from "@/pages/Home/Features/Card";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";

type Props = {};

const FeatureCards = ({}: Props) => {
  return (
    <div className="mx-auto mt-5 flex w-2/3 flex-wrap place-content-center items-stretch gap-5">
      <Card
        className="sm:basis-3/6"
        img={img1}
        title={"Text to poster"}
        subtitle={
          "The power of AI at your fingertips to create any poster you need."
        }
      />
      <Card
        className="sm:basis-2/6"
        img={img2}
        title={"Customizable"}
        subtitle={"Save your poster the way you want it."}
      />
      <Card
        className="sm:basis-2/6"
        img={img2}
        title={"Imaginative"}
        subtitle={"Trained on data that gives results."}
      />
      <Card
        className="sm:basis-3/6"
        img={img1}
        title={"Enterprise Solution"}
        subtitle={"Our tool propels and expands your business forward."}
      />
    </div>
  );
};

export default FeatureCards;
