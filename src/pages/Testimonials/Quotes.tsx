import QuoteCard from "./QuoteCard";
import quotes_list from "./quotes_list";

type Props = {};

// TODO: finish
const Cards = ({}: Props) => {
  return (
    <div className="content-center overflow-hidden">
      <div className="absolute -left-1/4 mb-8 flex w-[150%] flex-wrap justify-center gap-4">
        {/* QuoteCards */}
        {quotes_list.map((value) => (
          <QuoteCard
            quote={value.quote}
            profileImg={value.profileImg}
            author={value.author}
            designation={value.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
