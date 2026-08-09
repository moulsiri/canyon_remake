import React from "react";
import { shopData } from "@/config/navData";
import Image from "next/image";

const ShopContent = () => {
  return (
    <div className="flex w-full gap-12 justify-between">
      <div className="flex flex-col gap-3 w-1/4 text-xs font-semibold tracking-widest uppercase">
        {shopData.column1.map((item, i) => (
          <a
            href={item.href}
            key={i}
            className={` hover:text-[#b35930] text-stone-500 transition-colors`}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex flex-col w-1/3">
        <div className="aspect-[4/2] bg-stone-200 mb-6 relative">
          <Image
            src="https://images.unsplash.com/photo-1608755728617-aefab37d2edd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="gift"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-light mb-4 text-[#333]">
          {shopData.column2.title}
        </h3>
        <p className="text-stone-500 font-light leading-relaxed">
          {shopData.column2.description}
        </p>
      </div>

      <div className="flex flex-col w-1/3">
        <div className="aspect-[4/2] bg-stone-200 mb-6 relative">
          <Image
            src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cosmetics"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-light mb-4 text-[#333]">
          {shopData.column3.title}
        </h3>
        <p className="text-stone-500 font-light leading-relaxed">
          {shopData.column3.description}
        </p>
      </div>
    </div>
  );
};

export default ShopContent;
