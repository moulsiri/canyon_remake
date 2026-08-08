"use client"

import React from 'react'
import StateOfMind from '../ui/StateOfMind'

const ThirdSection = () => {
  return (
    <section className="relative z-[20] w-full min-h-screen bg-[#F4F4F1] dark:bg-stone-950 pt-16 md:pt-24">
      {/* Content for the third section goes here */}
      <div className="flex flex-col items-center w-full px-6 md:px-12 max-w-7xl mx-auto">
      <p className="text-xs md:text-sm tracking-[0.25em] font-medium uppercase mb-6 text-stone-800 dark:text-stone-100  drop-shadow-md">
      What brought you here?
        </p>
        <h2
          className="text-5xl md:text-5xl text-stone-800 dark:text-stone-100 text-center max-w-4xl px-4 tracking-tight transition-colors"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Every journey begins with a reason.
        </h2>
      </div>

      <StateOfMind />
    </section>
  )
}

export default ThirdSection