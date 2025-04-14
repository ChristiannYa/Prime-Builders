import { useTranslation } from "react-i18next";
import { getTeamMembers } from "../../../contants/about-page";
import ImageWithLoader from "../../../components/ImageWithLoader";

const AboutTeam = () => {
  const { t } = useTranslation();
  const translatedTeamMembers = getTeamMembers();

  return (
    <div className="sectionPaddingY bg-secondary relative">
      <div className="screen-xl">
        <h3 className="textTitle text-center font-medium mb-6">
          {t("about.team.sectionTitle")}
        </h3>

        <div className="flexcol-center">
          {translatedTeamMembers.map((member) => (
            <div
              key={member.id}
              className="md:w-[620px] rounded-sm p-4 flex flex-col items-center text-center"
            >
              <div className="flexrow-center gap-x-6">
                <div className="w-32 h-32 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full overflow-hidden mb-3">
                  <ImageWithLoader
                    src={member.image}
                    placeholderSrc={member.placeholderImage}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-32 h-32 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full overflow-hidden mb-3">
                  <ImageWithLoader
                    src={member.image2}
                    placeholderSrc={member.placeholderImage2}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-1 mb-1">
                <h3 className="text-primary textSubtitle font-medium normal-case">
                  {member.name}
                </h3>
                <h4 className="text text-white/70 font-medium">
                  {member.role}
                </h4>
              </div>
              <p className="textCard">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
