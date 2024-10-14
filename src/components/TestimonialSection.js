import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import homeData from "../assets/data/homeData";
import "../styles/Testimonial.css";
import Container from "./Container";

const {
  testimonials: { title, mobileTitle, subtitle, mobileSubtitle, quotations },
} = homeData;

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <div className="testimonial-content">
          <div className="testimonial-header">
            <h2 className="desktop-title">{title}</h2>
            <h2 className="mobile-title">{mobileTitle}</h2>
            <p className="desktop-subtitle">{subtitle}</p>
            <p className="mobile-subtitle">{mobileSubtitle}</p>
          </div>
          <div className="testimonial-list">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              grabCursor={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {quotations.map((item, index) => {
                const { quote, name, occupation, avatar } = item || {};
                return (
                  <SwiperSlide key={index}>
                    <div className="testimonial">
                      <p>{quote}</p>
                      <div className="testimonial-author">
                        <img src={avatar} alt={name} />
                        <span>{name}</span>
                        <p className="author-occupation">{occupation}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
