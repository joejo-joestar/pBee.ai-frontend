type Props = {
  size: string;
  title: string;
  subtitle: string;
  img: string;
};

// TODO: finish
const Card = ({ size, title, subtitle, img }: Props) => {
  return (
    <div
      className={`${size} h-[400px] bg-indigo-700/opacity-5 shadow-inner border border-indigo-700 flex flex-col backdrop-blur p-5 rounded-xl bg-[#5b4ead]/5`}
    >
      <div className="rounded-xl bg-gradient-to-l from-gray-900 via-black to-gray-900">
        <img className="rounded-xl" alt="yes" src={img} />
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
