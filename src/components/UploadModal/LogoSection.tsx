import FileUpload from "./FileUpload";

type Props = {
  progress: number;
};

const LogoSection = ({ progress }: Props) => (
  <div className="flex flex-col gap-2">
    <label id="logo">Logos</label>
    <FileUpload image name="logo" progress={progress} />
  </div>
);

export default LogoSection;
