"use client";

const DestinationsGrid = () => {
  return (
    <section className="relative z-[20] w-full min-h-screen bg-[#F4F4F1] dark:bg-stone-950 py-16 md:py-24">
      {/* Restored Header Block */}
      <div className="flex flex-col items-center w-full px-6 md:px-12 max-w-7xl mx-auto text-center mb-20 md:mb-32">
        <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-12 text-stone-800 dark:text-stone-100 drop-shadow-md">
        PLACES TO BEGIN
        </p>
        <h2
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 max-w-4xl px-4 tracking-tight transition-colors mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Different places. One purpose.
        </h2>
        <p className="text-stone-800 dark:text-stone-200 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-3xl">
          Each Canyon Ranch destination has its own rhythm, landscape, and character. What connects them is a commitment to helping you live well.
        </p>
      </div>

      <div className="w-full mt-12 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 pb-12">
          {[
            {
              id: 1,
              city: "LENOX, MA",
              desc: "Two MICHELIN Keys -\nAn exceptional stay",
              img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1740&auto=format&fit=crop"
            },
            {
              id: 2,
              city: "TUCSON, AZ",
              desc: "Three MICHELIN Keys -\nAn extraordinary stay",
              img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1721&auto=format&fit=crop"
            },
            {
              id: 3,
              city: "AUSTIN, TX",
              desc: "Our New Hill Country Resort Opens\nOctober 15",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&auto=format&fit=crop"
            },
            {
              id: 4,
              city: "LAS VEGAS, NV",
              desc: "Forbes Four-Star Award: Finest\nProperties in the World",
              img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=1740&auto=format&fit=crop"
            },
            {
              id: 5,
              city: "FORT WORTH, TX",
              desc: "Best Day Spa & Gym/Fitness\nCenter by 76107 Magazine",
              img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1740&auto=format&fit=crop"
            },
          ].map((dest) => (
            <div 
              key={dest.id} 
              className="w-full flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-md border border-stone-200 dark:border-stone-800 mb-6 bg-white dark:bg-stone-900">
                <img
                  src={dest.img}
                  alt={dest.city}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col px-1">
                <h3 className="text-lg md:text-xl text-stone-800 dark:text-stone-100 mb-2 font-normal" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {dest.city}
                </h3>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] text-stone-500">❖</span>
                  </div>
                  <p className="text-xs font-medium text-stone-600 dark:text-stone-400 leading-snug whitespace-pre-line">
                    {dest.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;
