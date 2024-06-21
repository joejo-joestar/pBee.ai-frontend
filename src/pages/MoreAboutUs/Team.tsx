import Card from "./Card";

type Props = {};

const tempimg = "https://via.placeholder.com/256x256";

const Team = ({}: Props) => {
  return (
    <section className="h-device place-content-center gap-16 bg-gradient-to-b from-[#12131c] to-[#1c2336] py-10">
      <div className="ml-[230px] flex flex-row items-start">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <div className="mx-auto flex flex-row flex-wrap justify-between gap-5 p-8">
          {/* Cards */}
          {/* TODO: Make use of array */}
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"AI / ML Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"AI / ML Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"AI / ML Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"Back End Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"Back End Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"Back End Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"Front End Team"}
          />
          <Card
            profile={tempimg}
            name={"James Frederich"}
            designation={"Front End Team"}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
