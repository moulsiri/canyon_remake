import { TargetAndTransition, VariantLabels } from "framer-motion";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };

export const variableFont = {
  initial: {
    fontWeight: 100,
    // fontSize: "32px",
  },
  enter: (custom: number): TargetAndTransition => ({
    fontWeight: [100, 900, 100],
    transition: {
      duration: 4,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 1 * custom,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
  exit: (custom: number): TargetAndTransition => ({
    fontWeight: [100, 900, 100],
    transition: {
      duration: 4,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 1 * custom,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

export const slideUp = {
  initial: {
    top: "0%",
  },
  enter: {
    top: "-150%",
    transition,
  },
  exit: {
    top: "0%",
    transition,
  },
};

export const textRevealBasics = {
  initial: {
    y: "-100%",
  },
  enter: (custom: number): TargetAndTransition => ({
    y: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 1 * custom * 0.01,
      duration: 2,
    },
  }),
  exit: {
    y: "100%",
  },
};

export const nameSpecialReveal = {
  initial: {
    opacity: 0,
    height:0,
    transform: "translate(0,65px) rotateX(-90deg) rotateY(0deg)",
  },
  enter: {
    height: "auto",
    transform: "translate(0,0px) rotateX(0deg) rotateY(0deg)",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    opacity: 1,
  },
  exit: {
    height:0,
    transform: "translate(0,65px) rotateX(-90deg) rotateY(0deg)",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export const opacity={
  initial:{
    opacity:0,

  },
  enter:{
    opacity:1,
    transition:{duration:1},
   
  },
  exit:{
    opacity:0,
    transition:{duration:1},
  }
}

export const backgroundShad={
  initial:{
    height:0
  },
  enter:{
    height:'100vh',
    transition
  },
  exit:{
    height:0,
    transition
  }
}

export const heightNav={
  initial:{
      height:0
  },
  enter:{
      height:"auto",
      transition
  },
  exit:{
      height:0,
      transition
  }
}
