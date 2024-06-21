type Props = {
  profile: string;
  name: string;
  designation: string;
};

const Card = ({ profile, name, designation }: Props) => {
  return (
    <div className="flex w-auto flex-col items-center gap-3 rounded-xl border border-violet-100 bg-gradient-to-b from-[#4F468AE5] to-[#847DB0E5] p-8 text-left backdrop-blur-md">
      {/* Profile */}
      <img
        className="size-64 rounded-full border border-neutral-700"
        src={profile}
      />
      {/* Label */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Name */}
        <h3 className="text-center text-xl font-semibold">{name}</h3>
        {/* Designation */}
        <p className="text-center font-normal">{designation}</p>
      </div>
    </div>
  );
};

export default Card;