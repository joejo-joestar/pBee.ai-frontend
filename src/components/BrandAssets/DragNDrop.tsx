import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
} from "@files-ui/react";
import React from "react";

type Props = {
  allowedTypes: string;
  id: string;
};

const BASE_URL = "";

const DragNDrop = ({ allowedTypes: fileType, id }: Props) => {
  const [files, setFiles] = React.useState<ExtFile[]>([]);

  const updateFiles = (incomingFiles: ExtFile[]) => {
    console.log("incoming files", incomingFiles);
    setFiles(incomingFiles);
  };

  const onDelete = (id: FileMosaicProps["id"]) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const handleStart = (filesToUpload: ExtFile[]) => {
    console.log("Start Upload", filesToUpload);
  };

  const handleFinish = (uploadedFiles: ExtFile[]) => {
    console.log("Upload Finished", uploadedFiles);
  };

  const handleAbort = (id: FileMosaicProps["id"]) => {
    setFiles(
      files.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      }),
    );
  };
  const handleCancel = (id: FileMosaicProps["id"]) => {
    setFiles(
      files.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      }),
    );
  };

  return (
    <div className="flex items-center justify-center">
      <Dropzone
        className="flex h-48 max-h-48 min-w-[512px] max-w-[512px] flex-none overflow-y-auto p-2"
        id={`${id}`}
        onChange={updateFiles}
        value={files}
        accept={`${fileType}`}
        uploadConfig={{
          autoUpload: true,
          url: BASE_URL,
          cleanOnUpload: true,
        }}
        footer={false}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
      >
        {files.map((file: ExtFile) => (
          <FileMosaic
            // style={{ background: "white" }}
            {...file}
            key={file.id}
            onDelete={onDelete}
            onAbort={handleAbort}
            onCancel={handleCancel}
            resultOnTooltip
            alwaysActive
            preview
          />
        ))}
      </Dropzone>
    </div>
  );
};

export default DragNDrop;
