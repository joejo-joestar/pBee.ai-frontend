import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
} from "@files-ui/react";
import React from "react";

type Props = {
  fileType: string;
  id: string;
};

const BASE_URL = "test";

const DragNDrop = ({ fileType, id }: Props) => {
  const [extFiles, setExtFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incomingFiles: ExtFile[]) => {
    console.log("incoming files", incomingFiles);
    setExtFiles(incomingFiles);
  };
  const onDelete = (id: FileMosaicProps["id"]) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleStart = (filesToUpload: ExtFile[]) => {
    console.log("advanced demo start upload", filesToUpload);
  };
  const handleFinish = (uploadedFiles: ExtFile[]) => {
    console.log("advanced demo finish upload", uploadedFiles);
  };
  const handleAbort = (id: FileMosaicProps["id"]) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      }),
    );
  };
  const handleCancel = (id: FileMosaicProps["id"]) => {
    setExtFiles(
      extFiles.map((ef) => {
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
        value={extFiles}
        accept={`${fileType}`}
        uploadConfig={{
          autoUpload: true,
          url: BASE_URL + "",
          cleanOnUpload: true,
        }}
        footer={false}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
      >
        
        {extFiles.map((file) => (
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
