type Props = {
  images: { src: string; name: string }[] | undefined;
};

const ImageSection = ({ images }: Props) => {
  if (!images || images.length === 0) return <p>No images available</p>;

  return (
    <div className="flex flex-col gap-2">
      <label id="images">Images</label>
      {images.map((image, index) => (
        <div key={index} className="flex flex-row items-center gap-4 p-2">
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            className="size-9 rounded-lg object-cover"
          />
          <a
            href={image.src}
            target="_blank"
            className="text-sm transition hover:underline"
          >
            {image.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
