import { useTranslation } from 'react-i18next';
import LayeredCurvesSvg from '../../../components/LayeredCurves';
import { getCompanyValues } from '../../../contants/about-page';

const AboutValuesSection = () => {
  const { t } = useTranslation();
  const translatedValues = getCompanyValues();

  return (
    <div className="bg-neutral-300 pb-18 max-md:pb-12 pt-28 max-md:pt-18 relative">
      <LayeredCurvesSvg />
      <div className="screen-xl">
        <h3 className="textTitle text-secondary text-center font-medium mb-7">
          {t('about.values.sectionTitle')}
        </h3>
        <div className="aboutValues">
          {translatedValues.map((value, index) => (
            <div
              key={index}
              className="bg-neutral-200 rounded-sm shadow-card p-3"
            >
              <h3 className="textSubtitle text-secondary normal-case">
                {value.title}
              </h3>
              <p className="textCard text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValuesSection;
