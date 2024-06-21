import { useState } from "react";
import FAQItem from "./FAQItem";
import HText from "@c/shared/HText";
import { faqs } from "./faqs";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="faqs"
      className="h-display gap-16 bg-gradient-to-b from-[#1c2336] to-[#12131c] py-10"
    >
      {/* Header */}
      <HText>Frequently Asked Questions</HText>
      {/* Content */}
      <div className="m-auto mt-12 flex w-2/3 flex-col p-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            faq={faq}
            isActive={activeIndex === index}
            toggleFAQ={toggleFAQ}
          />
        ))}
        <div className="my-10 h-0 w-auto border-[1px] border-solid border-bgDark50/70" />
      </div>
    </section>
  );
};

export default FAQs;
