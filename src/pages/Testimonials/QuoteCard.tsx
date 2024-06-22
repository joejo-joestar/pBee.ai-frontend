type Props = {
  quote: string;
  profileImg: string;
  author: string;
  designation: string;
};

// TODO: finish
const Card = ({ quote, profileImg, author, designation }: Props) => {
  return (
    <div
      className={`bg-cardColor/5 border-cardColor flex h-[200px] max-w-[400px] flex-col rounded-xl border p-5 shadow-lg backdrop-blur`}
    >
      <p>{quote}</p>
      <div className="mt-5 flex flex-row">
        <img className="size-16 rounded-full" alt={author} src={profileImg} />
        <div className="ml-3 flex flex-col">
          <h3 className="mt-0 text-lg font-bold">{author}</h3>
          <h3 className="text-md mt-3">{designation}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
