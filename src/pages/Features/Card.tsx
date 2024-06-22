type Props = {
  className: React.ComponentProps<"div">["className"];
  title: string;
  subtitle: string;
  img: string;
};

const Card = ({ className: size, title, subtitle, img }: Props) => {
  return (
    <div
      className={`${size} border-cardColor shadow-cardGlowEffect bg-CardColor/5 flex flex-col rounded-xl border p-5 backdrop-blur`}
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
