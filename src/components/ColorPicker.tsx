"use client";

export default function ColorPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold">Background Color</p>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-16 h-10 cursor-pointer rounded-md border"
      />
    </div>
  );
}
