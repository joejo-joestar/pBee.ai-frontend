import { useEffect, useState } from "react";
import { FileHeader } from "./FileHeader";
import { ProgressBar } from "./ProgressBar";

export interface UploadProps {
  file: File;
  index: number;
  onDelete: (file: File) => void;
}

function Upload({ file, index, onDelete }: UploadProps) {
  const [progress, setProgress] = useState(0); // Simulate progress for visual feedback

  useEffect(() => {
    // Simulate upload progress for a few seconds (optional for visual feedback)
    const simulateUpload = async () => {
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };

    simulateUpload(); // Call the simulated upload
  }, []);

  return (
    <div
      key={index}
      className="rounded-xl bg-cardColor p-5 shadow-cardGlowEffect"
    >
      <FileHeader file={file} onDelete={onDelete} />
      {/* Progress: {progress}% (optional for visual feedback) */}
      <ProgressBar progress={progress} />
    </div>
  );
}

export default Upload;

// Remove uploadFile function as it's not needed
