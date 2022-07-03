import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => (
  <div>
    <p className={styles.statistic__text}>Good: {good}</p>
    <p className={styles.statistic__text}>Neutral: {neutral}</p>
    <p className={styles.statistic__text}>Bad: {bad}</p>
    <p className={styles.statistic__text}>Total: {total}</p>
    <p className={styles.statistic__text}>
      Positive Feedback: {positivePercent}%
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Statistics;
