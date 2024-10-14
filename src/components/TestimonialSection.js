import homeData from "../assets/data/homeData";
import "../styles/Testimonial.css";
import Container from "./Container";

const {
  testimonials: { title, subtitle, quotations },
} = homeData;

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <div className="testimonial-content">
          <div className="testimonial-header">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div className="testimonial-list">
            {quotations.map((item, index) => {
              const { quote, name, avatar } = item || {};
              return (
                <div className="testimonial" key={index}>
                  <p>{quote}</p>
                  <div className="testimonial-author">
                    <img src={avatar} alt={name} /> <span>{name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
