export interface FileHeaderProps {
  file: File;
  onDelete: (file: File) => void;
}

export function FileHeader({ file, onDelete }: FileHeaderProps) {
  return (
    <div className="container items-center justify-between">
      <div>{file.name}</div>
      <div>
        <button onClick={() => onDelete(file)}>Delete</button>
      </div>
    </div>
  );
}
