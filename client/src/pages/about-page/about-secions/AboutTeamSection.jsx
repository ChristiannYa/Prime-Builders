import { useTranslation } from "react-i18next";
import { getTeamMembers } from "../../../contants/about-page";
import ImageWithLoader from "../../../components/ImageWithLoader";

const AboutTeam = () => {
  const { t } = useTranslation();
  const translatedTeamMembers = getTeamMembers();

  return (
    <div className="sectionPaddingY bg-secondary relative">
      <div className="screen-xl">
        <h3 className="textTitle text-center font-medium mb-7">
          {t("about.team.sectionTitle")}
        </h3>

        <div className="flexcol-center">
          {translatedTeamMembers.map((member) => (
            <div
              key={member.id}
              className="md:w-[600px] bg-white/5 rounded-sm p-4 flex flex-col items-center text-center"
            >
              <div className="w-44 h-44 rounded-full overflow-hidden mb-3">
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
