import SavingImg from "../assets/images/savings.svg";
import "../styles/Savings.css";

const SavingSection = () => {
  return (
    <section className="savings-section">
      <div className="savings-image">
        <img src={SavingImg} alt="Savings" />
      </div>
      <div className="savings-text">
        <h4>The Rise App</h4>
        <h2>
          Save for your <span>future</span>
        </h2>
        <p>
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>
        <a href="#">Start Saving</a>
      </div>
    </section>
  );
};

export default SavingSection;
