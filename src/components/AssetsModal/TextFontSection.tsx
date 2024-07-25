import FontFile from "@/assets/FontFile.svg";

type Props = {
  textFonts: { src: string; name: string }[] | undefined;
};

const TextFontSection = ({ textFonts }: Props) => {
  if (!textFonts || textFonts.length === 0)
    return <p>No text fonts available</p>;

  return (
    <div className="flex flex-col gap-2">
      <label id="textFonts">Text Fonts</label>
      {textFonts.map((font, index) => (
        <div key={index} className="flex flex-row items-center gap-4 p-2">
          <img
            src={FontFile}
            alt={`Text Font ${index + 1}`}
            className="size-9 rounded-lg object-cover"
          />
          <a
            href={font.src}
            target="_blank"
            className="text-sm transition hover:underline"
          >
            {font.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default TextFontSection;
