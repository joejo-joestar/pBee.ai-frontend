export interface Resolution {
  value: string;
  isCustom?: boolean;
}

export const aspectRatios: Resolution[] = [
  { value: "16:9" },
  { value: "4:3" },
  { value: "3:2" },
  { value: "1:1" },
  { value: "Custom", isCustom: true },
];
