import React from "react";
import "./serviceSection.css";
import statutoryPermissionsAndApprovals from "../../../assests/images/servicesection1.jpg";
import propertyMonitoring from "../../../assests/images/servicesection2.jpg";
import propertyDocumentary from "../../../assests/images/servicesection3.jpg";
import propertymarketing from "../../../assests/images/servicesection4.jpg";
import legalRealty from "../../../assests/images/servicesection5.jpg"

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Statutory Permissions & Approvals",
    description:
      "We provide end-to-end assistance in securing all mandatory regulatory approvals required for property development, transactions, and usage.",
 image: statutoryPermissionsAndApprovals,
  },
  {
    title: "Property Monitoring Services",
    description:
      "Our flagship service ensures that your property remains protected, secure, and well-documented —even when you're away. We conduct periodic on-site inspections.",
    image:propertyMonitoring,
  },
  {
    title: "Property Documentary Services",
    description:
      "We provide end-to-end assistance in securing all mandatory regulatory approvals required for property development, transactions, and usage.",
    image:propertyDocumentary,
  },
  {
    title: "Property marketing Services",
    description:
      "We provide end-to-end assistance in securing all mandatory regulatory approvals required for property development, transactions, and usage.",
    image: propertymarketing,
  },
  {
    title: "Legal Realty Services",
    description:
      "We provide end-to-end assistance in securing all mandatory regulatory approvals required for property development, transactions, and usage.",
    image:legalRealty,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="services-section">
     <h2 className="services-title">
        SE
        <span className="rvi-underline">RVI</span>
        <span className="c-underline">C</span>
        <span>ES</span>
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="view-more">
                View More &nbsp;&#8594;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
