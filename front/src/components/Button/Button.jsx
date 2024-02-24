import PropTypes from "prop-types";

function Button({ type, disabled, onClick, text }) {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
