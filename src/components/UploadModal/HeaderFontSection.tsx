import FileUpload from "./FileUpload";

type Props = {
  progress: number;
};

const HeaderFontSection = ({ progress }: Props) => (
  <div className="flex flex-col gap-2">
    <label id="headerFonts">Header Font</label>
    <FileUpload font name="headerFonts" progress={progress} />
  </div>
);

export default HeaderFontSection;
