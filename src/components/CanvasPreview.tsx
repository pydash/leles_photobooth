"use client";
import { useEffect, useRef } from "react";

export default function CanvasPreview({
  photos,
  layout,
  color,
  watermark,
  className = "",
}: {
  photos: string[];
  layout: "1x4" | "2x2";
  color: string;
  watermark: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const spacing = 10;
    const extraBottomSpace = 60; // ✅ add more spacing at the bottom

    const width = layout === "1x4" ? 400 : 500;
    const height =
      layout === "1x4" ? 1200 + extraBottomSpace : 400 + extraBottomSpace;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    photos.forEach((photo, i) => {
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        if (layout === "1x4") {
          ctx.drawImage(
            img,
            spacing,
            i * (1200 / 4) + spacing,
            width - spacing * 2,
            1200 / 4 - spacing * 2
          );
        } else if (layout === "2x2") {
          const row = Math.floor(i / 2);
          const col = i % 2;
          ctx.drawImage(
            img,
            col * (width / 2) + spacing,
            row * (400 / 2) + spacing,
            width / 2 - spacing * 2,
            400 / 2 - spacing * 2
          );
        }
      };
    });

    // watermark at bottom
    if (watermark) {
      ctx.fillStyle = "black";
      ctx.font = "bold 24px Inter";
      ctx.textAlign = "center";
      ctx.fillText("Lele's Photobooth", width / 2, height - 25);
    }
  }, [photos, layout, color, watermark]);

  return (
    <canvas
      ref={canvasRef}
      className={`border rounded-md ${className}`}
      style={
        layout === "1x4"
          ? { width: "200px", height: "auto" }
          : { width: "auto", height: "400px" }
      } // ✅ scaled down display size
    />
  );
}
