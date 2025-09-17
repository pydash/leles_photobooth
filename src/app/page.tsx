import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Lele's Photobooth</h1>
      <p className="text-lg">Capture and decorate your fun moments!</p>
      <Link href="/capture">
        <Button>Start Photobooth</Button>
      </Link>
    </div>
  );
}
