export const handleSetCustomResolution = (
    width: string,
    height: string,
    onAspectRatioChange: (value: string) => void,
  ) => {
    onAspectRatioChange("Custom");
    return { width, height };
  };