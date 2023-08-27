import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <p className="text-3xl font-bold text-indigo-500">Discord Clone</p>
      <Button
        variant={"ghost"}
        className="bg-indigo-500 text-white text-md font-semibold hover:bg-indigo-600 hover:text-white"
      >
        Join
      </Button>
    </div>
  );
}
