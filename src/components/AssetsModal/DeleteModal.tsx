// ConfirmDeleteModal.tsx
import ModalCard from "@/components/shared/ModalCard";

type Props = {
  isVisible: boolean;
  onClose(): void;
  onConfirm(): void;
};

const ConfirmDeleteModal = ({ isVisible, onClose, onConfirm }: Props) => {
  if (!isVisible) return null;

  return (
    <ModalCard onClose={onClose} closeOnClick>
      <h2 className="font-display font-bold text-red-500">Confirm Deletion</h2>

      {/* Separator */}
      <div className="h-0 w-auto border border-solid border-cardColor" />

      <p className="text-red-400">
        Are you sure you want to delete this collection? This action cannot be
        undone.
      </p>

      {/* Buttons */}
      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={onClose}
          className={`w-36 rounded-xl border-2 border-cardColor p-3.5 transition hover:border-cardColor/80`}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className={`w-36 rounded-xl border-2 border-cardColor bg-red-500 p-3.5 text-neutral-200 transition hover:border-cardColor/80 hover:bg-red-600`}
        >
          Confirm
        </button>
      </div>
    </ModalCard>
  );
};

export default ConfirmDeleteModal;
