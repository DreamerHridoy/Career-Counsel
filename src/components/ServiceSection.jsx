import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulate fetching data from servicesData.json
    fetch("servicesData.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {service.serviceName}
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Category:</strong> {service.category}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Pricing:</strong> {service.pricing}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Counselor:</strong> {service.counselor}
            </p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={service.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Visit
              </a>
              <Link
                to={`/service/${service.id}`}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
