import { useCallback, useEffect, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import Upload from "./Upload";
import UploadError from "./UploadError";
import { useField } from "formik";

type Props = {
  name: string;
  image?: boolean;
  font?: boolean;
  progress: number;
};

interface UploadableFile {
  file: File;
  errors?: FileError[];
}

const ImageUpload = ({ name, image, font, progress }: Props) => {
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const [, , { setValue, setError }] = useField(name);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const acceptedFileObjects = acceptedFiles.map((file) => ({
        file,
        errors: [],
      }));
      const mappedRejections = rejectedFiles.map((rej) => ({
        file: rej.file,
        errors: rej.errors,
      }));
      setFiles((currentFiles) => [
        ...currentFiles,
        ...acceptedFileObjects,
        ...mappedRejections,
      ]);
    },
    [],
  );

  const accept: { [key: string]: string[] } = {};
  if (image) {
    accept["image/png"] = [".png"];
    accept["image/svg+xml"] = [".svg"];
  }
  if (font) {
    accept["font/ttf"] = [".ttf"];
    accept["font/otf"] = [".otf"];
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  const onDelete = (file: File) => {
    setFiles((currentFiles) => currentFiles.filter((f) => f.file !== file));
  };

  useEffect(() => {
    const validFiles = files.filter((f) => !f.errors?.length);
    setValue(validFiles.map((f) => f.file));
    setError(
      files.some((f) => f.errors?.length) ? "Invalid files found" : undefined,
    );
  }, [files, setValue, setError]);

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
          <div className="flex flex-col p-1" key={index}>
            {fileWrapper.errors && fileWrapper.errors.length > 0 ? (
              <UploadError
                index={index}
                file={fileWrapper.file}
                onDelete={onDelete}
                errors={fileWrapper.errors}
              />
            ) : (
              <Upload
                index={index}
                file={fileWrapper.file}
                onDelete={onDelete}
                progress={progress}
              />
            )}
          </div>
        ))}
        {files.some((f) => f.errors?.length) && (
          <p className="p-1 text-sm text-red-500">
            Invalid Files Will Not be Uploaded!
          </p>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
