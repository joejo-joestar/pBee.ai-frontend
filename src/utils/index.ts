export const getInitialsOfPerson = (
  ...arg: Array<string | undefined>
): string => {
  return (
    arg
      .join(" ")
      .split(" ")
      .map((f) => f.at(0)?.toLocaleUpperCase())
      .join("") || "JD"
  );
};

export const getTimeStringFromSecond = (second: number): string => {
  if (typeof second !== "number" || !second || !Number.isFinite(second))
    return "0:00";

  const MIN = 60; /// 1min=60sec
  const minutes = second < MIN ? 0 : Math.floor(second / 60);

  const secondFromMinutes = minutes * 60;
  const leftSecond = Math.abs(second - secondFromMinutes);

  return `${minutes}:${leftSecond > 9 ? leftSecond : "0" + leftSecond}`;
};

const PICTURE_EXT = ["png", "gif", "jpeg", "jpg", "svg"];

export const isImage = (ext: string) => PICTURE_EXT.includes(ext);

export const parseUrlToFileName = (
  url: string
): { fileName: string; ext: string } => {
  if (typeof url !== "string") return url;
  const fileName = url.split("/").at(-1) || "";
  const ext = fileName?.split(".").at(-1) || "";
  return {
    fileName,
    ext,
  };
};
