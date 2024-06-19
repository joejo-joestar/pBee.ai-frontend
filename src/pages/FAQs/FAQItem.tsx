import React from "react";
import "./FAQ.css";

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
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faq-question" onClick={() => toggleFAQ(index)}>
        {faq.question}
        <span>{isActive ? "−" : "+"}</span>
      </div>
      {isActive && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
