import PropTypes from 'prop-types';
import { StatList, StatItem, StatText, StatValue } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatItem>
        <StatText>
          Good: {good}
          <StatValue></StatValue>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Neutral: {neutral}
          <StatValue></StatValue>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Bad: {bad}
          <StatValue></StatValue>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Total: {total}
          <StatValue></StatValue>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Positive Feedback: {positivePercentage} %<StatValue></StatValue>
        </StatText>
      </StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
