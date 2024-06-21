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
      className={`max-w-[400px] h-[200px] flex flex-col backdrop-blur shadow-lg p-5 rounded-xl bg-[#5b4ead]/5`}
      >
        <p>{quote}</p>
        <div className="flex flex-row">
          <img className="size-16 rounded-full" alt={author} src={profileImg} />
          <div className="flex flex-col">
            <h3 className="mt-5 text-lg font-bold">{author}</h3>
            <h3 className="mt-5 text-md">{designation}</h3>
          </div>
        </div>
      </div>
    );
  };

  export default Card;
