import Image from "next/image";
import Hero from "./HomePage/Hero";
import Experience from "./HomePage/Experience";
import Achivement from "./HomePage/Achivement";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Achivement />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
}
