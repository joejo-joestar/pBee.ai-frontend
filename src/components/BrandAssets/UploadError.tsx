import React from "react";
import { FileError } from "react-dropzone";
import { FileHeader } from "./FileHeader";

export interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}

export function UploadError({ file, onDelete, errors }: UploadErrorProps) {
  return (
    <React.Fragment>
      <FileHeader file={file} onDelete={onDelete} />
      {/* <ErrorLinearProgress variant="determinate" value={100} /> */}
      {errors.map((error) => (
        <div key={error.code}>
          <h3>{error.message}</h3>
        </div>
      ))}
    </React.Fragment>
  );
}
