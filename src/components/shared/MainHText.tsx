type Props = {
  children: React.ReactNode;
};

const MainHeaderText = ({ children }: Props) => {
  return (
    <h1 className="font-display select-none text-center text-7xl font-bold">
      {children}
    </h1>
  );
};

export default MainHeaderText;
