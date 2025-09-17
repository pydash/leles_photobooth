"use client";
import { usePhotoContext } from "@/context/PhotoContext";
import CanvasPreview from "@/components/CanvasPreview";
import { Button } from "@/components/ui/button";

export default function DownloadPage() {
  const { photos, layout, color, watermark } = usePhotoContext();

  const downloadImage = (format: "png" | "jpg") => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const link = document.createElement("a");
    link.download = `lele-photobooth.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-bold">Your Photobooth Strip</h2>
      <CanvasPreview
        className="size-[400px_1200px]"
        photos={photos}
        layout={layout}
        color={color}
        watermark={watermark}
      />
      <div className="flex gap-4">
        <Button onClick={() => downloadImage("jpg")}>Download JPG</Button>
        <Button onClick={() => downloadImage("png")}>Download PNG</Button>
      </div>
    </div>
  );
}
