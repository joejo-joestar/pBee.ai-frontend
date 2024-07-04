import React, { useState } from "react";

interface ImageUploadProps {
  onImagesSelected: (files: File[]) => void;
}

const ImageUploadModal: React.FC<ImageUploadProps> = ({ onImagesSelected }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(Array.from(files)); // Convert FileList to an array
    }
  };

  const handleImageSelection = () => {
    if (selectedFiles.length > 0) {
      onImagesSelected(selectedFiles); // Pass selected files to parent
    } else {
      // Handle case of no files selected (optional)
      console.warn("No images selected!");
    }
  };

  return (
    <div className="modal-content">
      <h2>Select Images</h2>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      <p>
        You can select multiple images. Only image files (jpg, jpeg, png) are
        allowed.
      </p>
      <div className="modal-actions">
        <button onClick={handleImageSelection}>Select</button>
      </div>
    </div>
  );
};

export default ImageUploadModal;
