// import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { FileHeader } from "./FileHeader";

export interface UploadProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

function Upload({ file, onDelete, onUpload }: UploadProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
      onUpload(file, url);
    }

    upload();
  }, []);

  return (
    <div className="rounded-xl bg-cardColor p-5 shadow-cardGlowEffect">
      <FileHeader file={file} onDelete={onDelete} />
      Progress: {progress}%
      {/* <LinearProgress variant="determinate" value={progress} /> */}
    </div>
  );
}

// TODO: Must change to fit s3 uploading
function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const URL = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const KEY = "docs_upload_example_us_preset";

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", URL);
    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      //   See how s3 stores image
      //   Tutorial followed used cloudinary, refer -> https://youtu.be/MAw0lQKqjRA?t=1146
      //   res("url where s3 stores image");
      res(resp.secure_url);
    };
    xhr.onerror = (evt: any) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };
    const formData = new FormData();
    formData.append("file", file);
    // TODO: Change
    formData.append("upload_preset", KEY);
    xhr.send(formData);
  });
}
export default Upload;
