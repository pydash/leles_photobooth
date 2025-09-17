"use client";
import { Button } from "@/components/ui/button";

export default function RetakeButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="destructive" size="sm" onClick={onClick}>
      Retake
    </Button>
  );
}
