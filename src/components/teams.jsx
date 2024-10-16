import {useEffect, useRef} from "react";
import "./teams.css";

const Committee = ({ committeeName, members }) => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '10px',
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const cardIndex = cardRefs.current.indexOf(entry.target);
                    const delay = cardIndex * 200; // Adjust delay for staggered effect
                    setTimeout(() => {
                        entry.target.classList.add('flip-card');
                    }, delay);
                    observer.unobserve(entry.target); // Stop observing after adding the class
                }
            });
        }, options);

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, [members]);

    return (
        <div>
            <div className="title-heading-box1">
                <div className="title-heading">
                    <p className="title-heading2">{committeeName}</p>
                </div>
            </div>
            <div className="execs-section-containerof-20">
                {members.map((person, index) => (
                    <div
                        key={index}
                        className="execs-section-card0"
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <div className="execs-section-card-inner0">
                            <div className={`execs-section-front0 ${person.imageClass}`} />
                            <div className={`execs-section-back0 ${person.imageClass2}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



const ExecsSection = () => {
    const committees = [
        {
            name: "EC CREATIVES",
            members: [
                {imageClass: "Person-creaf", imageClass2: "Person-crea1"},
                {imageClass: "Person-creaf", imageClass2: "Person-crea2"},
            ],
        },
        {
            name: "EC WEB DEV",
            members: [
                {imageClass: "Person-webf", imageClass2: "Person-webb1"},
                {imageClass: "Person-webf", imageClass2: "Person-webb2"},
                {imageClass: "Person-webf", imageClass2: "Person-webb3"},
            ],
        },
        {
            name: "EC Events",
            members: [
                {imageClass: "Person-eventf", imageClass2: "Person-event1"},
                {imageClass: "Person-eventf", imageClass2: "Person-event2"},
                {imageClass: "Person-eventf", imageClass2: "Person-event3"},
            ],
        },
        {
            name: "EC FINANCE",
            members: [
                {imageClass: "Person-finf", imageClass2: "Person-fin1"},
                {imageClass: "Person-finf", imageClass2: "Person-fin2"},
            ],
        },
        {
            name: "EC Design",
            members: [
                {imageClass: "Person-designf", imageClass2: "Person-design1"},
            ],
        },
        {
            name: "EC MARKETING",
            members: [
                {imageClass: "Person-markf", imageClass2: "Person-mark1"},
            ],
        },
        {
            name: "EC Operation",
            members: [
                {imageClass: "Person-operf", imageClass2: "Person-oper1"},
            ],
        },
        {
            name: "EC Sponsorship",
            members: [
                {imageClass: "Person-sponsf", imageClass2: "Person-spons1"},
            ],
        },
        {
            name: "EC Technicals",
            members: [
                {imageClass: "Person-techf", imageClass2: "Person-tech1"},
                {imageClass: "Person-techf", imageClass2: "Person-tech2"},
            ],
        },
        {
            name: "EC Media",
            members: [
                {imageClass: "Person-mediaf", imageClass2: "Person-media1"},
                {imageClass: "Person-mediaf", imageClass2: "Person-media2"},
                {imageClass: "Person-mediaf", imageClass2: "Person-media3"},
                {imageClass: "Person-mediaf", imageClass2: "Person-media4"},
            ],
        },
    ];

    return (
        <div className="execs-section-container">
            <div className="title-heading-box1">
                <div className="title-heading">
                    <p className="title-heading2">
                        Executive Committee
                    </p>
                </div>
            </div>
            {committees.map((committee, index) => (
                <Committee
                    key={index}
                    committeeName={committee.name}
                    members={committee.members}
                />
            ))}
        </div>
    );
};

export default ExecsSection;
