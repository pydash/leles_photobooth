"use client";
import { usePhotoContext } from "@/context/PhotoContext";
import CameraBox from "@/components/CameraBox";
import PhotoGallery from "@/components/PhotoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CapturePage() {
  const DEFAULT_TIMER = 3000;
  const MAX_CAPTURE_COUNT = 4;
  const [timer, setTimer] = useState(DEFAULT_TIMER);
  const [isCounting, setIsCounting] = useState(false);

  const { photos, addPhoto, removePhoto } = usePhotoContext();

  const handleCapture = (photo: string) => {
    addPhoto(photo);
    setIsCounting(false); // stop countdown after capture
  };

  useEffect(() => {
    if (!isCounting || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting, timer]);

  const Timer = () =>
    isCounting ? (
      <div>
        <p>Capturing in: {timer / 1000} seconds</p>
      </div>
    ) : null;

  const startCapture = () => {
    setTimer(DEFAULT_TIMER);
    setIsCounting(true);

    setTimeout(() => {
      const video = document.querySelector("video") as HTMLVideoElement;
      const canvas = document.querySelector("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      if (video && canvas && ctx) {
        ctx.drawImage(video, 0, 0, 400, 300);
        handleCapture(canvas.toDataURL("image/png"));
      }
    }, DEFAULT_TIMER);
  };

  return (
    <div className="flex flex-row justify-center items-start gap-6 p-6">
      <div className="flex flex-col items-center gap-4">
        <CameraBox onCapture={handleCapture} />
        <Timer />
        {photos.length + 1 <= MAX_CAPTURE_COUNT ? (
          <Button onClick={startCapture}>Capture</Button>
        ) : (
          <Button disabled>Capture</Button>
        )}
      </div>

      <div>
        <PhotoGallery
          className="grid grid-cols-2"
          photos={photos}
          onRetake={removePhoto}
        />

        {photos.length > 0 && (
          <Link href="/decor">
            <Button className="mt-6">Continue</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
