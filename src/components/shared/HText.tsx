type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="z-10 select-none text-center text-5xl font-bold">
      {children}
    </h1>
  );
};

export default HText;
