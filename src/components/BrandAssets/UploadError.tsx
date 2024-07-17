import { FileError } from "react-dropzone";
import { FileHeader } from "./FileHeader";
import { ProgressBar } from "./ProgressBar";

export interface ErrorProps {
  file: File;
  index: number;
  errors: FileError[];
  onDelete: (file: File) => void;
}

export default function UploadError({
  file,
  index,
  onDelete,
  errors,
}: ErrorProps) {
  return (
    <div className="rounded-xl bg-cardColor p-5 shadow-cardGlowEffect">
      <FileHeader file={file} onDelete={onDelete} />
      <ProgressBar progress={100} isError />
      {errors.map((error) => (
        <div key={index} className="font-body text-sm text-red-500">
          {error.message}
        </div>
      ))}
    </div>
  );
}
