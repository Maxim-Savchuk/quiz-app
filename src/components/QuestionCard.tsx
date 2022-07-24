import React from 'react';

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answer,
  callback,
  question,
  questionNr,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default QuestionCard;
