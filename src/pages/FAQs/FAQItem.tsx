import { AnimatePresence, motion } from "framer-motion";

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  isActive: boolean;
  toggleFAQ: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  faq,
  index,
  isActive,
  toggleFAQ,
}) => {
  return (
    <div className={`flex w-auto select-none flex-col`}>
      {/* Divider */}
      <div className="my-10 h-0 w-auto border-[1px] border-solid border-bgDark50/70" />
      {/* Question */}
      <div
        className="p-25 my-3 flex flex-row justify-between text-3xl font-medium"
        onClick={() => toggleFAQ(index)}
      >
        {faq.question}
        {/* Open / Close Icon */}
        <span className="cursor-pointer">{isActive ? "-" : "+"}</span>
      </div>
      {/* Accordion Effect */}
      <AnimatePresence initial={false}>
        {isActive && (
          // Answer
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-25 text-2xl"
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
