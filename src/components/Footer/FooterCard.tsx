import FooterColumn from "./FooterColumn";

type Props = {};

const FooterCard = ({}: Props) => (
  <div className="bg-CardColor/5 flex justify-between gap-16 rounded-xl border border-solid border-cardColor p-16 shadow-cardGlowEffect">
    <FooterColumn title="pBee.ai" isLogoColumn={true} />
    <div className="flex flex-row justify-evenly gap-16">
      <div className="flex gap-16">
        <FooterColumn
          title="Product"
          // links={["Placeholder"]}
        />
        <FooterColumn
          title="Pricing"
          // links={["Placeholder"]}
        />
        <FooterColumn
          title="Company"
          // links={["Placeholder"]}
        />
        <FooterColumn
          title="Register"
          // links={["Placeholder"]}
        />
      </div>
    </div>
  </div>
);

export default FooterCard;
