import Navbar from "@/components/Navbar";

export default function HoursLocation() {
  return (
    <>
      <Navbar forceDark/>

      <section className="min-h-screen bg-[#f4f1ea] text-black flex flex-col items-center justify-center px-6 py-24 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-12">
          HOURS & LOCATION
        </h1>

        <div className="flex flex-col gap-6 mb-12">

          <a
            href="https://www.google.com/maps"
            target="_blank"
            className="bg-black text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-black transition duration-300"
          >
            Get Direction
          </a>

          <a
            href="tel:+14694567890"
            className="bg-black text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#d4af37] hover:text-black transition duration-300"
          >
            Call Us
          </a>

        </div>

        <p className="text-lg mb-6">
          2361 E University Dr, STE 90 , Prosper, TX 75078
        </p>

        <p className="text-lg mb-4">
          (469) 919-3737    
        </p>

        <p className="text-lg font-semibold">
          General Contact:
        </p>
        <p className="mb-6">
          jataratx@gmail.com
        </p>

        <p className="text-lg font-semibold">
          Private Party Bookings & Catering:
        </p>
        <p>
          jataratx@gmail.com
        </p>
        {/* Divider */}
    <div className="w-16 h-[2px] bg-[#e8c067] mx-auto my-8"></div>

    {/* Restaurant Hours */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Restaurant Hours</h3>

      <p className="font-semibold">Monday – Thursday:</p>
      <p>12:00 PM – 3:00 PM / 5:00 PM – 10:00 PM</p>

      <p className="font-semibold mt-4">Friday - Saturday:</p>
      <p>12:00 PM – 3:00 PM / 5:00 PM – 11:30 PM</p>

      <p className="font-semibold mt-4">Sunday:</p>
      <p>12:00 PM – 3:00 PM / 5:00 PM – 9:30 PM</p>
    </div>

      </section>
      
    </>
  );
}
