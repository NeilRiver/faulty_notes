import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <section className="text-white p-10 bg-cyan-500 min-h-[470px]">
        <header className="flex flex-col items-center">
          <h1 className="text-5xl">Travel Note</h1>
          <p className="text-xl p-5">
            Store your travel experience! Open new horizons!
          </p>
          <Button className="uppercase text-sm">Get Started</Button>
        </header>
      </section>
    </div>
  );
}
