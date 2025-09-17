"use client";
import RetakeButton from "@/components/RetakeButton";

export default function PhotoGallery({
  photos,
  onRetake,
  className = "",
}: {
  photos: string[];
  onRetake: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 border rounded-md p-2"
          style={{ width: "200px", height: "auto" }}
        >
          <img
            src={photo}
            alt={`Captured ${index}`}
            className="w-full rounded"
          />
          <RetakeButton onClick={() => onRetake(index)} />
        </div>
      ))}
    </div>
  );
}
