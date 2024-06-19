import React, { useState } from "react";
import "./FAQ.css";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does this product work?",
      answer:
        "It’s built using powerful data and backend tools. Using that, we were able to create a substantial product.",
    },
    {
      question: "How does this product work?",
      answer:
        "It’s built using powerful data and backend tools. Using that, we were able to create a substantial product.",
    },
    {
      question: "How does this product work?",
      answer:
        "It’s built using powerful data and backend tools. Using that, we were able to create a substantial product.",
    },
    {
      question: "How does this product work?",
      answer:
        "It’s built using powerful data and backend tools. Using that, we were able to create a substantial product.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          index={index}
          faq={faq}
          isActive={activeIndex === index}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
};

export default FAQ;
