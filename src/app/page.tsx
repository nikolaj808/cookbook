import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex justify-between items-center">
        <h1>Hello, World!</h1>
        <ModeToggle />
      </div>
      <hr className="my-4" />
      <Button>Click me</Button>
    </main>
  );
}
