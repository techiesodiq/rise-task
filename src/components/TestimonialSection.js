import homeData from "../assets/data/homeData";
import "../styles/Testimonial.css";
import Container from "./Container";

const {
  testimonials: { title, subtitle, quotations },
} = homeData;

const TestimonialSection = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const totalSlides = testimonials.quotations.length;
  //   const testimonialListRef = useRef(null);

  //   const handleNextSlide = () => {
  //     setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  //   };

  // Automatic sliding every 2 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       handleNextSlide();
  //     }, 500); // 2 seconds interval

  //     return () => clearInterval(interval);
  //   }, []);

  //   useEffect(() => {
  //     const sliderWidth = testimonialListRef.current.offsetWidth;
  //     testimonialListRef.current.style.transform = `translateX(-${
  //       currentSlide * sliderWidth
  //     }px)`;
  //   }, [currentSlide]);

  return (
    <section className="testimonial-section">
      <Container>
        <div className="testimonial-content">
          <div className="testimonial-header">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          {/* <div className="testimonial-slider-wrapper"> */}
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
          {/* </div> */}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
