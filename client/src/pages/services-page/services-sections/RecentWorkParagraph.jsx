import { useLetterAnimation } from '../../../hooks/useLetterAnimation';

const ServicesIntroductionSection = () => {
  const titleRef = useLetterAnimation();

  return (
    <section className="sectionPaddingY bg-white">
      <div className="screen space-y-6">
        <h1 className="pageTitle text-black text-center text-3xl xl:text-5xl" ref={titleRef}>
          Recent Work
        </h1>

        <p className="text text-black text-justify">
          Browse through our recent projects below to see how we&apos;ve
          transformed spaces and created structures that stand the test of time.
          Whether you&apos;re planning a small renovation or a large-scale
          construction project, our portfolio demonstrates our capability to
          deliver exceptional results.
        </p>
      </div>
    </section>
  );
};

export default ServicesIntroductionSection;
