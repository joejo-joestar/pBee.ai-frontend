import MainHeaderText from "@c/shared/MainHText";

type Props = {};

const MoreAboutUs = ({}: Props) => {
  return (
    <section
      id="moreaboutus"
      className="h-device place-content-center gap-16 bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <div className="mt-40 p-8 text-center">
        <MainHeaderText>About Us</MainHeaderText>
        <p className="mt-5 text-2xl">
          Our goal is to make powerful marketing tools accessible and easy to
          use for businesses.
        </p>
      </div>
      <div className="ml-[230px] flex w-1/2 flex-col p-16">
        <h1 className="text-4xl font-bold">
          Simplifying technology to the world by providing a one-stop digital
          ecosystem
        </h1>
        <p className="mt-3 pr-5 text-justify text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default MoreAboutUs;
