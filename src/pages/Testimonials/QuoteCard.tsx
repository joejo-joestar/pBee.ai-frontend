  type Props = {
    quote: string;
    profile: string;
    author: string;
    designation: string;
  };
  
  // TODO: finish
  const Card = ({ quote, profile, author, designation }: Props) => {
    return (
      <div
        className={`h-[400px] flex flex-col backdrop-blur shadow-lg p-5 rounded-xl bg-[#5b4ead]/5`}
      >
        <p>{quote}</p>
        <div className="flex flex-row">
          <img className="rounded-full" alt="yes" src={profile} />
          <div className="flex flex-col">
            <h3 className="mt-5 text-lg font-bold">{author}</h3>
            <h3 className="mt-5 text-lg font-bold">{designation}</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  