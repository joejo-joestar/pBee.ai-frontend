import FileUpload from "./FileUpload";

type Props = {
  progress: number;
};

const ImageSection = ({ progress }: Props) => (
  <div className="flex flex-col gap-2">
    <label id="images">Images</label>
    <FileUpload image name="images" progress={progress} />
  </div>
);

export default ImageSection;
