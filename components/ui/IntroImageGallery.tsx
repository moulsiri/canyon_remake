import Image from "next/image";
import React from "react";

const IntroImageGallery = () => {
  return (
    <div className="mt-12 md:mt-60 w-full">
      {/* Desktop/Tablet Layout */}
      <div className="hidden lg:block">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] relative shadow-2xl bg-yellow-200 flex flex-col-reverse">
          <div className="absolute bg-gradient-to-r from-[var(--background)] to-transparent w-1/2 h-full top-0 left-0 z-10 pointer-events-none"></div>

          {/* Main Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Resort image"
            fill
            className="object-cover"
            priority
          />

          {/**Image 1 */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[0%] left-[50%] w-[40%] z-20 shadow-2xl  overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1740&auto=format&fit=crop"
              alt="Resort image"
              width={1740}
              height={1160}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/**Image 2 */}
          <div className="absolute top-[10%] left-[-10%] w-[30%] z-20 shadow-2xl  overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1744&auto=format&fit=crop"
              alt="Resort image"
              width={1744}
              height={1163}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/**Image 3 */}
          <div className="absolute bottom-[-30%] left-[12%] w-[40%] z-20 shadow-2xl  overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1742&auto=format&fit=crop"
              alt="Resort image"
              width={1742}
              height={1161}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          <div className="absolute right-0 bottom-[-30%] w-[45%]  flex flex-col items-end text-right z-30">
            <p
              className="text-stone-800 dark:text-stone-200 text-sm md:text-base font-medium leading-relaxed tracking-wide"
            >
              At Canyon Ranch, Health Becomes Personal. Guided By Science,
              Inspired By Nature, And Shaped Around You, Every Experience Is
              Designed To Help You Feel Better, Live Better, And Carry That
              Feeling Home.
            </p>

            <button className="mt-4 text-xs md:text-sm font-semibold uppercase tracking-widest text-stone-900 dark:text-stone-100 cursor-pointer group transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-full after:h-px after:bg-stone-900 dark:after:bg-stone-100 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-right">
              Discover Canyon Ranch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Fallback Layout */}
      <div className="block lg:hidden flex flex-col gap-10 w-full px-2">
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-2xl bg-stone-200">
          <Image
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1742&auto=format&fit=crop"
            alt="Resort image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <p className="text-stone-800 dark:text-stone-200 text-sm font-medium leading-loose tracking-wide mb-8">
            At Canyon Ranch, Health Becomes Personal. Guided By Science,
            Inspired By Nature, And Shaped Around You, Every Experience Is
            Designed To Help You Feel Better, Live Better, And Carry That
            Feeling Home.
          </p>

          <button className="text-xs font-semibold uppercase tracking-widest text-[#b35930] border border-[#b35930] px-8 py-3 rounded-sm transition-colors hover:bg-[#b35930] hover:text-white">
            Discover Canyon Ranch
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroImageGallery;
