import logo from "@/assets/Logo44.svg";

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
        <h3 className="mb-2 font-semibold">{title}</h3>
      </div>
    ) : (
      <div className="flex flex-col gap-5">
        <h3 className="mb-2 font-semibold">{title}</h3>
        {links.map((link, index) => (
          <a key={index} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default FooterColumn;
