"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type PhotoContextType = {
  photos: string[];
  addPhoto: (photo: string) => void;
  removePhoto: (index: number) => void;
  clearPhotos: () => void;
  layout: "1x4" | "2x2";
  setLayout: (val: "1x4" | "2x2") => void;
  color: string;
  setColor: (val: string) => void;
  watermark: boolean;
  setWatermark: (val: boolean) => void;
};

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export function PhotoProvider({ children }: { children: ReactNode }) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [layout, setLayout] = useState<"1x4" | "2x2">("1x4");
  const [color, setColor] = useState<string>("#ffffff");
  const [watermark, setWatermark] = useState<boolean>(true);

  const addPhoto = (photo: string) => setPhotos([...photos, photo]);
  const removePhoto = (index: number) => {
    const updated = [...photos];
    updated.splice(index, 1);
    setPhotos(updated);
  };
  const clearPhotos = () => setPhotos([]);

  return (
    <PhotoContext.Provider
      value={{
        photos,
        addPhoto,
        removePhoto,
        clearPhotos,
        layout,
        setLayout,
        color,
        setColor,
        watermark,
        setWatermark,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
}

export function usePhotoContext() {
  const ctx = useContext(PhotoContext);
  if (!ctx)
    throw new Error("usePhotoContext must be used inside PhotoProvider");
  return ctx;
}
