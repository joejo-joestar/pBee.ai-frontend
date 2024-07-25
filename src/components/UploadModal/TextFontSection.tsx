import FileUpload from "./FileUpload";

type Props = {
  progress: number;
};

const TextFontSection = ({ progress }: Props) => (
  <div className="flex flex-col gap-2">
    <label id="textFonts">Text Font</label>
    <FileUpload font name="textFonts" progress={progress} />
  </div>
);

export default TextFontSection;
