export interface Resolution {
  value: string;
  label: string;
  isCustom?: boolean;
}

export const aspectRatios: Resolution[] = [
  { value: "16:9", label: "Widescreen" },
  { value: "4:3", label: "Standard" },
  { value: "3:2", label: "Portrait" },
  { value: "1:1", label: "Square" },
  { value: "Custom", label: "Custom", isCustom: true },
];
