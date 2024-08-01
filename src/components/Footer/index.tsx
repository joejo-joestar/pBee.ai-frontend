import FooterCard from "./FooterCard";
// import NewsletterSubscription from "./NewsletterSubscription";

const Footer = () => {
  return (
    <footer className="select-none bg-dark py-10 text-white">
      <div className="container mx-auto px-4">
        <FooterCard />
        {/* <NewsletterSubscription /> */}
        {/* Divider Line */}
        <div className="mt-10 h-0 w-auto border border-solid border-cardColor" />
        <div className="mt-10 flex justify-between text-sm text-gray-400">
          <div className="flex space-x-4">
            <a>Privacy Policy</a>
            <a>Terms and Conditions</a>
          </div>
          <p>&copy; 2024 Placard AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
