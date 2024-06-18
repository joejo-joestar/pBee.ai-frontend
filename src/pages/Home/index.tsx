import { SelectedPage } from "@c/shared/types";
import MainHeader from "@/pages/Home/MainHeader";
import HeroCont from "@p/Home/HeroCont";
import Image from "@a/tempimg.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  return (
    <section
      id="placard"
      className="gap-16 bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <MainHeader setSelectedPage={setSelectedPage} />
      <div className="flex flex-col mx-auto w-5/6 items-center justify-center">
        {/* Image */}
        <div className="flex basis-3/5 justify-center mt-40 md:z-10">
          <img alt="Placard App" src={Image} />
        </div>
        <HeroCont />
      </div>
    </section>
  );
};

export default Home;
