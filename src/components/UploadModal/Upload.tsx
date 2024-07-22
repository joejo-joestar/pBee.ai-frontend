import { FileHeader } from "./FileHeader";
import { ProgressBar } from "./ProgressBar";

export interface UploadProps {
  file: File;
  index: number;
  progress: number; // Progress is now passed as a prop
  onDelete: (file: File) => void;
}

function Upload({ file, index, progress, onDelete }: UploadProps) {
  return (
    <div
      key={index}
      className="rounded-xl bg-cardColor p-5 shadow-cardGlowEffect"
    >
      <FileHeader file={file} onDelete={onDelete} />
      <ProgressBar progress={progress} />
    </div>
  );
}

export default Upload;
