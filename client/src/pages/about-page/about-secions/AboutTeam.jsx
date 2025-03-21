import { teamMembers } from '../../../contants/about-page';

const AboutTeam = () => {
  return (
    <div className="bg-secondary py-16 relative">
      <div className="screen-xl">
        <h3 className="textTitle text-center font-medium mb-7">
          Meet Our Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/5 rounded-sm p-4 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="w-36 h-3w-36 object-cover rounded-full mb-4 border-[3px] border-primary"
              />
              <h3 className="textSubtitle text-primary font-medium">
                {member.name}
              </h3>
              <h4 className="text text-white/70 font-medium">{member.role}</h4>
              <p className="textCard">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
