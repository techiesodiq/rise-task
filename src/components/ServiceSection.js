import homeData from "../assets/data/homeData";
import "../styles/Service.css";

const { services } = homeData;

const ServiceSection = () => {
  return (
    <section className="services-section">
      {services.map((service, index) => {
        const { title, description, link, linkText, image } = service;
        return (
          <div
            className="service-row"
            key={index}
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div className="service-text">
              <h2>{title}</h2>
              <p>{description}</p>
              <a href={link} className="service-link">
                {linkText}
                <span>&#8594;</span>
              </a>
            </div>
            <div className="service-image">
              <img src={image} alt={title} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServiceSection;
