"use client";
import { Button } from "@/components/ui/button";

export default function LayoutSelector({
  value,
  onChange,
}: {
  value: "1x4" | "2x2";
  onChange: (val: "1x4" | "2x2") => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-semibold">Select Layout</p>
      <div className="flex gap-4">
        <Button
          variant={value === "1x4" ? "default" : "outline"}
          onClick={() => onChange("1x4")}
        >
          1x4
        </Button>
        <Button
          variant={value === "2x2" ? "default" : "outline"}
          onClick={() => onChange("2x2")}
        >
          2x2
        </Button>
      </div>
    </div>
  );
}
