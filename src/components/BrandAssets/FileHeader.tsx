import { RemoveIcon } from "./RemoveIcon";

export interface HeaderProps {
  file: File;
  onDelete: (file: File) => void;
}

export function FileHeader({ file, onDelete }: HeaderProps) {
  return (
    <div className="flex flex-row justify-between">
      <div>{file.name}</div>
      <div>
        <button type="button" onClick={() => onDelete(file)}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}
