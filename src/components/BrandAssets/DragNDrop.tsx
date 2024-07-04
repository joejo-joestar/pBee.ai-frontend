import {
  Dropzone,
  ExtFile,
  FileMosaic,
  FileMosaicProps,
  // FullScreen,
  // ImagePreview,
  // VideoPreview,
} from "@files-ui/react";
import React from "react";

type Props = {
  id: string;
};

const DragNDrop = ({ id }: Props) => {
  const [extFiles, setExtFiles] = React.useState<ExtFile[]>([]);
  // const [imageSrc, setImageSrc] = React.useState<File | string | undefined>(
  //   undefined,
  // );
  // const [videoSrc, setVideoSrc] = React.useState<File | string | undefined>(
  //   undefined,
  // );
  const updateFiles = (incomingFiles: ExtFile[]) => {
    console.log("incomming files", incomingFiles);
    setExtFiles(incomingFiles);
  };
  const onDelete = (id: FileMosaicProps["id"]) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  // const handleSee = (imageSource: File | string | undefined) => {
  //   setImageSrc(imageSource);
  // };
  // const handleWatch = (videoSource: File | string | undefined) => {
  //   setVideoSrc(videoSource);
  // };
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
    <>
      <Dropzone
        onChange={updateFiles}
        minHeight="195px"
        value={extFiles}
        maxFiles={3}
        // FmaxFileSize={2998000 * 20}
        label="Drag'n drop files here or click to browse"
        // accept=".png,image/*, video/*"
        // uploadConfig={{
        //   // autoUpload: true
        //   url: BASE_URL + "/file/28048465460",
        //   cleanOnUpload: true,
        // }}
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
        fakeUpload
        actionButtons={{
          position: "after",
          abortButton: {},
          deleteButton: {},
          uploadButton: {},
        }}
      >
        {extFiles.map((file) => (
          <FileMosaic
            {...file}
            key={file.id}
            onDelete={onDelete}
            // onSee={handleSee}
            // onWatch={handleWatch}
            onAbort={handleAbort}
            onCancel={handleCancel}
            resultOnTooltip
            alwaysActive
            preview
            info
          />
        ))}
      </Dropzone>
      <div className="flex w-full items-center justify-center">
        <label className="flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-700 hover:bg-gray-800">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <input id={`${id}`} type="file" className="hidden" multiple />
        </label>
      </div>
    </>
  );
};

export default DragNDrop;
