import React from 'react';
import PropTypes from 'prop-types';
import { Feedbacks, Button } from './FeedbackOptions.styled';
import { ucFirst } from './usFirst';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedbacks>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {ucFirst(option)}
        </Button>
      ))}
    </Feedbacks>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
