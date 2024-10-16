import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import teamMembers from './data.js';

const CoreCard = () => {
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.committee]) {
      acc[member.committee] = [];
    }
    acc[member.committee].push(member);
    return acc;
  }, {});

  const [visibleCommittees, setVisibleCommittees] = useState({});

  const onEnterViewport = (committee) => {
    setVisibleCommittees(prev => ({ ...prev, [committee]: true }));
  }; //scroll based cards rise upwards -> uses react-scroll-trigger

  return (
      <div className="flex flex-col items-center gap-16 mt-16 py-12 mb-36">
        <div className="title-heading-box1">
          <div className="title-heading">
            <p className="title-heading2">
              Core Committee
            </p>
          </div>
        </div>
        {Object.entries(groupedMembers).map(([committee, members]) => (
            <ScrollTrigger
                key={committee}
                onEnter={() => onEnterViewport(committee)}
                triggerOnce
            >
              <div
                  className={`w-full transition-opacity duration-1000 ease-out ${visibleCommittees[committee] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                {/* Committee Banner */}
                <div className="title-heading-box1">
                  <div className="title-heading">
                    <p className="title-heading2">
                      CC {committee}
                    </p>
                  </div>
                </div>

                {/* Member Cards */}
                <div className="flex flex-wrap justify-center gap-12">
                  {members.map((member, index) => (
                      <div
                          key={index}
                          className={`flex flex-col items-center relative transition-all duration-1000 ease-out delay-${index * 100}`}
                          style={{
                            transitionDelay: `${index * 100}ms`,
                            opacity: visibleCommittees[committee] ? 1 : 0,
                            transform: visibleCommittees[committee] ? 'translateY(0)' : 'translateY(50px)'
                          }}
                      >
                        {/* Outer Card Container */}
                        <div
                            className="w-[300px] h-[400px] rounded-lg bg-gradient-to-b from-gray-800 to-black p-4 shadow-xl">
                          {/* Inner Card with Image and Red Border */}
                          <div className="w-full h-full rounded-lg relative">
                            {/* Red border effect */}
                            <div className="absolute inset-0 border-2 border-red-500 rounded-lg"></div>
                            {/* Image */}
                            <img
                                src={member.imageC}
                                alt={member.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>

                        {/* Name Banner */}
                        <div
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-48 text-center rounded-md p-2 shadow-lg z-10">
                          <p className="text-lg font-bold text-gray-900">{member.name}</p>
                          <p className="text-sm text-red-600">{member.role}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </ScrollTrigger>
        ))}
      </div>
  );
}

export default CoreCard;
