import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
       <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
  <div className="relative mb-6 sm:mb-0">
    <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
      <img
        src={HeroImg}
        className="rounded-[15px] shadow block"
        alt="payments illustration"
        width={1207}
        height={929}
      />
    </div>
  </div>

  <div className="relative flex flex-col justify-center space-y-4 pt-8 text-white text-justify">
    <p>
      I'm MD. Sumsul Arifin, a passionate and self-driven Full Stack Developer with a strong foundation in the MERN stack, TypeScript, and Java. I specialize in building secure, scalable, and responsive web applications, and I'm dedicated to simplifying development workflows.
    </p>
    <p>
      My focus is on making web development faster, easier, and accessible to all developers.
    </p>
  </div>
</div>

        </div>
      </section>
    </>
  );
}
