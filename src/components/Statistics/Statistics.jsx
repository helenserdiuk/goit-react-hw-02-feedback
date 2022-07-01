import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => (
  <>
    <h2>Statistics</h2>
    <p className={styles.statistic__text}>Good: {good}</p>
    <p className={styles.statistic__text}>Neutral: {neutral}</p>
    <p className={styles.statistic__text}>Bad: {bad}</p>
    <p className={styles.statistic__text}>Total: {total}</p>
    <p className={styles.statistic__text}>
      Positive Feedback: {positivePercent}%
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercent: PropTypes.number,
};

export default Statistics;
