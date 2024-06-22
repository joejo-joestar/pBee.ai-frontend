import FooterColumn from "./FooterColumn";

type Props = {};

const FooterCard = ({}: Props) => (
  <div className="border-cardColor shadow-cardGlowEffect bg-CardColor/5 flex justify-between gap-16 rounded-xl border border-solid p-16">
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
);

export default FooterCard;
