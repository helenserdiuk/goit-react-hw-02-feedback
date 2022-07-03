import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    <button
      className={styles.btnStyle}
      type="button"
      name={options[0]}
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={styles.btnStyle}
      type="button"
      name={options[1]}
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={styles.btnStyle}
      type="button"
      name={options[2]}
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
