type Props = {
  children: React.ReactNode;
  closeOnClick?: boolean;
  onClose: () => void;
};

const ModalCard = ({ children, closeOnClick, onClose }: Props) => {
  const handleOuterClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnClick && event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-30 flex flex-col bg-productDark/30 font-display backdrop-blur-md"
      onClick={handleOuterClick}
    >
      <div className="m-auto flex min-w-[650px] max-h-[895px] w-fit flex-col gap-5 overflow-y-auto rounded-2xl bg-productDark px-20 py-10">
        {children}
      </div>
    </div>
  );
};

export default ModalCard;
