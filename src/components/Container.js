import "../styles/Container.css";

const Container = ({ className, ...props }) => {
  return <div className={`container ${className || ""}`} {...props} />;
};

export default Container;
