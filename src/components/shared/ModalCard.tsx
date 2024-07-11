type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalCard = ({ children, onClose }: Props) => {
  const handleOuterClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div
      className="font-display fixed inset-0 z-30 flex flex-col bg-productDark/30 backdrop-blur-md"
      onClick={handleOuterClick}
    >
      <div className="m-auto flex max-h-[896px] w-fit flex-col gap-5 overflow-y-auto rounded-2xl bg-productDark px-20 py-10">
        {children}
      </div>
    </div>
  );
};

export default ModalCard;
