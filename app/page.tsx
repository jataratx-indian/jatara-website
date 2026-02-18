import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        ></div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">

          {/* Welcome */}
          <h2 className="text-5xl md:text-7xl font-light italic text-[#e8c067] mb-4">
            Welcome to
          </h2>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-[#f5d17a]">
            JATARA
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-lg md:text-xl tracking-wide text-gray-200">
            Experience authentic Indian cuisine in the heart of Prosper, Texas.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center gap-6 mt-8">
            <div className="w-32 h-[1px] bg-[#e8c067]"></div>
            <div className="w-3 h-3 bg-[#e8c067] rotate-45"></div>
            <div className="w-32 h-[1px] bg-[#e8c067]"></div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#e8c067] text-black px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#d4af37] transition duration-300">
            Menu
          </button>

        </div>
      </section>

      {/* 3 CARD SECTION */}
      <section className="bg-black py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* DINNER */}
          <div className="relative group h-[500px] overflow-hidden">
            <img
              src="/images/dinner.jpg"
              alt="Dinner"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-3xl font-bold tracking-widest">DINNER</h2>
              <button className="mt-6 bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#e8c067] hover:text-black transition">
                See Menu
              </button>
            </div>
          </div>

          {/* CATERING */}
          <div className="relative group h-[500px] overflow-hidden">
            <img
              src="/images/drinks.jpg"
              alt="Catering"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-3xl font-bold tracking-widest">CATERING</h2>
              <button className="mt-6 bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#e8c067] hover:text-black transition">
                See Menu
              </button>
            </div>
          </div>

          {/* PRIVATE EVENTS */}
          <div className="relative group h-[500px] overflow-hidden">
            <img
              src="/images/private.jpg"
              alt="Private Events"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-3xl font-bold tracking-widest">
                PRIVATE EVENTS
              </h2>
              <button className="mt-6 bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#e8c067] hover:text-black transition">
                Book a Party
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
