import { motion } from "framer-motion";
import logo from "@a/Logo.png";

type Props = {
  title: string;
  links: string[];
  isLogoColumn?: boolean;
};

const FooterColumn = ({ title, links, isLogoColumn = false }: Props) => (
  <div className="flex flex-col">
    {isLogoColumn ? (
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Placard Logo" className="h-8" />
        <h3 className="font-semibold mb-2">{title}</h3>
      </div>
    ) : (
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold mb-2">{title}</h3>
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="hover:underline"
            onClick={(e) => {
              let currentPage = document.getElementById(link.toLowerCase());
              e.preventDefault(); // Stop Page Reloading
              currentPage && currentPage.scrollIntoView({ behavior: "smooth" });
              setSelectedPage(link.toLowerCase());
            }}
          >
            {link}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default FooterColumn;
function setSelectedPage(link: string) {
  throw new Error("Function not implemented.");
}
