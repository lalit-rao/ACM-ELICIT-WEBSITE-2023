// CounterCards.js
import { useRef, useState, useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import "./CounterCards.css";

export default function CounterCards() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);
    const count4 = useMotionValue(0);

    const rounded1 = useTransform(count1, Math.round);
    const rounded2 = useTransform(count2, Math.round);
    const rounded3 = useTransform(count3, Math.round);
    const rounded4 = useTransform(count4, Math.round);

    useEffect(() => {
        if (hasAnimated) return; // Prevent re-animating if already done

        const observerOptions = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.5, // 50% of the section is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Start animations
                    animate(count1, 4000, { duration: 3 });
                    animate(count2, 12, { duration: 3 });
                    animate(count3, 8, { duration: 3 });
                    animate(count4, 200, { duration: 3 });

                    setHasAnimated(true); // Ensure animations run only once
                    observer.unobserve(entry.target); // Stop observing after animation starts
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [count1, count2, count3, count4, hasAnimated]);

    return (
        <>
            <section id="animated-box" ref={sectionRef}>
                <div className="cc-row">
                    <div className="cc-column">
                        <div className="cc-card">
                            <p><i className="fa fa-user fa-lg"></i></p>
                            <div className="counterCards-text">
                                <motion.h1>{rounded1}</motion.h1>
                                <p>+</p>
                            </div>
                            <p className="cc-card-name">Participants</p>
                        </div>
                    </div>

                    <div className="cc-column">
                        <div className="cc-card">
                            <div className="counterCards-text">
                                <motion.h1>{rounded2}</motion.h1>
                                <p>+</p>
                            </div>
                            <p className="cc-card-name">Events</p>
                        </div>
                    </div>

                    <div className="cc-column">
                        <div className="cc-card">
                            <div className="counterCards-text">
                                <motion.h1>{rounded3}</motion.h1>
                                <p>+</p>
                            </div>
                            <p className="cc-card-name">Sponsors</p>
                        </div>
                    </div>

                    <div className="cc-column">
                        <div className="cc-card">
                            <div className="counterCards-text">
                                <motion.h1>{rounded4}</motion.h1>
                                <p className="space">K </p>
                                <p>+</p>
                            </div>
                            <p className="cc-card-name">Prize Pool </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
