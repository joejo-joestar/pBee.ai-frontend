import FooterColumn from "./FooterColumn";
import NewsletterSubscription from "./NewsletterSubscription";

const Footer = () => {
  return (
    <footer className="bg-[#11141f] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-indigo-700/opacity-5 flex justify-between gap-16 rounded-xl border border-solid border-indigo-700 bg-[#5b4ead]/5 p-16 shadow-inner backdrop-blur-lg">
          <FooterColumn title="Placard" links={[]} isLogoColumn={true} />
          <div className="flex flex-row justify-evenly gap-16">
            <div className="flex gap-16">
              <FooterColumn
                title="Placeholder"
                links={["Placeholder", "Placeholder", "Placeholder"]}
              />
              <FooterColumn
                title="Placeholder"
                links={["Placeholder", "Placeholder", "Placeholder"]}
              />
              <FooterColumn
                title="Placeholder"
                links={["Placeholder", "Placeholder", "Placeholder"]}
              />
            </div>
          </div>
        </div>
        <NewsletterSubscription />
        {/* Divider Line */}
        <div className="mt-10 h-0 w-auto border-[1px] border-solid border-bgDark50/70" />
        <div className="mt-10 flex justify-between text-sm text-gray-400">
          <div className="flex space-x-4">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms and Conditions</a>
          </div>
          <p>&copy; 2024 Placard AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
