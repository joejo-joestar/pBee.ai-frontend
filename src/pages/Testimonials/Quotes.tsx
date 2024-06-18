type Props = {
  size: string;
  quote: string;
  author: string;
  profile: string;
};

// TODO: finish
const Quotes = ({ size, author, quote, profile }: Props) => {
  return (
    <div
      className={`${size} flex flex-col backdrop-blur shadow-lg p-5 rounded-xl bg-[#5b4ead]/5`}
    >
      <p className="">{quote}</p>
      <img alt="yes" src={profile} />
      <h3 className="mt-5 text-lg font-bold">{author}</h3>
    </div>
  );
};

export default Quotes;
