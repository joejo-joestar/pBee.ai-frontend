import Card from "./Card";
import { team_members } from "./team_members";

type Props = {};

const Team = ({}: Props) => {
  return (
    <section className="h-device place-content-center gap-16 bg-gradient-to-b from-[#12131c] to-[#1c2336] py-10">
      <div className="ml-[230px] flex flex-row items-start">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <div className="mx-auto flex flex-row flex-wrap justify-center gap-12">
          {/* Cards */}
          {team_members.map((value) => (
            <Card
              profile={value.profile}
              name={value.name}
              designation={value.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
