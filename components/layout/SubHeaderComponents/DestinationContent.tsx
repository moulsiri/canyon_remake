import React from "react";
import { destinationsData, experiencesData, shopData } from "@/config/navData";
import Image from "next/image";
const DestinationContent = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-8 w-1/4 text-xs font-semibold tracking-widest uppercase">
        {destinationsData.column1.map((section, idx) => (
          <div key={idx}>
            <h3 className="mb-4 text-black">{section.title}</h3>
            <div className="flex flex-col gap-3">
              {section.items.map((item, i) => (
                <a
                  href={item.href}
                  key={i}
                  className={` hover:text-[#b35930]  text-stone-500 transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-1/4 text-xs font-semibold tracking-widest uppercase">
        <h3 className="mb-4 text-black">{destinationsData.column2.title}</h3>
        <div className="flex flex-col gap-3">
          {destinationsData.column2.items.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="text-stone-500 hover:text-black transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-2/5">
        <div className="aspect-[16/7] bg-stone-200 mb-6 relative">
          <Image src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hotel room"
         fill
         className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-light mb-4 text-[#333]">
          {destinationsData.column3.title}
        </h3>
        <p className="text-stone-500 font-light leading-relaxed">
          {destinationsData.column3.description}
        </p>
      </div>
    </div>
  );
};

export default DestinationContent;
