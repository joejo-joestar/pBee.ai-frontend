
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
      className={`${size} h-[400px] flex flex-col backdrop-blur shadow-lg p-5 rounded-xl bg-[#5b4ead]/5`}
    >
      <img className="rounded-xl" alt="yes" src={img} />
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
