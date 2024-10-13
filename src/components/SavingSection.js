import homeData from "../assets/data/homeData";
import "../styles/Savings.css";

const {
  savingData: {
    title,
    subtitle,
    emphaticWord,
    description,
    image,
    link,
    linkText,
  },
} = homeData;

const SavingSection = () => {
  return (
    <section className="savings-section">
      <div className="savings-image">
        <img src={image} alt="Savings" />
      </div>
      <div className="savings-text">
        <h4>{title}</h4>
        <h2>
          {subtitle} <span>{emphaticWord}</span>
        </h2>
        <p>{description}</p>
        <a href={link}>{linkText}</a>
      </div>
    </section>
  );
};

export default SavingSection;
