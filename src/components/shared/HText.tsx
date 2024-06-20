type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className="text-5xl text-center font-bold">{children}</h1>;
};

export default HText;
