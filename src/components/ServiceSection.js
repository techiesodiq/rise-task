import { useEffect, useState } from "react";
import homeData from "../assets/data/homeData";
import "../styles/Service.css";
import Container from "./Container";

const { services } = homeData;

const ServiceSection = () => {
  const [matchesMediaQuery, setMatchesMediaQuery] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setMatchesMediaQuery(mediaQuery.matches);
    mediaQuery.addEventListener("change", () =>
      setMatchesMediaQuery(mediaQuery.matches)
    );
    return () =>
      mediaQuery.removeEventListener("change", () =>
        setMatchesMediaQuery(mediaQuery.matches)
      );
  }, []);

  return (
    <section className="services-section">
      <Container className="services-container">
        {services.map((service, index) => {
          const {
            desktopTitle,
            mobileTitle,
            desktopDescription,
            mobileDescription,
            link,
            linkText,
            image,
            mobileImage,
          } = service;
          return (
            <div
              className="service-row"
              key={index}
              style={{
                [matchesMediaQuery ? "flexDirection" : ""]: matchesMediaQuery
                  ? "column-reverse"
                  : "",
              }}
            >
              <div className="service-text">
                <h2 className="desktop-title">{desktopTitle}</h2>
                <h2 className="mobile-title">{mobileTitle}</h2>
                <p className="desktop-description">{desktopDescription}</p>
                <p className="mobile-description">{mobileDescription}</p>
                <a href={link} className="service-link">
                  {linkText}
                  <span>&#8594;</span>
                </a>
              </div>
              <div className="service-image">
                <img className="desktop-image" src={image} alt={desktopTitle} />
                <img
                  className="mobile-image"
                  src={mobileImage}
                  alt={mobileTitle}
                />
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default ServiceSection;
