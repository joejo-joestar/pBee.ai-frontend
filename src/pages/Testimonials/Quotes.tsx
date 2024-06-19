import QuoteCard from "./QuoteCard";

type Props = {};

// TODO: finish
const Cards = ({}: Props) => {
  return (
    <div className="relative h-[600px]">
      <div className="overflow-hidden h-full">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex transition-transform duration-500 ease-in-out -m-5">
            <div x-ref="slide1" className="flex-shrink-0 h-full w-full p-5">
              <div className="flex mb-8 justify-center">
                <QuoteCard
                  quote={
                    "I can't believe how good this application is. It has made it so easy for me to put out prints and social posts. I owe the team one!"
                  }
                  profile={""}
                  author={"James Fredrich"}
                  designation={"CEO of xyz inc"}
                />
                <QuoteCard
                  quote={
                    "I can't believe how good this application is. It has made it so easy for me to put out prints and social posts. I owe the team one!"
                  }
                  profile={""}
                  author={"James Fredrich"}
                  designation={"CEO of xyz inc"}
                />
                <QuoteCard
                  quote={
                    "I can't believe how good this application is. It has made it so easy for me to put out prints and social posts. I owe the team one!"
                  }
                  profile={""}
                  author={"James Fredrich"}
                  designation={"CEO of xyz inc"}
                />
                <QuoteCard
                  quote={
                    "I can't believe how good this application is. It has made it so easy for me to put out prints and social posts. I owe the team one!"
                  }
                  profile={""}
                  author={"James Fredrich"}
                  designation={"CEO of xyz inc"}
                />
                <QuoteCard
                  quote={
                    "I can't believe how good this application is. It has made it so easy for me to put out prints and social posts. I owe the team one!"
                  }
                  profile={""}
                  author={"James Fredrich"}
                  designation={"CEO of xyz inc"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
