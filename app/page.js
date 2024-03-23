import Image from "next/image";
import Hero from "./HomePage/Hero";
import Experience from "./HomePage/Experience";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
}
