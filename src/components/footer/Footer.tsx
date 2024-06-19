import logo from "@a/Logo.svg";

const FooterColumn = ({
  title,
  links,
  isLogoColumn = false,
}: {
  title: string;
  links: string[];
  isLogoColumn?: boolean;
}) => (
  <div className="flex flex-col">
    {isLogoColumn ? (
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Placard Logo" className="h-8" />
        <h3 className="font-semibold mb-2">{title}</h3>
      </div>
    ) : (
      <>
        <h3 className="font-semibold mb-2">{title}</h3>
        {links.map((link, index) => (
          <a key={index} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </>
    )}
  </div>
);

const NewsletterSubscription = () => (
  <div className="mt-8 flex items-center">
    <h2 className="font-semibold text-lg mr-4">Join our newsletter</h2>{" "}
    <div className="flex flex-grow">
      {" "}
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 pr-4 rounded-l bg-gray-800 text-white flex-grow"
      />
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r">
        Subscribe
      </button>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#131821" }} className="text-white py-10">
      <div className="container mx-auto px-4">
        <div
          style={{
            boxShadow: "0 0 10px silver", // Silver glowing effect using box-shadow
            border: "1px solid silver", // Silver border
            padding: "1rem", // Adjust padding as needed
            marginBottom: "1rem", // Adjust margin as needed
            borderRadius: "5px", // Rounded corners for the border
            backgroundColor: "#120F1A", // Purple background color
          }}
          className="rounded-lg mb-8"
        >
          <div className="flex justify-between">
            <FooterColumn title="Placard" links={[]} isLogoColumn={true} />
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
