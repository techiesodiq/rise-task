import homeData from "../assets/data/homeData";
import "../styles/Service.css";

const services = homeData.services;

const ServiceSection = () => {
  return (
    <section className="services-section">
      {services.map((service, index) => (
        <div
          className="service-row"
          key={index}
          style={{
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div className="service-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" className="service-link">
              {service.linkText}
              <span>&#8594;</span>
            </a>
          </div>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
