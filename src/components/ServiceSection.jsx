// ServiceSection.jsx
import servicesData from "../servicesData.json";

const ServiceSection = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white shadow-md rounded-md text-center"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">Category: {service.category}</p>
            <p className="text-gray-600 mb-2">Pricing: {service.pricing}</p>
            <p className="text-gray-600 mb-4">Counselor: {service.counselor}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
