import { teamMembers } from '../../../contants/about-page';
import ImageWithLoader from '../../../components/ImageWithLoader';

const AboutTeam = () => {
  return (
    <div className="sectionPaddingY bg-secondary relative">
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
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                <ImageWithLoader
                  src={member.image}
                  placeholderSrc={member.placeholderImage}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
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
