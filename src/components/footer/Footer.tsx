import logo from "@a/Logo.svg";
import FooterColumn from "./FooterColumn";
import NewsletterSubscription from "./NewsletterSubscription";

const Footer = () => {
  return (
    <footer className="bg-[#11141f] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-16 bg-indigo-700/opacity-5 border border-indigo-700 shadow-inner border-solid bg-[#5b4ead]/5 backdrop-blur-lg rounded-xl p-16">
          <div className="flex flex-row justify-evenly gap-16">
            <FooterColumn title="Placard" links={[]} isLogoColumn={true} />
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
        <div className="mt-8 flex justify-between text-gray-400 text-sm">
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
