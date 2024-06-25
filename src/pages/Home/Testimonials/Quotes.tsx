import QuoteCard from "./QuoteCard";
import quotes_list from "./quotesList";

type Props = {};

// TODO: finish
const Cards = ({}: Props) => {
  return (
    <div className="max-h-[420px] place-content-center overflow-hidden">
      {/* Brick Layout */}
      <div className="relative -left-1/4 flex flex-wrap justify-center gap-4 w-[2500px]">
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
