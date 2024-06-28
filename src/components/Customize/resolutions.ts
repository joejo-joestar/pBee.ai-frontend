export interface Resolution {
  value: string;
  label: string;
}

export const resolutions: { [key: string]: Resolution[] } = {
  "16:9": [
    { value: "1920x1080", label: "Full HD" },
    { value: "1600x900", label: "HD" },
    { value: "1366x768", label: "HD Ready" },
  ],
  "4:3": [
    { value: "1600x1200", label: "SXGA" },
    { value: "1024x768", label: "XGA" },
  ],
  "3:2": [
    { value: "3840x2560", label: "4K" },
    { value: "2560x1600", label: "WQHD" },
  ],
  "1:1": [
    { value: "1024x1024", label: "Square (1024x1024)" },
    { value: "2048x2048", label: "Square (2048x2048)" },
  ],
};
