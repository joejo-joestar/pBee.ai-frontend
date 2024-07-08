export interface Resolution {
  value: string;
}

export const resolutions: { [key: string]: Resolution[] } = {
  "16:9": [
    { value: "1920x1080" },
    { value: "1600x900" },
    { value: "1366x768" },
  ],
  "4:3": [{ value: "1600x1200" }, { value: "1024x768" }],
  "3:2": [{ value: "3840x2560" }, { value: "2560x1600" }],
  "1:1": [{ value: "1024x1024" }, { value: "2048x2048" }],
};
