import images from "../assets/images/CoreTeams/index1.js";

const teamMembers = images.map((member) => ({
  name: member.name,
  imageC: member.imageC,
  committee: member.committee,
}));

export default teamMembers;
