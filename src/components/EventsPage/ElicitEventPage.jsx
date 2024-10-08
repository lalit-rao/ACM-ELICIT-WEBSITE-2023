import {
  CodersFeud,
  Diffuse,
  DroneRacing,
  ElicitExpo,
  Events,
  GamersAsylum,
  Hacks,
  Kagglethon,
  RoboRacing, RoboticsWorkshop, Scapegoat,
  StockMarket
} from "../../assets/images/index.js";
import PropTypes from "prop-types";

const events = [
  {
    id: 1,
    title: 'Stock Market Showdown',
    date: 'October 5, 2024',
    time: '11:00 AM',
    image: StockMarket,
    description: "The ultimate Bull vs. Bear brawl is back! The Stock Market Showdown at Elicit '24 is bigger, bolder, and more intense than ever!",
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdgCDUArNpCgTLx4iAQ20n4AD7rt5Bmvj8IQxNvO7kWXWqukA/viewform?usp=sf_link'
  },
  {
    id: 2,
    title: 'Speaker Talk',
    date: 'October 11, 2024',
    time: '1:00 PM',
    image: Events,
    description: 'Unravel the mysteries of coding and algorithms in this exciting event.',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdmCSMs2QzJqFAwV4P_0gAeewaP-nhWGjC9OfOeo_gGidLc9w/viewform'
  },
  {
    id: 3,
    title: 'HACKS 9.0',
    date: 'October 11-13, 2024',
    time: '9:00 PM',
    image: Hacks,
    description: "A 48-HOUR HACKATHON, PREVIOUS EDITIONS OF WHICH HAVE SEEN OVER 900 PARTICIPANTS PAN-INDIA.",
    registerLink: 'https://unstop.com/p/muj-hacks-90-elicit24-muj-acm-student-chapter-1164635'
  },
  {
    id: 4,
    title: 'Drone Racing Experience',
    date: 'October 12, 2024',
    time: '11:00 AM',
    image: DroneRacing,
    description: "AN EXHILARATING HIGH-SPEED COMPETITION WHERE PARTICIPANTS PILOT DRONES THROUGH CHALLENGING OBSTACLE COURSES IN A TEST OF SKILL AND PRECISION.",
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfVCewScCx9TssHpqaSfAy6kCe3-uD0ZqhTvcF7gwWrKWv-jQ/viewform'
  },
  {
    id: 5,
    title: 'Robo Racing Exp Zone',
    date: 'October 12, 2024',
    time: '11:00 AM',
    image: RoboRacing,
    description: 'Challenge conventional thinking and push boundaries in this unconventional event.',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6BUAxAF_fED88kNSzwE1nek1hC7LLJzwvxJOnBFbQj-hdmQ/viewform'
  },
  {
    id: 6,
    title: 'DIFFUSE',
    date: 'October 12, 2024',
    time: '1:00 PM',
    image: Diffuse,
    description: "DIFFUSE IS A THRILLING EVENT WHERE PARTICIPANTS RACE AGAINST TIME TO DISASSEMBLE A SIMULATED BOMB USING HARDWARE ELEMENTS LIKE ARDUINOS, LEDS, AND JUMPER WIRES.",
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSekn97rtozJ6EkbP_n3LVHTEIo-zu9hZgxd_RooLmeb-dOxqw/viewform'
  },
  {
    id: 7,
    title: 'GAMERS ASYLUM',
    date: 'October 12-13, 2024',
    time: '1:00 PM',
    image: GamersAsylum,
    description: "GAMERS ASYLUM IS A COMPETITIVE EVENT WHERE COLLEGE STUDENTS FACE OFF IN POPULAR VIDEO GAMES, HIGHLIGHTING THEIR SKILLS AND PASSION FOR GAMING.",
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd2Z0oVMyMYoCiiLmcneNppqqZG_aTX6tT4xWtJ102IrLGMAw/viewform'
  },
  {
    id: 8,
    title: 'ELICIT EXPO',
    date: 'October 12, 2024',
    time: '11:00 AM',
    image: ElicitExpo,
    description: "THE ULTIMATE EXHIBITION OF INNOVATION! A SHOWCASE OF EVERYTHING ROBOTICS",
    registerLink: 'https://unstop.com/p/muj-elicit-expo-20-elicit24-muj-acm-student-chapter-1147410'
  },
  {
    id: 9,
    title: 'Kagglethon',
    date: 'October 12-13, 2024',
    time: '9:00 PM',
    image: Kagglethon,
    description: "A DATA SCIENCE SHOWDOWN FOR MACHINE LEARNING MASTERS WHICH ALLOWS PARTICIPANTS TO COMPETE IN SOLVING MACHINE LEARNING PROBLEMS",
    registerLink: 'https://unstop.com/p/kagglethon-elicit24-muj-acm-student-chapter-1146970'
  },
  {
    id: 10,
    title: 'CODERS FEUD',
    date: 'October 13, 2024',
    time: '1:00 PM',
    image: CodersFeud,
    description: 'Challenge conventional thinking and push boundaries in this unconventional event.',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc4NfCEwcjS4C4Vou5EW6IYZ3JQXQklm_2NkI5D-wmAnt7NNg/viewform'
  },
  {
    id: 11,
    title: 'Scape G.O.A.T',
    date: 'October 12-13, 2024',
    time: '12:00 PM',
    image: Scapegoat,
    description: 'Join Scape GOAT for thrilling Halloween puzzles, mysteries, and exciting team challenges!',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScgfO8Ny8f9MW5PA5zxLTshTdK1WBre-mosduRBWEcVso59jw/viewform'
  },
  {
    id: 12,
    title: 'Robotics Workshop',
    date: 'October 13, 2024',
    image: RoboticsWorkshop,
    description: 'A session to teach robotics principles and implementation, in collaboration with Techfest IIT BOMBAY',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6qFTu0pkE625xsP_sqbPwAwtIM_lhsvlnzb5rjstaFWJXkw/viewform'
  },
];


const EventPanel = ({ title, date, time, image, description, registerLink }) => (
  <div className="bg-black rounded-lg overflow-hidden flex transition-all duration-200 hover:scale-110 m-30 group">
    <div className="w-2/4 h-30">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="w-2/4 relative">
      <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-purple-500 text-3xl font-bold text-center">{title}</h3>
        <p className="text-purple-500 text-md font-bold text-center mt-4">{date}</p> {/* Date added here */}
        <p className="text-purple-500 text-md font-bold text-center mt-2">{time}</p>
      </div>
      <div
          className="absolute inset-0 flex flex-col items-center justify-center uppercase p-4 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xs font-bold text-center mb-4">{description}</p>
        <a href={registerLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-500 text-white px-5 py-2 font-bold rounded-xl hover:bg-purple-700 transition-colors duration-300 text-xs">
            Register
          </button>
        </a>
      </div>
    </div>
  </div>
);

EventPanel.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  registerLink: PropTypes.string.isRequired,
};

export default function ElicitEvents() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-5xl max-w-[90%] mx-auto font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
        ELICIT EVENTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventPanel
            key={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            image={event.image}
            description={event.description}
            registerLink={event.registerLink}
          />
        ))}
      </div>
    </div>
  );
}
