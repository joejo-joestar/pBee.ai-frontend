import MainHeaderText from "@/components/shared/MainHText";

type Props = {};

const MoreAboutUs = (props: Props) => {
  return (
    <section
      id="moreaboutus"
      className="h-device place-content-center gap-16 bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      <div>
        <MainHeaderText>About Us</MainHeaderText>
        <p>
          Our goal is to make powerful marketing tools accessible and easy to
          use for businesses.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          Simplifying technology to the world by providing a one-stop digital
          ecosystem
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Our Team </h1>
        <div className="Frame93 bg-indigo-700/opacity-20 inline-flex h-[385px] w-[287px] flex-col items-center justify-start gap-[42px] rounded-xl border border-indigo-700 p-8">
          {/* Profile */}
          <img
            className="size-64 rounded-full border border-neutral-700"
            src="https://via.placeholder.com/256x256"
          />
          {/* Label */}
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Name */}
            <h3 className="text-center text-xl font-semibold">
              James Fredrich
            </h3>
            {/* Designation */}
            <p className="text-center font-normal">CEO of xyz inc</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutUs;
