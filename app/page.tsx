import CanvasWrapper from "@/components/CanvasWrapper";
import Overlay from "@/components/ui/Overlay";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-starlight-white">
      <CanvasWrapper />
      <Overlay />
    </main>
  );
}
