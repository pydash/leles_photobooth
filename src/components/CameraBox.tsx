"use client";
import { useRef, useEffect } from "react";

export default function CameraBox({
  onCapture,
}: {
  onCapture: (photo: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) videoRef.current.srcObject = stream;
    });
  }, []);

  const capture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, 400, 300);
      onCapture(canvasRef.current.toDataURL("image/png"));
    }
  };

  return (
    <div className="flex flex-col px-8 pt-8 pb-16 bg-gray-100 rounded-md items-center">
      <video
        ref={videoRef}
        autoPlay
        className="rounded-md border w-[400px] h-[300px]"
      />
      <canvas ref={canvasRef} width={400} height={300} className="hidden" />
    </div>
  );
}
