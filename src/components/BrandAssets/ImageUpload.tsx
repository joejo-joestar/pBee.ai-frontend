import { useCallback, useEffect, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import Upload from "./Upload";
import { useField } from "formik";
import UploadError from "./UploadError";

type Props = {
  name: string;
};

interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

const ImageUpload = ({ name }: Props) => {
  const [_, __, helpers] = useField(name);
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "images/png": [".png"],
      "images/svg+xml": [".svg"],
    },
  });

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  useEffect(() => {
    helpers.setValue(files);
  }, [files]);

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      }),
    );
  }

  return (
    <>
      <div
        className="w-full items-center justify-center rounded-xl border-2 border-dashed border-cardColor/75 text-center font-body"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p className="p-12">
          Drag & drop some files here, or click to select files
        </p>
      </div>
      <div>
        {files.map((fileWrapper, index) => (
          <div className="flex flex-col p-1">
            {fileWrapper.errors.length ? (
              <UploadError
                file={fileWrapper.file}
                onDelete={onDelete}
                errors={fileWrapper.errors}
              />
            ) : (
              <Upload
                key={index}
                file={fileWrapper.file}
                onDelete={onDelete}
                onUpload={onUpload}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUpload;
