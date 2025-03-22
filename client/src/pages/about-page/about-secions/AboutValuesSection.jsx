import LayeredCurvesSvg from '../../../components/LayeredCurves';
import { companyValues } from '../../../contants/about-page';

const AboutValuesSection = () => {
  return (
    <div className="bg-neutral-300 pb-18 max-md:pb-12 pt-28 max-md:pt-18 relative">
      <LayeredCurvesSvg />
      <div className="screen-xl">
        <h3 className="textTitle text-secondary text-center font-medium mb-7">
          Why Choose Us?
        </h3>
        <div className="aboutValues">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-neutral-200 rounded-sm shadow-card p-3"
            >
              <h3 className="textSubtitle text-secondary">{value.title}</h3>
              <p className="textCard text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValuesSection;
