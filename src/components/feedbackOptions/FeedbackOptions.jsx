import React from 'react';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onVote }) => {
  return (
    <div>
      {options.map(option => (
        <Button key={option} type="button" onClick={() => onVote(option)}>
          {option}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
