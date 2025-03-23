import { servicesList } from '../../../contants/services-page';
import { useState } from 'react';
import ImageWithLoader from '../../../components/ImageWithLoader';

const ServicesListSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div>
      <div className="p-1">
        <div className="servicesGrid">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`${service.class} service-item relative overflow-hidden shadow-lg cursor-pointer`}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <ImageWithLoader
                src={service.image}
                placeholderSrc={service.placeholderImage}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
              <div
                className={`service-overlay absolute inset-0 dark-glass flexcol-center p-4 transition-opacity duration-300 ${
                  hoveredId === service.id ? 'active' : ''
                }`}
              >
                <h3 className="text-white text-xl font-bold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-white text-sm text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesListSection;
