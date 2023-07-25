import React from 'react';
import PropTypes from 'prop-types';
import {FeedbackWidgetResult} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <FeedbackWidgetResult className="FeedbackWidget__results">
      <li className="FeedbackWidget__result">Good: {good}</li>
      <li className="FeedbackWidget__result">Neutral: {neutral}</li>
      <li className="FeedbackWidget__result">Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive Feedback: {positiveFeedback}%</li>
    </FeedbackWidgetResult>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
