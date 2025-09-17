"use client";
import { usePhotoContext } from "@/context/PhotoContext";
import LayoutSelector from "@/components/LayoutSelector";
import ColorPicker from "@/components/ColorPicker";
import WatermarkToggle from "@/components/WatermarkToggle";
import { Button } from "@/components/ui/button";
import CanvasPreview from "@/components/CanvasPreview";
import Link from "next/link";

export default function DecorPage() {
  const {
    photos,
    layout,
    setLayout,
    color,
    setColor,
    watermark,
    setWatermark,
  } = usePhotoContext();

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-bold">Decorate Your Photos</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 m-4 rounded">
          <CanvasPreview
            photos={photos}
            layout={layout}
            color={color}
            watermark={watermark}
          />
        </div>
        <div className="bg-gray-100 p-4 m-4 rounded flex flex-col items-center gap-4">
          <LayoutSelector value={layout} onChange={setLayout} />
          <ColorPicker value={color} onChange={setColor} />
          <WatermarkToggle value={watermark} onChange={setWatermark} />
          <Link href="/download">
            <Button className="mt-6">Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
