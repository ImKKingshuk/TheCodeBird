import Home1 from "./HomeUI/Home1";
import Home2 from "./HomeUI/Home2";
export default function Home() {
  return (
    <div className="pt-[4rem] md:pt-[8rem] mx-auto px-2 space-y-[4rem]">
      <Home1 />
      <Home2 />
    </div>
  );
}
