"use client";
import { Button } from "@/components/ui/button";

export default function WatermarkToggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold">Watermark</p>
      <Button
        variant={value ? "default" : "outline"}
        onClick={() => onChange(!value)}
      >
        {value ? "On" : "Off"}
      </Button>
    </div>
  );
}
