import { FileError } from "react-dropzone";
import { FileHeader } from "./FileHeader";

export interface ErrorProps {
  file: File;
  errors: FileError[];
  onDelete: (file: File) => void;
}

export default function UploadError({ file, onDelete, errors }: ErrorProps) {
  return (
    <div className="rounded-xl bg-cardColor p-5 shadow-cardGlowEffect">
      <FileHeader file={file} onDelete={onDelete} />
      {errors.map((error) => (
        <div className="font-body text-sm text-red-500">{error.message}</div>
      ))}
    </div>
  );
}
