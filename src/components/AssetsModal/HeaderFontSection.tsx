import FontFile from "@/assets/FontFile.svg";

type Props = {
  headerFonts: { src: string; name: string }[] | undefined;
};

const HeaderFontSection = ({ headerFonts }: Props) => {
  if (!headerFonts || headerFonts.length === 0)
    return <p>No header fonts available</p>;

  return (
    <div className="flex flex-col gap-2">
      <label id="headerFont">Header Fonts</label>
      {headerFonts.map((font, index) => (
        <div key={index} className="flex flex-row items-center gap-4 p-2">
          <img
            src={FontFile}
            alt={`Header Font ${index + 1}`}
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

export default HeaderFontSection;
