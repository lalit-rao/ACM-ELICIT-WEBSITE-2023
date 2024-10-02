"use client";
import {motion} from "framer-motion";
import "../index.css"
import {heroLogo} from "../assets/images/index.js";
import {HeroHighlight} from "./hero-highlight.jsx";

export default function HeroHighlightDemo() {
    return (
        (
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="relative font-league px-4 font-extrabold text-neutral-700 dark:text-white text-center ">
                    <img className="md:w-[1100px] " src={heroLogo}/>

                    {/* <p className="absolute text-[70px] font-mono translate-y-[-20.2%] md:text-[320px] z-20 right-0 bottom-0 text-stroke">
                    24
                </p> */}

                    {/* <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight> */}
                </motion.h1>
            </HeroHighlight>)
    );
}
