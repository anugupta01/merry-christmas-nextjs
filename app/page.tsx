import SnowCanvas from "@/components/SnowCanvas";
import MerryMessage from "@/components/MerryMessage";

export default function Home() {
  return (
    <main
      className="fixed inset-0 h-full w-full bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/winter-bg.png')", backgroundSize: "100% 100%" }}
    >
      <SnowCanvas />

      <MerryMessage />

      <div className="fixed bottom-0 left-0 w-full text-center font-sans text-sm text-white">
        <p>
          Created with <span className="text-[#f44250]">&#10084;</span> by{" "}
          <a
            href="https://www.linkedin.com/in/anu-gupta-47b546bb/"
            className="text-[#307cff]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anu Gupta
          </a>
        </p>
      </div>
    </main>
  );
}
