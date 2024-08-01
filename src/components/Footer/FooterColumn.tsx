import logo from "@/assets/Logo44.svg";

type Props = {
  title: string;
  links?: string[];
  isLogoColumn?: boolean;
};

const FooterColumn = ({ title, links, isLogoColumn = false }: Props) => (
  <div className="flex flex-col">
    {isLogoColumn ? (
      <div className="font-display flex items-center space-x-2">
        <img src={logo} alt="Placard Logo" className="h-8" />
        <a href="#" className="font-display mb-2 font-semibold">{title}</a>
      </div>
    ) : (
      <div className="flex flex-col gap-5">
        <a className="font-display mb-2 font-semibold">{title}</a>
        {links?.map((link, index) => (
          <a key={index} href="#" className="font-body hover:underline">
            {link}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default FooterColumn;
