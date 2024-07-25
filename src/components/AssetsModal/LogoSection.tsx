type Props = {
  logos: { src: string; name: string }[] | undefined;
};

const LogoSection = ({ logos }: Props) => {
  if (!logos || logos.length === 0) return <p>No logos available</p>;

  return (
    <div className="flex flex-col gap-2">
      <label id="logos">Logos</label>
      {logos.map((logo, index) => (
        <div key={index} className="flex flex-row items-center gap-4 p-2">
          <img
            src={logo.src}
            alt={`Logo ${index + 1}`}
            className="size-9 rounded-lg object-cover"
          />
          <a
            href={logo.src}
            target="_blank"
            className="text-sm transition hover:underline"
          >
            {logo.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default LogoSection;
